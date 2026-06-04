import React, { useEffect, useState } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withTheme, withStyles } from '@material-ui/core/styles';
import { Grid, Tab, Tabs } from '@material-ui/core';
import {
  Helmet,
  ProgressOrError,
  formatMessage,
  formatMessageWithValues,
  withModulesManager,
  withHistory,
  historyPush,
  decodeId,
} from '@openimis/fe-core';
import { clearSereGroup, fetchSereGroup } from '../actions';
import { MODULE_NAME, RIGHT_SERE_GROUP_SEARCH } from '../constants';
import SereMembersPanel from '../components/SereMembersPanel';
import SereActivitiesPanel from '../components/SereActivitiesPanel';
import SereGroupInfoSection from '../components/SereGroupInfoSection';

const styles = (theme) => ({
  page: theme.page,
  section: {
    marginBottom: theme.spacing(2),
  },
});

function SereGroupPage({
  intl,
  modulesManager,
  history,
  classes,
  rights,
  groupUuid,
  sereGroup,
  fetchingSereGroup,
  fetchedSereGroup,
  errorSereGroup,
  fetchSereGroup,
  clearSereGroup,
}) {
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    if (groupUuid) {
      fetchSereGroup(modulesManager, [`id: "${groupUuid}"`]);
    }
    return () => clearSereGroup();
  }, [groupUuid]);

  if (!rights.includes(RIGHT_SERE_GROUP_SEARCH)) {
    return formatMessage(intl, MODULE_NAME, 'sereGroups.noRights');
  }

  const title = formatMessageWithValues(intl, MODULE_NAME, 'sereGroup.pageTitle', {
    name: sereGroup?.name ?? '',
  });

  const backToList = () => historyPush(
    modulesManager,
    history,
    'productiveInclusion.route.sereGroups',
  );

  return (
    <div className={classes.page}>
      <Helmet title={title} />
      <ProgressOrError progress={fetchingSereGroup} error={errorSereGroup} />
      {fetchedSereGroup && sereGroup && (
        <>
          <Grid container spacing={2} className={classes.section}>
            <Grid item xs={12}>
              <SereGroupInfoSection sereGroup={sereGroup} onBack={backToList} />
            </Grid>
          </Grid>
          <Tabs value={tabValue} onChange={(_, value) => setTabValue(value)}>
            <Tab label={formatMessage(intl, MODULE_NAME, 'sereGroup.tab.members')} />
            <Tab label={formatMessage(intl, MODULE_NAME, 'sereGroup.tab.activities')} />
          </Tabs>
          {tabValue === 0 && <SereMembersPanel groupId={decodeId(sereGroup.id)} />}
          {tabValue === 1 && <SereActivitiesPanel groupId={decodeId(sereGroup.id)} />}
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  rights: state.core?.user?.i_user?.rights ?? [],
  groupUuid: props.match?.params?.group_uuid,
  sereGroup: state.productiveInclusion?.sereGroup,
  fetchingSereGroup: state.productiveInclusion?.fetchingSereGroup,
  fetchedSereGroup: state.productiveInclusion?.fetchedSereGroup,
  errorSereGroup: state.productiveInclusion?.errorSereGroup,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchSereGroup,
  clearSereGroup,
}, dispatch);

export default injectIntl(withModulesManager(withHistory(withTheme(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SereGroupPage))))));
