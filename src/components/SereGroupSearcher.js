import React from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IconButton, Tooltip } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {
  Searcher,
  withModulesManager,
  withHistory,
  formatMessage,
  formatMessageWithValues,
  formatDateFromISO,
  historyPush,
  decodeId,
} from '@openimis/fe-core';
import { fetchSereGroups, fetchSereGroupsSummary } from '../actions';
import SereGroupsSummaryCards from './SereGroupsSummaryCards';
import { stripSereGroupPaginationParams } from '../util/sereGroupFilters';
import {
  DEFAULT_PAGE_SIZE,
  MODULE_NAME,
  RIGHT_SERE_GROUP_SEARCH,
  ROWS_PER_PAGE_OPTIONS,
} from '../constants';
import SereGroupFilter from './SereGroupFilter';
import { parseLocationHierarchy, formatLevelValue } from '../util/locationHierarchy';

const LIST_HIERARCHY_KEYS = ['region', 'district', 'ward', 'village'];

function hierarchyCell(group, jsonKey) {
  const h = parseLocationHierarchy(group.locationHierarchy);
  const v = formatLevelValue(h?.[jsonKey]);
  return v ?? '—';
}

function membersCountCell(group) {
  const n = group.membersCount ?? group.members_count;
  if (n === null || n === undefined || n === '') return '—';
  const num = Number(n);
  return Number.isNaN(num) ? String(n) : num;
}

function SereGroupSearcher({
  intl,
  modulesManager,
  history,
  rights,
  fetchSereGroups,
  fetchSereGroupsSummary,
  fetchingSereGroups,
  fetchedSereGroups,
  errorSereGroups,
  sereGroups,
  sereGroupsPageInfo,
  sereGroupsTotalCount,
}) {
  const fetch = (params) => {
    fetchSereGroups(modulesManager, params);
    fetchSereGroupsSummary(stripSereGroupPaginationParams(params));
  };

  const filtersToQueryParams = (state) => {
    const params = Object.keys(state.filters)
      .filter((key) => !!state.filters[key].filter)
      .map((key) => state.filters[key].filter);

    params.push(`first: ${state.pageSize}`);
    if (state.afterCursor) params.push(`after: "${state.afterCursor}"`);
    if (state.beforeCursor) params.push(`before: "${state.beforeCursor}"`);
    if (state.orderBy) params.push(`orderBy: ["${state.orderBy}"]`);

    return params;
  };

  const headers = () => [
    'sereGroups.importCode',
    'sereGroups.name',
    'sereGroups.region',
    'sereGroups.prefecture',
    'sereGroups.subPrefecture',
    'sereGroups.district',
    'sereGroups.membersCount',
    'sereGroups.dateUpdated',
    '',
  ];

  const itemFormatters = () => [
    (group) => group.importCode,
    (group) => group.name,
    ...LIST_HIERARCHY_KEYS.map((key) => (group) => hierarchyCell(group, key)),
    (group) => membersCountCell(group),
    (group) => formatDateFromISO(modulesManager, intl, group.dateUpdated),
    (group) => (
      <Tooltip title={formatMessage(intl, MODULE_NAME, 'sereGroups.view')}>
        <IconButton
          onClick={() => historyPush(
            modulesManager,
            history,
            'productiveInclusion.route.sereGroup',
            [decodeId(group.id)],
          )}
        >
          <VisibilityIcon />
        </IconButton>
      </Tooltip>
    ),
  ];

  const rowIdentifier = (group) => group.id;

  const onDoubleClick = (group) => {
    historyPush(
      modulesManager,
      history,
      'productiveInclusion.route.sereGroup',
      [decodeId(group.id)],
    );
  };

  if (!rights.includes(RIGHT_SERE_GROUP_SEARCH)) {
    return formatMessage(intl, MODULE_NAME, 'sereGroups.noRights');
  }

  return (
    <>
      <SereGroupsSummaryCards />
      <Searcher
      module={MODULE_NAME}
      cacheFiltersKey="sereGroupsPageFiltersCache"
      fetch={fetch}
      items={sereGroups}
      itemsPageInfo={sereGroupsPageInfo}
      fetchingItems={fetchingSereGroups}
      fetchedItems={fetchedSereGroups}
      errorItems={errorSereGroups}
      tableTitle={formatMessageWithValues(intl, MODULE_NAME, 'sereGroups.pageTitle', {
        totalCount: sereGroupsTotalCount,
      })}
      headers={headers}
      itemFormatters={itemFormatters}
      filtersToQueryParams={filtersToQueryParams}
      FilterPane={SereGroupFilter}
      rowIdentifier={rowIdentifier}
      onDoubleClick={onDoubleClick}
      rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
      defaultPageSize={DEFAULT_PAGE_SIZE}
      withSelection="none"
    />
    </>
  );
}

const mapStateToProps = (state) => ({
  rights: state.core?.user?.i_user?.rights ?? [],
  fetchingSereGroups: state.productiveInclusion?.fetchingSereGroups,
  fetchedSereGroups: state.productiveInclusion?.fetchedSereGroups,
  errorSereGroups: state.productiveInclusion?.errorSereGroups,
  sereGroups: state.productiveInclusion?.sereGroups,
  sereGroupsPageInfo: state.productiveInclusion?.sereGroupsPageInfo,
  sereGroupsTotalCount: state.productiveInclusion?.sereGroupsTotalCount,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  { fetchSereGroups, fetchSereGroupsSummary },
  dispatch,
);

export default injectIntl(withModulesManager(withHistory(connect(mapStateToProps, mapDispatchToProps)(SereGroupSearcher))));
