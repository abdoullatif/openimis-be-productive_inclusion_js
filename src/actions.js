import {
  graphql,
  formatQuery,
  formatPageQuery,
  formatPageQueryWithCount,
  formatMutation,
  formatGQLString,
  decodeId,
} from '@openimis/fe-core';
import { ACTION_TYPE } from './reducer';
import { ERROR, REQUEST, SUCCESS } from './util/action-type';

const SERE_GROUP_PROJECTION = () => [
  'id',
  'importCode',
  'name',
  'locality',
  'locationHierarchy',
  'membersCount',
  'dateCreated',
  'dateUpdated',
];

/** Onglet membres fiche SERE — groupId obligatoire, pas de sereGroup imbriqué. */
const SERE_MEMBER_GROUP_PROJECTION = () => [
  'uuid',
  'lastName',
  'firstName',
  'phone',
  'role',
  'beneficiaryType',
  'codeMenage',
];

/** Liste globale Membres — sans groupId (droit 122005). */
const SERE_MEMBER_LIST_PROJECTION = () => [
  'uuid',
  'codeMenage',
  'lastName',
  'firstName',
  'phone',
  'role',
  'beneficiaryType',
  'status',
  'statusDisplay',
  'presenceCount',
  'sereName',
  'sereImportCode',
  'prefectureName',
  'subPrefectureName',
  'districtName',
  'sereGroup { id uuid name importCode locationHierarchy }',
];

/** Aligné sur sereActivity(groupId, first) — edges.node */
const SERE_ACTIVITY_PROJECTION = () => [
  'id',
  'title',
  'status',
  'activityDate',
  'description',
];

function formatSereActivityGQL(activity) {
  const fields = [
    `groupId: "${activity.groupId}"`,
    `title: "${formatGQLString(activity.title)}"`,
  ];

  if (activity.description !== undefined && activity.description !== null) {
    fields.push(`description: "${formatGQLString(activity.description)}"`);
  }
  if (activity.activityDate) {
    const dateOnly = String(activity.activityDate).split('T')[0];
    fields.push(`activityDate: "${dateOnly}"`);
  }
  if (activity.status) {
    fields.push(`status: "${activity.status}"`);
  }
  if (activity.id) {
    fields.push(`id: "${decodeId(activity.id)}"`);
  }

  return fields.join('\n          ');
}

const SERE_GROUP_SUMMARY_PROJECTION = () => [
  'totalGroups',
  'totalMembers',
  'groupsByPrefecture { prefectureName count }',
];

export function fetchSereGroups(mm, params = []) {
  const payload = formatPageQueryWithCount('sereGroup', params, SERE_GROUP_PROJECTION());
  return graphql(payload, ACTION_TYPE.SEARCH_SERE_GROUPS);
}

/** Récap global (mêmes filtres que la liste, sans pagination). Nécessite sereGroupSummary côté backend. */
export function fetchSereGroupsSummary(params = []) {
  const payload = formatQuery('sereGroupSummary', params, SERE_GROUP_SUMMARY_PROJECTION());
  return graphql(payload, ACTION_TYPE.GET_SERE_GROUPS_SUMMARY);
}

export function fetchSereGroup(mm, params = []) {
  const payload = formatPageQueryWithCount('sereGroup', params, SERE_GROUP_PROJECTION());
  return graphql(payload, ACTION_TYPE.GET_SERE_GROUP);
}

export function clearSereGroup() {
  return { type: ACTION_TYPE.CLEAR_SERE_GROUP };
}

/** Membres d'un SERE (fiche détail) — groupId obligatoire. */
export function fetchSereGroupMembers(params = []) {
  const payload = formatPageQueryWithCount(
    'sereMember',
    params,
    SERE_MEMBER_GROUP_PROJECTION(),
  );
  return graphql(payload, ACTION_TYPE.SEARCH_SERE_GROUP_MEMBERS);
}

/** Liste globale Membres — ne jamais passer groupId. */
export function fetchSereMembersGlobalList(params = []) {
  const sanitized = params.filter((p) => !/^groupId\s*:/.test(String(p).trim()));
  const payload = formatPageQueryWithCount(
    'sereMember',
    sanitized,
    SERE_MEMBER_LIST_PROJECTION(),
  );
  return graphql(payload, ACTION_TYPE.SEARCH_SERE_MEMBERS_LIST);
}

/** @deprecated utiliser fetchSereMembersGlobalList */
export const fetchSereMembersList = fetchSereMembersGlobalList;

export function fetchSereActivities(params = []) {
  const payload = formatPageQuery('sereActivity', params, SERE_ACTIVITY_PROJECTION());
  return graphql(payload, ACTION_TYPE.SEARCH_SERE_ACTIVITIES);
}

export function createSereActivity(activity, clientMutationLabel) {
  const mutation = formatMutation('createSereActivity', formatSereActivityGQL(activity), clientMutationLabel);
  const requestedDateTime = new Date();
  return graphql(
    mutation.payload,
    [REQUEST(ACTION_TYPE.MUTATION), SUCCESS(ACTION_TYPE.CREATE_SERE_ACTIVITY), ERROR(ACTION_TYPE.MUTATION)],
    {
      actionType: ACTION_TYPE.CREATE_SERE_ACTIVITY,
      clientMutationId: mutation.clientMutationId,
      clientMutationLabel,
      requestedDateTime,
    },
  );
}

export function updateSereActivity(activity, clientMutationLabel) {
  const mutation = formatMutation('updateSereActivity', formatSereActivityGQL(activity), clientMutationLabel);
  const requestedDateTime = new Date();
  return graphql(
    mutation.payload,
    [REQUEST(ACTION_TYPE.MUTATION), SUCCESS(ACTION_TYPE.UPDATE_SERE_ACTIVITY), ERROR(ACTION_TYPE.MUTATION)],
    {
      actionType: ACTION_TYPE.UPDATE_SERE_ACTIVITY,
      clientMutationId: mutation.clientMutationId,
      clientMutationLabel,
      requestedDateTime,
    },
  );
}

function resolveActivityUuid(activityId) {
  if (!activityId) return null;
  const raw = String(activityId);
  if (/^[0-9a-f-]{36}$/i.test(raw)) return raw;
  try {
    return decodeId(raw);
  } catch {
    return raw;
  }
}

export function deleteSereActivity(activityId, clientMutationLabel) {
  const uuid = resolveActivityUuid(activityId);
  const mutation = formatMutation(
    'deleteSereActivity',
    `uuids: ["${uuid}"]`,
    clientMutationLabel,
  );
  const requestedDateTime = new Date();
  return graphql(
    mutation.payload,
    [REQUEST(ACTION_TYPE.MUTATION), SUCCESS(ACTION_TYPE.DELETE_SERE_ACTIVITY), ERROR(ACTION_TYPE.MUTATION)],
    {
      actionType: ACTION_TYPE.DELETE_SERE_ACTIVITY,
      clientMutationId: mutation.clientMutationId,
      clientMutationLabel,
      requestedDateTime,
    },
  );
}
