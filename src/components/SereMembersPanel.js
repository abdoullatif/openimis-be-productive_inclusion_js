import React from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Searcher,
  formatMessageWithValues,
} from '@openimis/fe-core';
import { fetchSereGroupMembers } from '../actions';
import {
  MODULE_NAME,
  RIGHT_SERE_MEMBER_SEARCH,
  ROWS_PER_PAGE_OPTIONS,
  SERE_GROUP_MEMBERS_DEFAULT_PAGE_SIZE,
} from '../constants';

function displayValue(value) {
  if (value === null || value === undefined || value === '') return '—';
  return value;
}

function SereMembersPanel({
  intl,
  groupId,
  rights,
  fetchSereGroupMembers,
  fetchingSereMembers,
  fetchedSereMembers,
  errorSereMembers,
  sereMembers,
  sereMembersPageInfo,
  sereMembersTotalCount,
}) {
  const fetch = (params) => fetchSereGroupMembers([`groupId: "${groupId}"`, ...params]);

  const filtersToQueryParams = (state) => {
    const params = [];
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

  if (!rights.includes(RIGHT_SERE_MEMBER_SEARCH)) {
    return null;
  }

  const headers = () => [
    'members.codeMenage',
    'members.lastName',
    'members.firstName',
    'members.phone',
    'members.role',
    'members.beneficiaryType',
  ];

  const itemFormatters = () => [
    (member) => displayValue(member.codeMenage ?? member.code_menage),
    (member) => displayValue(member.lastName),
    (member) => displayValue(member.firstName),
    (member) => displayValue(member.phone),
    (member) => displayValue(member.role),
    (member) => displayValue(member.beneficiaryType ?? member.beneficiary_type),
  ];

  return (
    <Searcher
      module={MODULE_NAME}
      cacheFiltersKey={`sereMembersPageFiltersCache-${groupId}`}
      fetch={fetch}
      items={sereMembers}
      itemsPageInfo={sereMembersPageInfo}
      fetchingItems={fetchingSereMembers}
      fetchedItems={fetchedSereMembers}
      errorItems={errorSereMembers}
      tableTitle={formatMessageWithValues(intl, MODULE_NAME, 'sereGroup.members.pageTitle', {
        totalCount: sereMembersTotalCount,
      })}
      headers={headers}
      itemFormatters={itemFormatters}
      filtersToQueryParams={filtersToQueryParams}
      rowIdentifier={(member) => member.uuid ?? member.id}
      rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
      defaultPageSize={SERE_GROUP_MEMBERS_DEFAULT_PAGE_SIZE}
      withSelection="none"
    />
  );
}

const mapStateToProps = (state) => ({
  rights: state.core?.user?.i_user?.rights ?? [],
  fetchingSereMembers: state.productiveInclusion?.fetchingSereMembers,
  fetchedSereMembers: state.productiveInclusion?.fetchedSereMembers,
  errorSereMembers: state.productiveInclusion?.errorSereMembers,
  sereMembers: state.productiveInclusion?.sereMembers,
  sereMembersPageInfo: state.productiveInclusion?.sereMembersPageInfo,
  sereMembersTotalCount: state.productiveInclusion?.sereMembersTotalCount,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchSereGroupMembers }, dispatch);

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(SereMembersPanel));
