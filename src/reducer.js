/* eslint-disable default-param-last */
import {
  parseData,
  pageInfo,
  formatGraphQLError,
  formatServerError,
  dispatchMutationReq,
  dispatchMutationResp,
  dispatchMutationErr,
} from '@openimis/fe-core';
import { CLEAR, ERROR, REQUEST, SUCCESS } from './util/action-type';
import { normalizePrefectureRows } from './util/sereGroupSummary';

export const ACTION_TYPE = {
  MUTATION: 'PRODUCTIVE_INCLUSION_MUTATION',
  SEARCH_SERE_GROUPS: 'PRODUCTIVE_INCLUSION_SEARCH_SERE_GROUPS',
  GET_SERE_GROUPS_SUMMARY: 'PRODUCTIVE_INCLUSION_GET_SERE_GROUPS_SUMMARY',
  GET_SERE_GROUP: 'PRODUCTIVE_INCLUSION_GET_SERE_GROUP',
  CLEAR_SERE_GROUP: 'PRODUCTIVE_INCLUSION_CLEAR_SERE_GROUP',
  SEARCH_SERE_GROUP_MEMBERS: 'PRODUCTIVE_INCLUSION_SEARCH_SERE_GROUP_MEMBERS',
  SEARCH_SERE_MEMBERS_LIST: 'PRODUCTIVE_INCLUSION_SEARCH_SERE_MEMBERS_LIST',
  SEARCH_SERE_ACTIVITIES: 'PRODUCTIVE_INCLUSION_SEARCH_SERE_ACTIVITIES',
  CREATE_SERE_ACTIVITY: 'PRODUCTIVE_INCLUSION_CREATE_SERE_ACTIVITY',
  UPDATE_SERE_ACTIVITY: 'PRODUCTIVE_INCLUSION_UPDATE_SERE_ACTIVITY',
  DELETE_SERE_ACTIVITY: 'PRODUCTIVE_INCLUSION_DELETE_SERE_ACTIVITY',
};

const initialState = {
  fetchingSereGroups: false,
  fetchedSereGroups: false,
  sereGroups: [],
  sereGroupsPageInfo: {},
  sereGroupsTotalCount: 0,
  errorSereGroups: null,

  fetchingSereGroupsSummary: false,
  fetchedSereGroupsSummary: false,
  sereGroupsSummary: null,
  errorSereGroupsSummary: null,

  fetchingSereGroup: false,
  fetchedSereGroup: false,
  sereGroup: null,
  errorSereGroup: null,

  fetchingSereMembers: false,
  fetchedSereMembers: false,
  sereMembers: [],
  sereMembersPageInfo: {},
  sereMembersTotalCount: 0,
  errorSereMembers: null,

  fetchingSereMembersList: false,
  fetchedSereMembersList: false,
  sereMembersList: [],
  sereMembersListPageInfo: {},
  sereMembersListTotalCount: 0,
  errorSereMembersList: null,

  fetchingSereActivities: false,
  fetchedSereActivities: false,
  sereActivities: [],
  sereActivitiesPageInfo: {},
  sereActivitiesTotalCount: 0,
  errorSereActivities: null,

  submittingMutation: false,
  mutation: {},
};

function handleMutationSuccess(state, service, action) {
  const gqlError = formatGraphQLError(action.payload);
  if (gqlError) {
    return {
      ...state,
      submittingMutation: false,
      mutation: {
        ...state.mutation,
        error: gqlError,
      },
    };
  }
  const response = action.payload?.data?.[service];
  if (!response) {
    return {
      ...state,
      submittingMutation: false,
      mutation: {
        ...state.mutation,
        error: {
          message: 'Empty mutation response',
          detail: service,
        },
      },
    };
  }
  return dispatchMutationResp(state, service, action);
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST(ACTION_TYPE.SEARCH_SERE_GROUPS):
      return {
        ...state,
        fetchingSereGroups: true,
        fetchedSereGroups: false,
        errorSereGroups: null,
      };
    case SUCCESS(ACTION_TYPE.SEARCH_SERE_GROUPS):
      return {
        ...state,
        fetchingSereGroups: false,
        fetchedSereGroups: true,
        sereGroups: parseData(action.payload?.data?.sereGroup),
        sereGroupsPageInfo: pageInfo(action.payload?.data?.sereGroup),
        sereGroupsTotalCount: action.payload?.data?.sereGroup?.totalCount ?? 0,
        errorSereGroups: formatGraphQLError(action.payload),
      };
    case ERROR(ACTION_TYPE.SEARCH_SERE_GROUPS):
      return {
        ...state,
        fetchingSereGroups: false,
        errorSereGroups: formatServerError(action.payload),
      };

    case REQUEST(ACTION_TYPE.GET_SERE_GROUPS_SUMMARY):
      return {
        ...state,
        fetchingSereGroupsSummary: true,
        fetchedSereGroupsSummary: false,
        errorSereGroupsSummary: null,
      };
    case SUCCESS(ACTION_TYPE.GET_SERE_GROUPS_SUMMARY): {
      const raw = action.payload?.data?.sereGroupSummary;
      return {
        ...state,
        fetchingSereGroupsSummary: false,
        fetchedSereGroupsSummary: true,
        sereGroupsSummary: raw
          ? {
            totalGroups: raw.totalGroups ?? raw.total_groups ?? null,
            totalMembers: raw.totalMembers ?? raw.total_members ?? null,
            groupsByPrefecture: normalizePrefectureRows(
              raw.groupsByPrefecture ?? raw.groups_by_prefecture,
            ),
          }
          : null,
        errorSereGroupsSummary: formatGraphQLError(action.payload),
      };
    }
    case ERROR(ACTION_TYPE.GET_SERE_GROUPS_SUMMARY):
      return {
        ...state,
        fetchingSereGroupsSummary: false,
        fetchedSereGroupsSummary: true,
        sereGroupsSummary: null,
        errorSereGroupsSummary: formatServerError(action.payload),
      };

    case REQUEST(ACTION_TYPE.GET_SERE_GROUP):
      return {
        ...state,
        fetchingSereGroup: true,
        fetchedSereGroup: false,
        errorSereGroup: null,
      };
    case SUCCESS(ACTION_TYPE.GET_SERE_GROUP):
      return {
        ...state,
        fetchingSereGroup: false,
        fetchedSereGroup: true,
        sereGroup: parseData(action.payload?.data?.sereGroup)?.[0] ?? null,
        errorSereGroup: formatGraphQLError(action.payload),
      };
    case ERROR(ACTION_TYPE.GET_SERE_GROUP):
      return {
        ...state,
        fetchingSereGroup: false,
        errorSereGroup: formatServerError(action.payload),
      };
    case ACTION_TYPE.CLEAR_SERE_GROUP:
      return {
        ...state,
        fetchingSereGroup: false,
        fetchedSereGroup: false,
        sereGroup: null,
        errorSereGroup: null,
      };

    case REQUEST(ACTION_TYPE.SEARCH_SERE_GROUP_MEMBERS):
      return {
        ...state,
        fetchingSereMembers: true,
        fetchedSereMembers: false,
        errorSereMembers: null,
      };
    case SUCCESS(ACTION_TYPE.SEARCH_SERE_GROUP_MEMBERS):
      return {
        ...state,
        fetchingSereMembers: false,
        fetchedSereMembers: true,
        sereMembers: parseData(action.payload?.data?.sereMember),
        sereMembersPageInfo: pageInfo(action.payload?.data?.sereMember),
        sereMembersTotalCount: action.payload?.data?.sereMember?.totalCount ?? 0,
        errorSereMembers: formatGraphQLError(action.payload),
      };
    case ERROR(ACTION_TYPE.SEARCH_SERE_GROUP_MEMBERS):
      return {
        ...state,
        fetchingSereMembers: false,
        errorSereMembers: formatServerError(action.payload),
      };

    case REQUEST(ACTION_TYPE.SEARCH_SERE_MEMBERS_LIST):
      return {
        ...state,
        fetchingSereMembersList: true,
        fetchedSereMembersList: false,
        errorSereMembersList: null,
      };
    case SUCCESS(ACTION_TYPE.SEARCH_SERE_MEMBERS_LIST):
      return {
        ...state,
        fetchingSereMembersList: false,
        fetchedSereMembersList: true,
        sereMembersList: parseData(action.payload?.data?.sereMember),
        sereMembersListPageInfo: pageInfo(action.payload?.data?.sereMember),
        sereMembersListTotalCount: action.payload?.data?.sereMember?.totalCount ?? 0,
        errorSereMembersList: formatGraphQLError(action.payload),
      };
    case ERROR(ACTION_TYPE.SEARCH_SERE_MEMBERS_LIST):
      return {
        ...state,
        fetchingSereMembersList: false,
        errorSereMembersList: formatServerError(action.payload),
      };

    case REQUEST(ACTION_TYPE.SEARCH_SERE_ACTIVITIES):
      return {
        ...state,
        fetchingSereActivities: true,
        fetchedSereActivities: false,
        errorSereActivities: null,
      };
    case SUCCESS(ACTION_TYPE.SEARCH_SERE_ACTIVITIES): {
      const connection = action.payload?.data?.sereActivity;
      const activities = parseData(connection);
      return {
        ...state,
        fetchingSereActivities: false,
        fetchedSereActivities: true,
        sereActivities: activities,
        sereActivitiesPageInfo: pageInfo(connection),
        sereActivitiesTotalCount: connection?.totalCount ?? activities.length,
        errorSereActivities: formatGraphQLError(action.payload),
      };
    }
    case ERROR(ACTION_TYPE.SEARCH_SERE_ACTIVITIES):
      return {
        ...state,
        fetchingSereActivities: false,
        errorSereActivities: formatServerError(action.payload),
      };

    case REQUEST(ACTION_TYPE.MUTATION):
      return dispatchMutationReq(state, action);
    case ERROR(ACTION_TYPE.MUTATION):
      return {
        ...dispatchMutationErr(state, action),
        submittingMutation: false,
      };
    case SUCCESS(ACTION_TYPE.CREATE_SERE_ACTIVITY):
      return handleMutationSuccess(state, 'createSereActivity', action);
    case SUCCESS(ACTION_TYPE.UPDATE_SERE_ACTIVITY):
      return handleMutationSuccess(state, 'updateSereActivity', action);
    case SUCCESS(ACTION_TYPE.DELETE_SERE_ACTIVITY):
      return handleMutationSuccess(state, 'deleteSereActivity', action);

    default:
      return state;
  }
}
