import React, { useEffect, useRef, useState } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IconButton, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  Searcher,
  formatMessage,
  formatMessageWithValues,
  formatDateFromISO,
  coreConfirm,
  clearConfirm,
  journalize,
  withModulesManager,
} from '@openimis/fe-core';
import {
  createSereActivity,
  deleteSereActivity,
  fetchSereActivities,
  updateSereActivity,
} from '../actions';
import { ACTION_TYPE } from '../reducer';
import {
  MODULE_NAME,
  RIGHT_SERE_ACTIVITY_CREATE,
  RIGHT_SERE_ACTIVITY_DELETE,
  RIGHT_SERE_ACTIVITY_SEARCH,
  RIGHT_SERE_ACTIVITY_UPDATE,
  SERE_ACTIVITY_DEFAULT_PAGE_SIZE,
  SERE_ACTIVITY_ROWS_PER_PAGE_OPTIONS,
} from '../constants';
import SereActivityDialog from './SereActivityDialog';

function SereActivitiesPanel({
  intl,
  modulesManager,
  groupId,
  rights,
  fetchSereActivities,
  createSereActivity,
  updateSereActivity,
  deleteSereActivity,
  fetchingSereActivities,
  fetchedSereActivities,
  errorSereActivities,
  sereActivities,
  sereActivitiesPageInfo,
  sereActivitiesTotalCount,
  coreConfirm,
  clearConfirm,
  confirmed,
  journalize,
  submittingMutation,
  mutation,
}) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editedActivity, setEditedActivity] = useState(null);
  const activityToDeleteRef = useRef(null);
  const prevSubmittingMutationRef = useRef();

  const fetch = (params) => fetchSereActivities([`groupId: "${groupId}"`, ...params]);

  const filtersToQueryParams = (state) => [
    'isDeleted: false',
    `first: ${Math.min(state.pageSize, 50)}`,
  ];

  useEffect(() => {
    if (confirmed !== true || !activityToDeleteRef.current) {
      return undefined;
    }

    const activity = activityToDeleteRef.current;
    activityToDeleteRef.current = null;

    deleteSereActivity(
      activity.id ?? activity.uuid,
      formatMessageWithValues(intl, MODULE_NAME, 'sereActivity.delete.mutationLabel', {
        title: activity.title,
      }),
    );

    return () => clearConfirm(false);
  }, [confirmed]);

  useEffect(() => {
    if (prevSubmittingMutationRef.current && !submittingMutation) {
      journalize(mutation);
      const isActivityMutation = [
        ACTION_TYPE.CREATE_SERE_ACTIVITY,
        ACTION_TYPE.UPDATE_SERE_ACTIVITY,
        ACTION_TYPE.DELETE_SERE_ACTIVITY,
      ].includes(mutation?.actionType);

      if (isActivityMutation && !mutation?.error) {
        setDialogOpen(false);
        setEditedActivity(null);
        fetch(filtersToQueryParams({ pageSize: SERE_ACTIVITY_DEFAULT_PAGE_SIZE }));
      }
    }
  }, [submittingMutation, mutation]);

  useEffect(() => {
    prevSubmittingMutationRef.current = submittingMutation;
  });

  const openCreateDialog = () => {
    setEditedActivity({ groupId, status: 'PLANNED' });
    setDialogOpen(true);
  };

  const openEditDialog = (activity) => {
    setEditedActivity({ ...activity, groupId });
    setDialogOpen(true);
  };

  const onSaveActivity = (activity) => {
    if (activity.id) {
      updateSereActivity(
        activity,
        formatMessageWithValues(intl, MODULE_NAME, 'sereActivity.update.mutationLabel', {
          title: activity.title,
        }),
      );
      return;
    }

    createSereActivity(
      activity,
      formatMessageWithValues(intl, MODULE_NAME, 'sereActivity.create.mutationLabel', {
        title: activity.title,
      }),
    );
  };

  const onDeleteActivity = (activity) => {
    activityToDeleteRef.current = activity;
    coreConfirm(
      formatMessage(intl, MODULE_NAME, 'sereActivity.delete.confirm.title'),
      formatMessage(intl, MODULE_NAME, 'sereActivity.delete.confirm.message'),
    );
  };

  if (!rights.includes(RIGHT_SERE_ACTIVITY_SEARCH)) {
    return null;
  }

  const canCreateActivity = rights.includes(RIGHT_SERE_ACTIVITY_CREATE);

  const formatActivityStatus = (status) => {
    if (!status) return '—';
    const key = `sereActivity.status.${status}`;
    const label = formatMessage(intl, MODULE_NAME, key);
    return label === key ? status : label;
  };

  const formatActivityDate = (activity) => {
    const raw = activity.activityDate ?? activity.activity_date;
    return raw ? formatDateFromISO(modulesManager, intl, raw) : '—';
  };

  const headers = () => [
    'sereActivity.title',
    'sereActivity.status',
    'sereActivity.activityDate',
    'sereActivity.description',
    '',
  ];

  const itemFormatters = () => [
    (activity) => activity.title ?? '—',
    (activity) => formatActivityStatus(activity.status),
    (activity) => formatActivityDate(activity),
    (activity) => activity.description ?? '—',
    (activity) => (
      <>
        {rights.includes(RIGHT_SERE_ACTIVITY_UPDATE) && (
          <Tooltip title={formatMessage(intl, MODULE_NAME, 'sereActivity.edit')}>
            <IconButton onClick={() => openEditDialog(activity)}>
              <EditIcon />
            </IconButton>
          </Tooltip>
        )}
        {rights.includes(RIGHT_SERE_ACTIVITY_DELETE) && (
          <Tooltip title={formatMessage(intl, MODULE_NAME, 'sereActivity.delete')}>
            <IconButton onClick={() => onDeleteActivity(activity)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        )}
      </>
    ),
  ];

  return (
    <>
      <SereActivityDialog
        open={dialogOpen}
        activity={editedActivity}
        onClose={() => setDialogOpen(false)}
        onSave={onSaveActivity}
      />
      <Searcher
        module={MODULE_NAME}
        cacheFiltersKey={`sereActivitiesPageFiltersCache-${groupId}`}
        fetch={fetch}
        items={sereActivities}
        itemsPageInfo={sereActivitiesPageInfo}
        fetchingItems={fetchingSereActivities}
        fetchedItems={fetchedSereActivities}
        errorItems={errorSereActivities}
        enableActionButtons={canCreateActivity}
        searcherActions={canCreateActivity ? [{
          label: formatMessage(intl, MODULE_NAME, 'sereActivity.add'),
          icon: <AddIcon />,
          onClick: openCreateDialog,
          authorized: true,
        }] : []}
        tableTitle={formatMessageWithValues(intl, MODULE_NAME, 'sereGroup.activities.pageTitle', {
          totalCount: sereActivitiesTotalCount,
        })}
        headers={headers}
        itemFormatters={itemFormatters}
        filtersToQueryParams={filtersToQueryParams}
        rowIdentifier={(activity) => activity.id}
        rowsPerPageOptions={SERE_ACTIVITY_ROWS_PER_PAGE_OPTIONS}
        defaultPageSize={SERE_ACTIVITY_DEFAULT_PAGE_SIZE}
        withSelection="none"
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  rights: state.core?.user?.i_user?.rights ?? [],
  confirmed: state.core?.confirmed,
  fetchingSereActivities: state.productiveInclusion?.fetchingSereActivities,
  fetchedSereActivities: state.productiveInclusion?.fetchedSereActivities,
  errorSereActivities: state.productiveInclusion?.errorSereActivities,
  sereActivities: state.productiveInclusion?.sereActivities,
  sereActivitiesPageInfo: state.productiveInclusion?.sereActivitiesPageInfo,
  sereActivitiesTotalCount: state.productiveInclusion?.sereActivitiesTotalCount ?? 0,
  submittingMutation: state.productiveInclusion?.submittingMutation,
  mutation: state.productiveInclusion?.mutation,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchSereActivities,
  createSereActivity,
  updateSereActivity,
  deleteSereActivity,
  coreConfirm,
  clearConfirm,
  journalize,
}, dispatch);

export default injectIntl(withModulesManager(connect(mapStateToProps, mapDispatchToProps)(SereActivitiesPanel)));
