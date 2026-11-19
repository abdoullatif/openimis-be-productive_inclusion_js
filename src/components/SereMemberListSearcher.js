import React from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, Tooltip, Typography } from '@material-ui/core';
import {
  Searcher,
  withModulesManager,
  withHistory,
  formatMessage,
  formatMessageWithValues,
  historyPush,
} from '@openimis/fe-core';
import { fetchSereMembersGlobalList } from '../actions';
import {
  MODULE_NAME,
  RIGHT_SERE_GROUP_SEARCH,
  RIGHT_SERE_MEMBER_SEARCH,
  ROWS_PER_PAGE_OPTIONS,
  SERE_MEMBERS_DEFAULT_PAGE_SIZE,
} from '../constants';
import SereMemberListFilter from './SereMemberListFilter';
import SereMemberStatusChip from './SereMemberStatusChip';
import SereValidatePresencesButton from './SereValidatePresencesButton';
import {
  displayMemberStatus,
  memberLocationLevel,
  presenceCountCell,
  resolveSereGroupUuid,
} from '../util/sereMemberList';

function displayValue(value) {
  if (value === null || value === undefined || value === '') return '—';
  return value;
}

function SereMemberListSearcher({
  intl,
  modulesManager,
  history,
  rights,
  fetchSereMembersGlobalList,
  fetchingSereMembersList,
  fetchedSereMembersList,
  errorSereMembersList,
  sereMembersList,
  sereMembersListPageInfo,
  sereMembersListTotalCount,
}) {
  const fetch = (params) => fetchSereMembersGlobalList(params);

  const filtersToQueryParams = (state) => {
    const params = Object.keys(state.filters)
      .filter((key) => !!state.filters[key].filter)
      .map((key) => state.filters[key].filter);

    params.push('isDeleted: false');
    params.push(`first: ${state.pageSize}`);
    if (state.afterCursor) params.push(`after: "${state.afterCursor}"`);
    if (state.beforeCursor) params.push(`before: "${state.beforeCursor}"`);
    if (state.orderBy) {
      params.push(`orderBy: ["${state.orderBy}"]`);
    } else {
      params.push('orderBy: ["lastName", "firstName"]');
    }

    return params;
  };

  const formatStatusLabel = (status) => formatMessage(
    intl,
    MODULE_NAME,
    `members.status.${status}`,
  );

  const sereNameCell = (member) => {
    const name = member.sereName ?? member.sere_name;
    const importCode = member.sereImportCode ?? member.sere_import_code;
    const groupUuid = resolveSereGroupUuid(member);

    if (!name && !importCode) return '—';

    const label = name ?? importCode ?? '—';
    const tooltip = importCode && name && importCode !== name
      ? `${name} (${importCode})`
      : (importCode || name);

    if (groupUuid && rights.includes(RIGHT_SERE_GROUP_SEARCH)) {
      return (
        <Tooltip title={tooltip}>
          <Link
            component="button"
            variant="body2"
            onClick={() => historyPush(
              modulesManager,
              history,
              'productiveInclusion.route.sereGroup',
              [groupUuid],
            )}
          >
            {label}
          </Link>
        </Tooltip>
      );
    }

    return (
      <Tooltip title={tooltip}>
        <Typography variant="body2" component="span">
          {label}
        </Typography>
      </Tooltip>
    );
  };

  const headers = () => [
    'members.codeMenage',
    'members.lastName',
    'members.firstName',
    'members.phone',
    'members.sere',
    'members.role',
    'members.beneficiaryType',
    'members.prefecture',
    'members.subPrefecture',
    'members.district',
    'members.presenceCount',
    'members.status',
  ];

  const itemFormatters = () => [
    (member) => displayValue(member.codeMenage ?? member.code_menage),
    (member) => displayValue(member.lastName),
    (member) => displayValue(member.firstName),
    (member) => displayValue(member.phone),
    (member) => sereNameCell(member),
    (member) => displayValue(member.role),
    (member) => displayValue(member.beneficiaryType ?? member.beneficiary_type),
    (member) => memberLocationLevel(member, 'prefecture'),
    (member) => memberLocationLevel(member, 'subPrefecture'),
    (member) => memberLocationLevel(member, 'district'),
    (member) => presenceCountCell(member),
    (member) => (
      <SereMemberStatusChip
        status={member.status}
        label={displayMemberStatus(member, formatStatusLabel)}
      />
    ),
  ];

  if (!rights.includes(RIGHT_SERE_MEMBER_SEARCH)) {
    return formatMessage(intl, MODULE_NAME, 'members.noRights');
  }

  return (
    <>
      <SereValidatePresencesButton />
      <Searcher
        module={MODULE_NAME}
        cacheFiltersKey="sereMembersListPageFiltersCache"
        fetch={fetch}
        items={sereMembersList}
        itemsPageInfo={sereMembersListPageInfo}
        fetchingItems={fetchingSereMembersList}
        fetchedItems={fetchedSereMembersList}
        errorItems={errorSereMembersList}
        tableTitle={formatMessageWithValues(intl, MODULE_NAME, 'members.pageTitle', {
          totalCount: sereMembersListTotalCount,
        })}
        headers={headers}
        itemFormatters={itemFormatters}
        filtersToQueryParams={filtersToQueryParams}
        FilterPane={SereMemberListFilter}
        rowIdentifier={(member) => member.uuid ?? member.id}
        rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
        defaultPageSize={SERE_MEMBERS_DEFAULT_PAGE_SIZE}
        withSelection="none"
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  rights: state.core?.user?.i_user?.rights ?? [],
  fetchingSereMembersList: state.productiveInclusion?.fetchingSereMembersList,
  fetchedSereMembersList: state.productiveInclusion?.fetchedSereMembersList,
  errorSereMembersList: state.productiveInclusion?.errorSereMembersList,
  sereMembersList: state.productiveInclusion?.sereMembersList,
  sereMembersListPageInfo: state.productiveInclusion?.sereMembersListPageInfo,
  sereMembersListTotalCount: state.productiveInclusion?.sereMembersListTotalCount ?? 0,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  { fetchSereMembersGlobalList },
  dispatch,
);

export default injectIntl(withModulesManager(withHistory(connect(mapStateToProps, mapDispatchToProps)(SereMemberListSearcher))));
