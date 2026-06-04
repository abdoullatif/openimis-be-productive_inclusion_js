import React from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { GroupWork, People } from '@material-ui/icons';
import {
  formatMessage,
  MainMenuContribution,
  withModulesManager,
} from '@openimis/fe-core';
import {
  MODULE_NAME,
  RIGHT_SERE_GROUP_SEARCH,
  RIGHT_SERE_MEMBER_SEARCH,
  ROUTE_SERE_GROUPS,
  ROUTE_SERE_MEMBERS,
} from '../constants';

function ProductiveInclusionMainMenu(props) {
  const { intl, rights } = props;
  const entries = [];

  if (rights.includes(RIGHT_SERE_GROUP_SEARCH)) {
    entries.push({
      text: formatMessage(intl, MODULE_NAME, 'menu.sereGroups'),
      icon: <GroupWork />,
      route: `/${ROUTE_SERE_GROUPS}`,
      id: 'productiveInclusion.sereGroups',
    });
  }

  if (rights.includes(RIGHT_SERE_MEMBER_SEARCH)) {
    entries.push({
      text: formatMessage(intl, MODULE_NAME, 'menu.members'),
      icon: <People />,
      route: `/${ROUTE_SERE_MEMBERS}`,
      id: 'productiveInclusion.members',
    });
  }

  if (!entries.length) {
    return null;
  }

  return (
    <MainMenuContribution
      {...props}
      header={formatMessage(intl, MODULE_NAME, 'mainMenu')}
      icon={<GroupWork />}
      entries={entries}
      menuId="ProductiveInclusionMainMenu"
    />
  );
}

const mapStateToProps = (state) => ({
  rights: state.core?.user?.i_user?.rights ?? [],
});

export default injectIntl(withModulesManager(connect(mapStateToProps)(ProductiveInclusionMainMenu)));
