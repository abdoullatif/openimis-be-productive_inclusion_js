'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var feCore = require('@openimis/fe-core');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var React = require('react');
var styles$5 = require('@material-ui/core/styles');
var reactIntl = require('react-intl');
var reactRedux = require('react-redux');
var redux = require('redux');
var core = require('@material-ui/core');
var VisibilityIcon = require('@material-ui/icons/Visibility');
var styles$4 = require('@material-ui/styles');
var _extends = require('@babel/runtime/helpers/extends');
var AddIcon = require('@material-ui/icons/Add');
var EditIcon = require('@material-ui/icons/Edit');
var DeleteIcon = require('@material-ui/icons/Delete');
var ChevronLeftIcon = require('@material-ui/icons/ChevronLeft');
var icons = require('@material-ui/icons');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var VisibilityIcon__default = /*#__PURE__*/_interopDefaultLegacy(VisibilityIcon);
var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var AddIcon__default = /*#__PURE__*/_interopDefaultLegacy(AddIcon);
var EditIcon__default = /*#__PURE__*/_interopDefaultLegacy(EditIcon);
var DeleteIcon__default = /*#__PURE__*/_interopDefaultLegacy(DeleteIcon);
var ChevronLeftIcon__default = /*#__PURE__*/_interopDefaultLegacy(ChevronLeftIcon);

var messagesEn = {
	"productiveInclusion.mainMenu": "Productive inclusion",
	"productiveInclusion.menu.sereGroups": "SERE groups",
	"productiveInclusion.menu.members": "Members",
	"productiveInclusion.members.pageTitle": "Members ({totalCount})",
	"productiveInclusion.members.noRights": "You do not have permission to view SERE members.",
	"productiveInclusion.members.codeMenage": "Household code",
	"productiveInclusion.members.lastName": "Last name",
	"productiveInclusion.members.firstName": "First name",
	"productiveInclusion.members.phone": "Phone",
	"productiveInclusion.members.sere": "SERE",
	"productiveInclusion.members.role": "Role",
	"productiveInclusion.members.beneficiaryType": "Beneficiary type",
	"productiveInclusion.members.prefecture": "Prefecture",
	"productiveInclusion.members.subPrefecture": "Sub-prefecture",
	"productiveInclusion.members.district": "District",
	"productiveInclusion.members.presenceCount": "Presence count",
	"productiveInclusion.members.status": "Status",
	"productiveInclusion.members.status.ACTIVE": "Active",
	"productiveInclusion.members.status.INACTIVE": "Inactive",
	"productiveInclusion.members.status.PENDING": "Pending",
	"productiveInclusion.members.status.SUSPENDED": "Suspended",
	"productiveInclusion.members.status.null": "All",
	"productiveInclusion.members.filter.codeMenage": "Household code",
	"productiveInclusion.members.filter.lastName": "Last name",
	"productiveInclusion.members.filter.firstName": "First name",
	"productiveInclusion.members.filter.phone": "Phone",
	"productiveInclusion.members.filter.sereName": "SERE",
	"productiveInclusion.members.filter.sereImportCode": "SERE code",
	"productiveInclusion.members.filter.role": "Role",
	"productiveInclusion.members.filter.beneficiaryType": "Beneficiary type",
	"productiveInclusion.members.filter.prefecture": "Prefecture",
	"productiveInclusion.members.filter.subPrefecture": "Sub-prefecture",
	"productiveInclusion.members.filter.district": "District",
	"productiveInclusion.members.filter.presenceCount": "Presence count",
	"productiveInclusion.members.filter.status": "Status",
	"productiveInclusion.sereGroups.pageTitle": "SERE groups ({totalCount})",
	"productiveInclusion.sereGroups.importCode": "Code",
	"productiveInclusion.sereGroups.name": "Name",
	"productiveInclusion.sereGroups.region": "Region",
	"productiveInclusion.sereGroups.prefecture": "Prefecture",
	"productiveInclusion.sereGroups.subPrefecture": "Sub-prefecture",
	"productiveInclusion.sereGroups.district": "District",
	"productiveInclusion.sereGroups.membersCount": "Members",
	"productiveInclusion.sereGroups.dateUpdated": "Updated on",
	"productiveInclusion.sereGroups.summary.totalGroups": "Total SERE groups",
	"productiveInclusion.sereGroups.summary.totalMembers": "Total members",
	"productiveInclusion.sereGroups.summary.byPrefecture": "SERE by prefecture",
	"productiveInclusion.sereGroups.summary.noPrefectureData": "No data (backend summary or filters)",
	"productiveInclusion.sereGroups.filter.importCode": "Code",
	"productiveInclusion.sereGroups.filter.name": "Name",
	"productiveInclusion.sereGroups.filter.region": "Region",
	"productiveInclusion.sereGroups.filter.prefecture": "Prefecture",
	"productiveInclusion.sereGroups.filter.subPrefecture": "Sub-prefecture",
	"productiveInclusion.sereGroups.filter.district": "District",
	"productiveInclusion.sereGroups.filter.membersCount": "Members",
	"productiveInclusion.sereGroups.filter.dateUpdatedFrom": "Updated from",
	"productiveInclusion.sereGroups.filter.dateUpdatedTo": "Updated until",
	"productiveInclusion.sereGroups.view": "View",
	"productiveInclusion.sereGroups.noRights": "You do not have permission to view SERE groups.",
	"productiveInclusion.sereGroup.pageTitle": "SERE group {name}",
	"productiveInclusion.sereGroup.infoSectionTitle": "SERE information",
	"productiveInclusion.sereGroup.code": "Code",
	"productiveInclusion.sereGroup.importCode": "Code",
	"productiveInclusion.sereGroup.name": "Name",
	"productiveInclusion.sereGroup.locality": "Locality",
	"productiveInclusion.sereGroup.administrativeLevels": "Administrative location",
	"productiveInclusion.sereGroup.location": "Location",
	"productiveInclusion.sereGroup.tab.members": "Members",
	"productiveInclusion.sereGroup.members.pageTitle": "Members ({totalCount})",
	"productiveInclusion.sereGroup.tab.activities": "Activities",
	"productiveInclusion.sereGroup.activities.pageTitle": "Activities ({totalCount})",
	"productiveInclusion.locationHierarchy.region": "Region",
	"productiveInclusion.locationHierarchy.prefecture": "Prefecture",
	"productiveInclusion.locationHierarchy.subPrefecture": "Sub-prefecture",
	"productiveInclusion.locationHierarchy.district": "District",
	"productiveInclusion.locationHierarchy.notSet": "Not specified",
	"productiveInclusion.sereMember.codeMenage": "Household code",
	"productiveInclusion.sereMember.lastName": "Last name",
	"productiveInclusion.sereMember.firstName": "First name",
	"productiveInclusion.sereMember.phone": "Phone",
	"productiveInclusion.sereMember.role": "Role",
	"productiveInclusion.sereMember.beneficiaryType": "Beneficiary type",
	"productiveInclusion.sereActivity.title": "Title",
	"productiveInclusion.sereActivity.description": "Description",
	"productiveInclusion.sereActivity.activityDate": "Activity date",
	"productiveInclusion.sereActivity.status": "Status",
	"productiveInclusion.sereActivity.status.PLANNED": "Planned",
	"productiveInclusion.sereActivity.status.IN_PROGRESS": "In progress",
	"productiveInclusion.sereActivity.status.COMPLETED": "Completed",
	"productiveInclusion.sereActivity.status.CANCELLED": "Cancelled",
	"productiveInclusion.sereActivity.add": "Add activity",
	"productiveInclusion.sereActivity.edit": "Edit",
	"productiveInclusion.sereActivity.delete": "Delete",
	"productiveInclusion.sereActivity.delete.confirm.title": "Delete activity",
	"productiveInclusion.sereActivity.delete.confirm.message": "Are you sure you want to delete this activity?",
	"productiveInclusion.sereActivity.create.mutationLabel": "Create activity {title}",
	"productiveInclusion.sereActivity.update.mutationLabel": "Update activity {title}",
	"productiveInclusion.sereActivity.delete.mutationLabel": "Delete activity {title}",
	"productiveInclusion.sereActivity.dialog.createTitle": "New activity",
	"productiveInclusion.sereActivity.dialog.editTitle": "Edit activity",
	"productiveInclusion.sereActivity.dialog.save": "Save",
	"productiveInclusion.sereActivity.dialog.cancel": "Cancel"
};

var messagesFr = {
	"productiveInclusion.mainMenu": "Inclusion productive",
	"productiveInclusion.menu.sereGroups": "SERE",
	"productiveInclusion.menu.members": "Membres",
	"productiveInclusion.members.pageTitle": "Membres ({totalCount})",
	"productiveInclusion.members.noRights": "Vous n'avez pas les droits pour consulter les membres SERE.",
	"productiveInclusion.members.codeMenage": "Code ménage",
	"productiveInclusion.members.lastName": "Nom",
	"productiveInclusion.members.firstName": "Prénom",
	"productiveInclusion.members.phone": "Téléphone",
	"productiveInclusion.members.sere": "SERE",
	"productiveInclusion.members.role": "Fonction",
	"productiveInclusion.members.beneficiaryType": "Type bénéficiaire",
	"productiveInclusion.members.prefecture": "Préfecture",
	"productiveInclusion.members.subPrefecture": "Sous-préfecture",
	"productiveInclusion.members.district": "District",
	"productiveInclusion.members.presenceCount": "Nombre de présences",
	"productiveInclusion.members.status": "Statut",
	"productiveInclusion.members.status.ACTIVE": "Actif",
	"productiveInclusion.members.status.INACTIVE": "Inactif",
	"productiveInclusion.members.status.PENDING": "En attente",
	"productiveInclusion.members.status.SUSPENDED": "Suspendu",
	"productiveInclusion.members.status.null": "Tous",
	"productiveInclusion.members.filter.codeMenage": "Code ménage",
	"productiveInclusion.members.filter.lastName": "Nom",
	"productiveInclusion.members.filter.firstName": "Prénom",
	"productiveInclusion.members.filter.phone": "Téléphone",
	"productiveInclusion.members.filter.sereName": "SERE",
	"productiveInclusion.members.filter.sereImportCode": "Code SERE",
	"productiveInclusion.members.filter.role": "Fonction",
	"productiveInclusion.members.filter.beneficiaryType": "Type bénéficiaire",
	"productiveInclusion.members.filter.prefecture": "Préfecture",
	"productiveInclusion.members.filter.subPrefecture": "Sous-préfecture",
	"productiveInclusion.members.filter.district": "District",
	"productiveInclusion.members.filter.presenceCount": "Nombre de présences",
	"productiveInclusion.members.filter.status": "Statut",
	"productiveInclusion.sereGroups.pageTitle": "SERE ({totalCount})",
	"productiveInclusion.sereGroups.importCode": "Code",
	"productiveInclusion.sereGroups.name": "Nom",
	"productiveInclusion.sereGroups.region": "Région",
	"productiveInclusion.sereGroups.prefecture": "Préfecture",
	"productiveInclusion.sereGroups.subPrefecture": "Sous-préfecture",
	"productiveInclusion.sereGroups.district": "District",
	"productiveInclusion.sereGroups.membersCount": "Membres",
	"productiveInclusion.sereGroups.dateUpdated": "Mis à jour le",
	"productiveInclusion.sereGroups.summary.totalGroups": "Nombre total de SERE",
	"productiveInclusion.sereGroups.summary.totalMembers": "Nombre total de membres",
	"productiveInclusion.sereGroups.summary.byPrefecture": "SERE par préfecture",
	"productiveInclusion.sereGroups.summary.noPrefectureData": "Aucune donnée (récap backend ou filtres)",
	"productiveInclusion.sereGroups.filter.importCode": "Code",
	"productiveInclusion.sereGroups.filter.name": "Nom",
	"productiveInclusion.sereGroups.filter.region": "Région",
	"productiveInclusion.sereGroups.filter.prefecture": "Préfecture",
	"productiveInclusion.sereGroups.filter.subPrefecture": "Sous-préfecture",
	"productiveInclusion.sereGroups.filter.district": "District",
	"productiveInclusion.sereGroups.filter.membersCount": "Membres",
	"productiveInclusion.sereGroups.filter.dateUpdatedFrom": "Mis à jour du",
	"productiveInclusion.sereGroups.filter.dateUpdatedTo": "Mis à jour au",
	"productiveInclusion.sereGroups.view": "Voir",
	"productiveInclusion.sereGroups.noRights": "Vous n'avez pas les droits pour consulter les SERE.",
	"productiveInclusion.sereGroup.pageTitle": "SERE {name}",
	"productiveInclusion.sereGroup.infoSectionTitle": "Information du SERE",
	"productiveInclusion.sereGroup.code": "Code",
	"productiveInclusion.sereGroup.importCode": "Code",
	"productiveInclusion.sereGroup.name": "Nom",
	"productiveInclusion.sereGroup.locality": "Localité",
	"productiveInclusion.sereGroup.administrativeLevels": "Localisation administrative",
	"productiveInclusion.sereGroup.location": "Localisation",
	"productiveInclusion.sereGroup.tab.members": "Membres",
	"productiveInclusion.sereGroup.members.pageTitle": "Membres ({totalCount})",
	"productiveInclusion.sereGroup.tab.activities": "Activités",
	"productiveInclusion.sereGroup.activities.pageTitle": "Activités ({totalCount})",
	"productiveInclusion.locationHierarchy.region": "Région",
	"productiveInclusion.locationHierarchy.prefecture": "Préfecture",
	"productiveInclusion.locationHierarchy.subPrefecture": "Sous-préfecture",
	"productiveInclusion.locationHierarchy.district": "District",
	"productiveInclusion.locationHierarchy.notSet": "Non renseigné",
	"productiveInclusion.sereMember.codeMenage": "Code ménage",
	"productiveInclusion.sereMember.lastName": "Nom",
	"productiveInclusion.sereMember.firstName": "Prénom",
	"productiveInclusion.sereMember.phone": "Téléphone",
	"productiveInclusion.sereMember.role": "Fonction",
	"productiveInclusion.sereMember.beneficiaryType": "Type bénéficiaire",
	"productiveInclusion.sereActivity.title": "Titre",
	"productiveInclusion.sereActivity.description": "Description",
	"productiveInclusion.sereActivity.activityDate": "Date d'activité",
	"productiveInclusion.sereActivity.status": "Statut",
	"productiveInclusion.sereActivity.status.PLANNED": "Planifiée",
	"productiveInclusion.sereActivity.status.IN_PROGRESS": "En cours",
	"productiveInclusion.sereActivity.status.COMPLETED": "Terminée",
	"productiveInclusion.sereActivity.status.CANCELLED": "Annulée",
	"productiveInclusion.sereActivity.add": "Ajouter une activité",
	"productiveInclusion.sereActivity.edit": "Modifier",
	"productiveInclusion.sereActivity.delete": "Supprimer",
	"productiveInclusion.sereActivity.delete.confirm.title": "Supprimer l'activité",
	"productiveInclusion.sereActivity.delete.confirm.message": "Confirmez-vous la suppression de cette activité ?",
	"productiveInclusion.sereActivity.create.mutationLabel": "Création de l'activité {title}",
	"productiveInclusion.sereActivity.update.mutationLabel": "Mise à jour de l'activité {title}",
	"productiveInclusion.sereActivity.delete.mutationLabel": "Suppression de l'activité {title}",
	"productiveInclusion.sereActivity.dialog.createTitle": "Nouvelle activité",
	"productiveInclusion.sereActivity.dialog.editTitle": "Modifier l'activité",
	"productiveInclusion.sereActivity.dialog.save": "Enregistrer",
	"productiveInclusion.sereActivity.dialog.cancel": "Annuler"
};

const REQUEST = actionType => "".concat(actionType, "_REQ");
const SUCCESS = actionType => "".concat(actionType, "_RESP");
const ERROR = actionType => "".concat(actionType, "_ERR");

/**
 * GraphQL `locationHierarchy` JSON keys (openIMIS technical types V,W,D,R mapped in UI labels only).
 * Display order: broad → specific (region → … → village-as-District).
 */
const HIERARCHY_LEVELS = [{
  jsonKey: 'region',
  labelKey: 'locationHierarchy.region'
}, {
  jsonKey: 'district',
  labelKey: 'locationHierarchy.prefecture'
}, {
  jsonKey: 'ward',
  labelKey: 'locationHierarchy.subPrefecture'
}, {
  jsonKey: 'village',
  labelKey: 'locationHierarchy.district'
}];
function parseLocationHierarchy(raw) {
  if (raw == null || raw === '') return null;
  if (typeof raw === 'object' && !Array.isArray(raw)) return raw;
  if (typeof raw === 'string') {
    try {
      const parsed = JSON.parse(raw);
      return typeof parsed === 'object' && parsed ? parsed : null;
    } catch (_unused) {
      return null;
    }
  }
  return null;
}
function formatLevelValue(node) {
  if (!node || typeof node !== 'object') return null;
  const name = node.name;
  const code = node.code;
  if (name != null && String(name).trim() !== '') return String(name).trim();
  if (code != null && String(code).trim() !== '') return String(code).trim();
  return null;
}

function normalizePrefectureRows(raw) {
  if (!Array.isArray(raw)) return [];
  return raw.map(row => {
    var _ref, _ref2, _ref3, _ref4, _row$prefectureName, _ref5, _ref6, _row$count;
    const label = (_ref = (_ref2 = (_ref3 = (_ref4 = (_row$prefectureName = row === null || row === void 0 ? void 0 : row.prefectureName) !== null && _row$prefectureName !== void 0 ? _row$prefectureName : row === null || row === void 0 ? void 0 : row.prefecture_name) !== null && _ref4 !== void 0 ? _ref4 : row === null || row === void 0 ? void 0 : row.name) !== null && _ref3 !== void 0 ? _ref3 : row === null || row === void 0 ? void 0 : row.label) !== null && _ref2 !== void 0 ? _ref2 : row === null || row === void 0 ? void 0 : row.prefecture) !== null && _ref !== void 0 ? _ref : '—';
    const count = Number((_ref5 = (_ref6 = (_row$count = row === null || row === void 0 ? void 0 : row.count) !== null && _row$count !== void 0 ? _row$count : row === null || row === void 0 ? void 0 : row.groupsCount) !== null && _ref6 !== void 0 ? _ref6 : row === null || row === void 0 ? void 0 : row.groups_count) !== null && _ref5 !== void 0 ? _ref5 : 0);
    return {
      label: String(label),
      count: Number.isNaN(count) ? 0 : count
    };
  }).filter(r => r.label && r.label !== '—');
}

function ownKeys$3(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$3(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$3(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const ACTION_TYPE = {
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
  DELETE_SERE_ACTIVITY: 'PRODUCTIVE_INCLUSION_DELETE_SERE_ACTIVITY'
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
  mutation: {}
};
function handleMutationSuccess(state, service, action) {
  var _action$payload;
  const gqlError = feCore.formatGraphQLError(action.payload);
  if (gqlError) {
    return _objectSpread$3(_objectSpread$3({}, state), {}, {
      submittingMutation: false,
      mutation: _objectSpread$3(_objectSpread$3({}, state.mutation), {}, {
        error: gqlError
      })
    });
  }
  const response = (_action$payload = action.payload) === null || _action$payload === void 0 || (_action$payload = _action$payload.data) === null || _action$payload === void 0 ? void 0 : _action$payload[service];
  if (!response) {
    return _objectSpread$3(_objectSpread$3({}, state), {}, {
      submittingMutation: false,
      mutation: _objectSpread$3(_objectSpread$3({}, state.mutation), {}, {
        error: {
          message: 'Empty mutation response',
          detail: service
        }
      })
    });
  }
  return feCore.dispatchMutationResp(state, service, action);
}
function reducer() {
  var _action$payload2, _action$payload3, _action$payload$data$, _action$payload4, _parseData$, _parseData, _action$payload6, _action$payload7, _action$payload8, _action$payload$data$2, _action$payload9, _action$payload0, _action$payload1, _action$payload$data$3, _action$payload10;
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case REQUEST(ACTION_TYPE.SEARCH_SERE_GROUPS):
      return _objectSpread$3(_objectSpread$3({}, state), {}, {
        fetchingSereGroups: true,
        fetchedSereGroups: false,
        errorSereGroups: null
      });
    case SUCCESS(ACTION_TYPE.SEARCH_SERE_GROUPS):
      return _objectSpread$3(_objectSpread$3({}, state), {}, {
        fetchingSereGroups: false,
        fetchedSereGroups: true,
        sereGroups: feCore.parseData((_action$payload2 = action.payload) === null || _action$payload2 === void 0 || (_action$payload2 = _action$payload2.data) === null || _action$payload2 === void 0 ? void 0 : _action$payload2.sereGroup),
        sereGroupsPageInfo: feCore.pageInfo((_action$payload3 = action.payload) === null || _action$payload3 === void 0 || (_action$payload3 = _action$payload3.data) === null || _action$payload3 === void 0 ? void 0 : _action$payload3.sereGroup),
        sereGroupsTotalCount: (_action$payload$data$ = (_action$payload4 = action.payload) === null || _action$payload4 === void 0 || (_action$payload4 = _action$payload4.data) === null || _action$payload4 === void 0 || (_action$payload4 = _action$payload4.sereGroup) === null || _action$payload4 === void 0 ? void 0 : _action$payload4.totalCount) !== null && _action$payload$data$ !== void 0 ? _action$payload$data$ : 0,
        errorSereGroups: feCore.formatGraphQLError(action.payload)
      });
    case ERROR(ACTION_TYPE.SEARCH_SERE_GROUPS):
      return _objectSpread$3(_objectSpread$3({}, state), {}, {
        fetchingSereGroups: false,
        errorSereGroups: feCore.formatServerError(action.payload)
      });
    case REQUEST(ACTION_TYPE.GET_SERE_GROUPS_SUMMARY):
      return _objectSpread$3(_objectSpread$3({}, state), {}, {
        fetchingSereGroupsSummary: true,
        fetchedSereGroupsSummary: false,
        errorSereGroupsSummary: null
      });
    case SUCCESS(ACTION_TYPE.GET_SERE_GROUPS_SUMMARY):
      {
        var _action$payload5, _ref, _raw$totalGroups, _ref2, _raw$totalMembers, _raw$groupsByPrefectu;
        const raw = (_action$payload5 = action.payload) === null || _action$payload5 === void 0 || (_action$payload5 = _action$payload5.data) === null || _action$payload5 === void 0 ? void 0 : _action$payload5.sereGroupSummary;
        return _objectSpread$3(_objectSpread$3({}, state), {}, {
          fetchingSereGroupsSummary: false,
          fetchedSereGroupsSummary: true,
          sereGroupsSummary: raw ? {
            totalGroups: (_ref = (_raw$totalGroups = raw.totalGroups) !== null && _raw$totalGroups !== void 0 ? _raw$totalGroups : raw.total_groups) !== null && _ref !== void 0 ? _ref : null,
            totalMembers: (_ref2 = (_raw$totalMembers = raw.totalMembers) !== null && _raw$totalMembers !== void 0 ? _raw$totalMembers : raw.total_members) !== null && _ref2 !== void 0 ? _ref2 : null,
            groupsByPrefecture: normalizePrefectureRows((_raw$groupsByPrefectu = raw.groupsByPrefecture) !== null && _raw$groupsByPrefectu !== void 0 ? _raw$groupsByPrefectu : raw.groups_by_prefecture)
          } : null,
          errorSereGroupsSummary: feCore.formatGraphQLError(action.payload)
        });
      }
    case ERROR(ACTION_TYPE.GET_SERE_GROUPS_SUMMARY):
      return _objectSpread$3(_objectSpread$3({}, state), {}, {
        fetchingSereGroupsSummary: false,
        fetchedSereGroupsSummary: true,
        sereGroupsSummary: null,
        errorSereGroupsSummary: feCore.formatServerError(action.payload)
      });
    case REQUEST(ACTION_TYPE.GET_SERE_GROUP):
      return _objectSpread$3(_objectSpread$3({}, state), {}, {
        fetchingSereGroup: true,
        fetchedSereGroup: false,
        errorSereGroup: null
      });
    case SUCCESS(ACTION_TYPE.GET_SERE_GROUP):
      return _objectSpread$3(_objectSpread$3({}, state), {}, {
        fetchingSereGroup: false,
        fetchedSereGroup: true,
        sereGroup: (_parseData$ = (_parseData = feCore.parseData((_action$payload6 = action.payload) === null || _action$payload6 === void 0 || (_action$payload6 = _action$payload6.data) === null || _action$payload6 === void 0 ? void 0 : _action$payload6.sereGroup)) === null || _parseData === void 0 ? void 0 : _parseData[0]) !== null && _parseData$ !== void 0 ? _parseData$ : null,
        errorSereGroup: feCore.formatGraphQLError(action.payload)
      });
    case ERROR(ACTION_TYPE.GET_SERE_GROUP):
      return _objectSpread$3(_objectSpread$3({}, state), {}, {
        fetchingSereGroup: false,
        errorSereGroup: feCore.formatServerError(action.payload)
      });
    case ACTION_TYPE.CLEAR_SERE_GROUP:
      return _objectSpread$3(_objectSpread$3({}, state), {}, {
        fetchingSereGroup: false,
        fetchedSereGroup: false,
        sereGroup: null,
        errorSereGroup: null
      });
    case REQUEST(ACTION_TYPE.SEARCH_SERE_GROUP_MEMBERS):
      return _objectSpread$3(_objectSpread$3({}, state), {}, {
        fetchingSereMembers: true,
        fetchedSereMembers: false,
        errorSereMembers: null
      });
    case SUCCESS(ACTION_TYPE.SEARCH_SERE_GROUP_MEMBERS):
      return _objectSpread$3(_objectSpread$3({}, state), {}, {
        fetchingSereMembers: false,
        fetchedSereMembers: true,
        sereMembers: feCore.parseData((_action$payload7 = action.payload) === null || _action$payload7 === void 0 || (_action$payload7 = _action$payload7.data) === null || _action$payload7 === void 0 ? void 0 : _action$payload7.sereMember),
        sereMembersPageInfo: feCore.pageInfo((_action$payload8 = action.payload) === null || _action$payload8 === void 0 || (_action$payload8 = _action$payload8.data) === null || _action$payload8 === void 0 ? void 0 : _action$payload8.sereMember),
        sereMembersTotalCount: (_action$payload$data$2 = (_action$payload9 = action.payload) === null || _action$payload9 === void 0 || (_action$payload9 = _action$payload9.data) === null || _action$payload9 === void 0 || (_action$payload9 = _action$payload9.sereMember) === null || _action$payload9 === void 0 ? void 0 : _action$payload9.totalCount) !== null && _action$payload$data$2 !== void 0 ? _action$payload$data$2 : 0,
        errorSereMembers: feCore.formatGraphQLError(action.payload)
      });
    case ERROR(ACTION_TYPE.SEARCH_SERE_GROUP_MEMBERS):
      return _objectSpread$3(_objectSpread$3({}, state), {}, {
        fetchingSereMembers: false,
        errorSereMembers: feCore.formatServerError(action.payload)
      });
    case REQUEST(ACTION_TYPE.SEARCH_SERE_MEMBERS_LIST):
      return _objectSpread$3(_objectSpread$3({}, state), {}, {
        fetchingSereMembersList: true,
        fetchedSereMembersList: false,
        errorSereMembersList: null
      });
    case SUCCESS(ACTION_TYPE.SEARCH_SERE_MEMBERS_LIST):
      return _objectSpread$3(_objectSpread$3({}, state), {}, {
        fetchingSereMembersList: false,
        fetchedSereMembersList: true,
        sereMembersList: feCore.parseData((_action$payload0 = action.payload) === null || _action$payload0 === void 0 || (_action$payload0 = _action$payload0.data) === null || _action$payload0 === void 0 ? void 0 : _action$payload0.sereMember),
        sereMembersListPageInfo: feCore.pageInfo((_action$payload1 = action.payload) === null || _action$payload1 === void 0 || (_action$payload1 = _action$payload1.data) === null || _action$payload1 === void 0 ? void 0 : _action$payload1.sereMember),
        sereMembersListTotalCount: (_action$payload$data$3 = (_action$payload10 = action.payload) === null || _action$payload10 === void 0 || (_action$payload10 = _action$payload10.data) === null || _action$payload10 === void 0 || (_action$payload10 = _action$payload10.sereMember) === null || _action$payload10 === void 0 ? void 0 : _action$payload10.totalCount) !== null && _action$payload$data$3 !== void 0 ? _action$payload$data$3 : 0,
        errorSereMembersList: feCore.formatGraphQLError(action.payload)
      });
    case ERROR(ACTION_TYPE.SEARCH_SERE_MEMBERS_LIST):
      return _objectSpread$3(_objectSpread$3({}, state), {}, {
        fetchingSereMembersList: false,
        errorSereMembersList: feCore.formatServerError(action.payload)
      });
    case REQUEST(ACTION_TYPE.SEARCH_SERE_ACTIVITIES):
      return _objectSpread$3(_objectSpread$3({}, state), {}, {
        fetchingSereActivities: true,
        fetchedSereActivities: false,
        errorSereActivities: null
      });
    case SUCCESS(ACTION_TYPE.SEARCH_SERE_ACTIVITIES):
      {
        var _action$payload11, _connection$totalCoun;
        const connection = (_action$payload11 = action.payload) === null || _action$payload11 === void 0 || (_action$payload11 = _action$payload11.data) === null || _action$payload11 === void 0 ? void 0 : _action$payload11.sereActivity;
        const activities = feCore.parseData(connection);
        return _objectSpread$3(_objectSpread$3({}, state), {}, {
          fetchingSereActivities: false,
          fetchedSereActivities: true,
          sereActivities: activities,
          sereActivitiesPageInfo: feCore.pageInfo(connection),
          sereActivitiesTotalCount: (_connection$totalCoun = connection === null || connection === void 0 ? void 0 : connection.totalCount) !== null && _connection$totalCoun !== void 0 ? _connection$totalCoun : activities.length,
          errorSereActivities: feCore.formatGraphQLError(action.payload)
        });
      }
    case ERROR(ACTION_TYPE.SEARCH_SERE_ACTIVITIES):
      return _objectSpread$3(_objectSpread$3({}, state), {}, {
        fetchingSereActivities: false,
        errorSereActivities: feCore.formatServerError(action.payload)
      });
    case REQUEST(ACTION_TYPE.MUTATION):
      return feCore.dispatchMutationReq(state, action);
    case ERROR(ACTION_TYPE.MUTATION):
      return _objectSpread$3(_objectSpread$3({}, feCore.dispatchMutationErr(state, action)), {}, {
        submittingMutation: false
      });
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

const SERE_GROUP_PROJECTION = () => ['id', 'importCode', 'name', 'locality', 'locationHierarchy', 'membersCount', 'dateCreated', 'dateUpdated'];

/** Onglet membres fiche SERE — groupId obligatoire, pas de sereGroup imbriqué. */
const SERE_MEMBER_GROUP_PROJECTION = () => ['uuid', 'lastName', 'firstName', 'phone', 'role', 'beneficiaryType', 'codeMenage'];

/** Liste globale Membres — sans groupId (droit 122005). */
const SERE_MEMBER_LIST_PROJECTION = () => ['uuid', 'codeMenage', 'lastName', 'firstName', 'phone', 'role', 'beneficiaryType', 'status', 'statusDisplay', 'presenceCount', 'sereName', 'sereImportCode', 'prefectureName', 'subPrefectureName', 'districtName', 'sereGroup { id uuid name importCode locationHierarchy }'];

/** Aligné sur sereActivity(groupId, first) — edges.node */
const SERE_ACTIVITY_PROJECTION = () => ['id', 'title', 'status', 'activityDate', 'description'];
function formatSereActivityGQL(activity) {
  const fields = ["groupId: \"".concat(activity.groupId, "\""), "title: \"".concat(feCore.formatGQLString(activity.title), "\"")];
  if (activity.description !== undefined && activity.description !== null) {
    fields.push("description: \"".concat(feCore.formatGQLString(activity.description), "\""));
  }
  if (activity.activityDate) {
    const dateOnly = String(activity.activityDate).split('T')[0];
    fields.push("activityDate: \"".concat(dateOnly, "\""));
  }
  if (activity.status) {
    fields.push("status: \"".concat(activity.status, "\""));
  }
  if (activity.id) {
    fields.push("id: \"".concat(feCore.decodeId(activity.id), "\""));
  }
  return fields.join('\n          ');
}
const SERE_GROUP_SUMMARY_PROJECTION = () => ['totalGroups', 'totalMembers', 'groupsByPrefecture { prefectureName count }'];
function fetchSereGroups(mm) {
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  const payload = feCore.formatPageQueryWithCount('sereGroup', params, SERE_GROUP_PROJECTION());
  return feCore.graphql(payload, ACTION_TYPE.SEARCH_SERE_GROUPS);
}

/** Récap global (mêmes filtres que la liste, sans pagination). Nécessite sereGroupSummary côté backend. */
function fetchSereGroupsSummary() {
  let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  const payload = feCore.formatQuery('sereGroupSummary', params, SERE_GROUP_SUMMARY_PROJECTION());
  return feCore.graphql(payload, ACTION_TYPE.GET_SERE_GROUPS_SUMMARY);
}
function fetchSereGroup(mm) {
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  const payload = feCore.formatPageQueryWithCount('sereGroup', params, SERE_GROUP_PROJECTION());
  return feCore.graphql(payload, ACTION_TYPE.GET_SERE_GROUP);
}
function clearSereGroup() {
  return {
    type: ACTION_TYPE.CLEAR_SERE_GROUP
  };
}

/** Membres d'un SERE (fiche détail) — groupId obligatoire. */
function fetchSereGroupMembers() {
  let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  const payload = feCore.formatPageQueryWithCount('sereMember', params, SERE_MEMBER_GROUP_PROJECTION());
  return feCore.graphql(payload, ACTION_TYPE.SEARCH_SERE_GROUP_MEMBERS);
}

/** Liste globale Membres — ne jamais passer groupId. */
function fetchSereMembersGlobalList() {
  let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  const sanitized = params.filter(p => !/^groupId\s*:/.test(String(p).trim()));
  const payload = feCore.formatPageQueryWithCount('sereMember', sanitized, SERE_MEMBER_LIST_PROJECTION());
  return feCore.graphql(payload, ACTION_TYPE.SEARCH_SERE_MEMBERS_LIST);
}
function fetchSereActivities() {
  let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  const payload = feCore.formatPageQuery('sereActivity', params, SERE_ACTIVITY_PROJECTION());
  return feCore.graphql(payload, ACTION_TYPE.SEARCH_SERE_ACTIVITIES);
}
function createSereActivity(activity, clientMutationLabel) {
  const mutation = feCore.formatMutation('createSereActivity', formatSereActivityGQL(activity), clientMutationLabel);
  const requestedDateTime = new Date();
  return feCore.graphql(mutation.payload, [REQUEST(ACTION_TYPE.MUTATION), SUCCESS(ACTION_TYPE.CREATE_SERE_ACTIVITY), ERROR(ACTION_TYPE.MUTATION)], {
    actionType: ACTION_TYPE.CREATE_SERE_ACTIVITY,
    clientMutationId: mutation.clientMutationId,
    clientMutationLabel,
    requestedDateTime
  });
}
function updateSereActivity(activity, clientMutationLabel) {
  const mutation = feCore.formatMutation('updateSereActivity', formatSereActivityGQL(activity), clientMutationLabel);
  const requestedDateTime = new Date();
  return feCore.graphql(mutation.payload, [REQUEST(ACTION_TYPE.MUTATION), SUCCESS(ACTION_TYPE.UPDATE_SERE_ACTIVITY), ERROR(ACTION_TYPE.MUTATION)], {
    actionType: ACTION_TYPE.UPDATE_SERE_ACTIVITY,
    clientMutationId: mutation.clientMutationId,
    clientMutationLabel,
    requestedDateTime
  });
}
function resolveActivityUuid(activityId) {
  if (!activityId) return null;
  const raw = String(activityId);
  if (/^[0-9a-f-]{36}$/i.test(raw)) return raw;
  try {
    return feCore.decodeId(raw);
  } catch (_unused) {
    return raw;
  }
}
function deleteSereActivity(activityId, clientMutationLabel) {
  const uuid = resolveActivityUuid(activityId);
  const mutation = feCore.formatMutation('deleteSereActivity', "uuids: [\"".concat(uuid, "\"]"), clientMutationLabel);
  const requestedDateTime = new Date();
  return feCore.graphql(mutation.payload, [REQUEST(ACTION_TYPE.MUTATION), SUCCESS(ACTION_TYPE.DELETE_SERE_ACTIVITY), ERROR(ACTION_TYPE.MUTATION)], {
    actionType: ACTION_TYPE.DELETE_SERE_ACTIVITY,
    clientMutationId: mutation.clientMutationId,
    clientMutationLabel,
    requestedDateTime
  });
}

const MODULE_NAME = 'productiveInclusion';
const RIGHT_SERE_GROUP_SEARCH = 122001;
const RIGHT_SERE_MEMBER_SEARCH = 122005;
const RIGHT_SERE_ACTIVITY_SEARCH = 122006;
const RIGHT_SERE_ACTIVITY_CREATE = 122007;
const RIGHT_SERE_ACTIVITY_UPDATE = 122008;
const RIGHT_SERE_ACTIVITY_DELETE = 122009;
const ROUTE_SERE_GROUPS = 'productive-inclusion/sere-groups';
const ROUTE_SERE_GROUP = 'productive-inclusion/sere-groups/group';
const ROUTE_SERE_MEMBERS = 'productive-inclusion/members';
const MEMBER_STATUS_ACTIVE = 'ACTIVE';
const MEMBER_STATUS_INACTIVE = 'INACTIVE';
const MEMBER_STATUS_PENDING = 'PENDING';
const MEMBER_STATUS_SUSPENDED = 'SUSPENDED';
const SERE_MEMBER_STATUSES = [MEMBER_STATUS_ACTIVE, MEMBER_STATUS_INACTIVE, MEMBER_STATUS_PENDING, MEMBER_STATUS_SUSPENDED];
const DEFAULT_PAGE_SIZE = 10;
const SERE_MEMBERS_DEFAULT_PAGE_SIZE = 20;
const SERE_GROUP_MEMBERS_DEFAULT_PAGE_SIZE = 50;
const ROWS_PER_PAGE_OPTIONS = [10, 20, 50, 100];
/** Taille max alignée sur l’API sereActivity (first) côté backend */
const SERE_ACTIVITY_DEFAULT_PAGE_SIZE = 50;
const SERE_ACTIVITY_ROWS_PER_PAGE_OPTIONS = [10, 20, 50];
const DATE_TO_DATETIME_SUFFIX = 'T00:00:00';
const DATE_END_OF_DAY_SUFFIX = 'T23:59:59';
const GREATER_OR_EQUAL_LOOKUP = 'Gte';
const LESS_OR_EQUAL_LOOKUP = 'Lte';
const CONTAINS_LOOKUP = 'Icontains';
const ACTIVITY_STATUS_PLANNED = 'PLANNED';
const ACTIVITY_STATUS_IN_PROGRESS = 'IN_PROGRESS';
const ACTIVITY_STATUS_COMPLETED = 'COMPLETED';
const ACTIVITY_STATUS_CANCELLED = 'CANCELLED';
const ACTIVITY_STATUSES = [ACTIVITY_STATUS_PLANNED, ACTIVITY_STATUS_IN_PROGRESS, ACTIVITY_STATUS_COMPLETED, ACTIVITY_STATUS_CANCELLED];

const useStyles$3 = styles$4.makeStyles(theme => ({
  card: {
    padding: theme.spacing(2),
    height: '100%'
  },
  prefectureList: {
    maxHeight: 160,
    overflowY: 'auto',
    marginTop: theme.spacing(1)
  },
  prefectureRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(0.5, 0),
    borderBottom: "1px solid ".concat(theme.palette.divider)
  }
}));
function displayCount(value) {
  if (value === null || value === undefined || value === '') return '—';
  const n = Number(value);
  return Number.isNaN(n) ? String(value) : n;
}
function SereGroupsSummaryCards(_ref) {
  var _sereGroupsSummary$to, _sereGroupsSummary$gr;
  let intl = _ref.intl,
    fetchingSereGroupsSummary = _ref.fetchingSereGroupsSummary,
    sereGroupsSummary = _ref.sereGroupsSummary,
    sereGroupsTotalCount = _ref.sereGroupsTotalCount;
  const classes = useStyles$3();
  const totalGroups = (_sereGroupsSummary$to = sereGroupsSummary === null || sereGroupsSummary === void 0 ? void 0 : sereGroupsSummary.totalGroups) !== null && _sereGroupsSummary$to !== void 0 ? _sereGroupsSummary$to : sereGroupsTotalCount;
  const totalMembers = sereGroupsSummary === null || sereGroupsSummary === void 0 ? void 0 : sereGroupsSummary.totalMembers;
  const byPrefecture = (_sereGroupsSummary$gr = sereGroupsSummary === null || sereGroupsSummary === void 0 ? void 0 : sereGroupsSummary.groupsByPrefecture) !== null && _sereGroupsSummary$gr !== void 0 ? _sereGroupsSummary$gr : [];
  return /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    container: true,
    spacing: 2,
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/React__default["default"].createElement(core.Paper, {
    elevation: 2,
    className: classes.card
  }, /*#__PURE__*/React__default["default"].createElement(core.Typography, {
    variant: "subtitle2",
    color: "textSecondary",
    gutterBottom: true
  }, feCore.formatMessage(intl, MODULE_NAME, 'sereGroups.summary.totalGroups')), fetchingSereGroupsSummary ? /*#__PURE__*/React__default["default"].createElement(core.CircularProgress, {
    size: 24
  }) : /*#__PURE__*/React__default["default"].createElement(core.Typography, {
    variant: "h4"
  }, displayCount(totalGroups)))), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/React__default["default"].createElement(core.Paper, {
    elevation: 2,
    className: classes.card
  }, /*#__PURE__*/React__default["default"].createElement(core.Typography, {
    variant: "subtitle2",
    color: "textSecondary",
    gutterBottom: true
  }, feCore.formatMessage(intl, MODULE_NAME, 'sereGroups.summary.totalMembers')), fetchingSereGroupsSummary ? /*#__PURE__*/React__default["default"].createElement(core.CircularProgress, {
    size: 24
  }) : /*#__PURE__*/React__default["default"].createElement(core.Typography, {
    variant: "h4"
  }, displayCount(totalMembers)))), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/React__default["default"].createElement(core.Paper, {
    elevation: 2,
    className: classes.card
  }, /*#__PURE__*/React__default["default"].createElement(core.Typography, {
    variant: "subtitle2",
    color: "textSecondary",
    gutterBottom: true
  }, feCore.formatMessage(intl, MODULE_NAME, 'sereGroups.summary.byPrefecture')), fetchingSereGroupsSummary ? /*#__PURE__*/React__default["default"].createElement(core.CircularProgress, {
    size: 24
  }) : byPrefecture.length === 0 ? /*#__PURE__*/React__default["default"].createElement(core.Typography, {
    variant: "body2",
    color: "textSecondary"
  }, feCore.formatMessage(intl, MODULE_NAME, 'sereGroups.summary.noPrefectureData')) : /*#__PURE__*/React__default["default"].createElement(core.Box, {
    className: classes.prefectureList
  }, byPrefecture.map(row => /*#__PURE__*/React__default["default"].createElement("div", {
    key: row.label,
    className: classes.prefectureRow
  }, /*#__PURE__*/React__default["default"].createElement(core.Typography, {
    variant: "body2"
  }, row.label), /*#__PURE__*/React__default["default"].createElement(core.Typography, {
    variant: "body2"
  }, /*#__PURE__*/React__default["default"].createElement("strong", null, row.count))))))));
}
const mapStateToProps$6 = state => {
  var _state$productiveIncl, _state$productiveIncl2, _state$productiveIncl3, _state$productiveIncl4;
  return {
    fetchingSereGroupsSummary: (_state$productiveIncl = state.productiveInclusion) === null || _state$productiveIncl === void 0 ? void 0 : _state$productiveIncl.fetchingSereGroupsSummary,
    sereGroupsSummary: (_state$productiveIncl2 = state.productiveInclusion) === null || _state$productiveIncl2 === void 0 ? void 0 : _state$productiveIncl2.sereGroupsSummary,
    sereGroupsTotalCount: (_state$productiveIncl3 = (_state$productiveIncl4 = state.productiveInclusion) === null || _state$productiveIncl4 === void 0 ? void 0 : _state$productiveIncl4.sereGroupsTotalCount) !== null && _state$productiveIncl3 !== void 0 ? _state$productiveIncl3 : 0
  };
};
var SereGroupsSummaryCards$1 = reactIntl.injectIntl(reactRedux.connect(mapStateToProps$6)(SereGroupsSummaryCards));

/** Retire les paramètres de pagination / tri pour réutiliser les filtres métier côté récap. */
function stripSereGroupPaginationParams(params) {
  if (!Array.isArray(params)) return [];
  return params.filter(p => !/^first:/.test(p) && !/^after:/.test(p) && !/^before:/.test(p) && !/^orderBy:/.test(p));
}
function escapeGqlString(value) {
  if (value == null) return '';
  return String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

const useStyles$2 = styles$4.makeStyles(theme => ({
  form: {
    padding: '0 0 10px 0',
    width: '100%'
  },
  item: {
    padding: theme.spacing(1)
  }
}));
function filterValue$1(filters, key) {
  var _filters$key$value, _filters$key;
  return (_filters$key$value = filters === null || filters === void 0 || (_filters$key = filters[key]) === null || _filters$key === void 0 ? void 0 : _filters$key.value) !== null && _filters$key$value !== void 0 ? _filters$key$value : null;
}
function filterTextValue$1(filters, key) {
  var _filters$key2;
  const v = filters === null || filters === void 0 || (_filters$key2 = filters[key]) === null || _filters$key2 === void 0 ? void 0 : _filters$key2.value;
  return v == null ? '' : String(v);
}
function SereGroupFilter(_ref) {
  _ref.intl;
    let filters = _ref.filters,
    onChangeFilters = _ref.onChangeFilters;
  const classes = useStyles$2();
  const dateUpdatedFrom = filterValue$1(filters, 'dateUpdatedFrom');
  const pushFilter = (id, value, filter) => {
    onChangeFilters([{
      id,
      value,
      filter
    }]);
  };
  const onChangeContains = (field, value) => {
    const trimmed = (value !== null && value !== void 0 ? value : '').trim();
    pushFilter(field, trimmed || null, trimmed ? "".concat(field, "_").concat(CONTAINS_LOOKUP, ": \"").concat(escapeGqlString(trimmed), "\"") : null);
  };
  const onChangeExactNumber = (field, value) => {
    const n = value === '' || value == null ? null : Number(value);
    pushFilter(field, n, n != null && !Number.isNaN(n) ? "".concat(field, ": ").concat(n) : null);
  };
  const onChangeDateFrom = value => {
    pushFilter('dateUpdatedFrom', value, value ? "dateUpdated_".concat(GREATER_OR_EQUAL_LOOKUP, ": \"").concat(value).concat(DATE_TO_DATETIME_SUFFIX, "\"") : null);
  };
  const onChangeDateTo = value => {
    pushFilter('dateUpdatedTo', value, value ? "dateUpdated_".concat(LESS_OR_EQUAL_LOOKUP, ": \"").concat(value).concat(DATE_END_OF_DAY_SUFFIX, "\"") : null);
  };
  return /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    container: true,
    className: classes.form,
    spacing: 1
  }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3,
    className: classes.item
  }, /*#__PURE__*/React__default["default"].createElement(feCore.TextInput, {
    module: MODULE_NAME,
    label: "sereGroups.filter.importCode",
    value: filterTextValue$1(filters, 'importCode'),
    onChange: v => onChangeContains('importCode', v)
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3,
    className: classes.item
  }, /*#__PURE__*/React__default["default"].createElement(feCore.TextInput, {
    module: MODULE_NAME,
    label: "sereGroups.filter.name",
    value: filterTextValue$1(filters, 'name'),
    onChange: v => onChangeContains('name', v)
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3,
    className: classes.item
  }, /*#__PURE__*/React__default["default"].createElement(feCore.TextInput, {
    module: MODULE_NAME,
    label: "sereGroups.filter.region",
    value: filterTextValue$1(filters, 'region'),
    onChange: v => onChangeContains('region', v)
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3,
    className: classes.item
  }, /*#__PURE__*/React__default["default"].createElement(feCore.TextInput, {
    module: MODULE_NAME,
    label: "sereGroups.filter.prefecture",
    value: filterTextValue$1(filters, 'prefecture'),
    onChange: v => onChangeContains('prefecture', v)
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3,
    className: classes.item
  }, /*#__PURE__*/React__default["default"].createElement(feCore.TextInput, {
    module: MODULE_NAME,
    label: "sereGroups.filter.subPrefecture",
    value: filterTextValue$1(filters, 'subPrefecture'),
    onChange: v => onChangeContains('subPrefecture', v)
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3,
    className: classes.item
  }, /*#__PURE__*/React__default["default"].createElement(feCore.TextInput, {
    module: MODULE_NAME,
    label: "sereGroups.filter.district",
    value: filterTextValue$1(filters, 'district'),
    onChange: v => onChangeContains('district', v)
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    md: 2,
    className: classes.item
  }, /*#__PURE__*/React__default["default"].createElement(feCore.NumberInput, {
    module: MODULE_NAME,
    label: "sereGroups.filter.membersCount",
    min: 0,
    value: filterValue$1(filters, 'membersCount'),
    onChange: v => onChangeExactNumber('membersCount', v)
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3,
    className: classes.item
  }, /*#__PURE__*/React__default["default"].createElement(feCore.PublishedComponent, {
    pubRef: "core.DatePicker",
    module: MODULE_NAME,
    label: "sereGroups.filter.dateUpdatedFrom",
    value: filterValue$1(filters, 'dateUpdatedFrom'),
    onChange: onChangeDateFrom
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3,
    className: classes.item
  }, /*#__PURE__*/React__default["default"].createElement(feCore.PublishedComponent, _extends__default["default"]({
    pubRef: "core.DatePicker",
    module: MODULE_NAME,
    label: "sereGroups.filter.dateUpdatedTo",
    value: filterValue$1(filters, 'dateUpdatedTo')
  }, dateUpdatedFrom ? {
    minDate: dateUpdatedFrom
  } : {}, {
    onChange: onChangeDateTo
  }))));
}
var SereGroupFilter$1 = reactIntl.injectIntl(SereGroupFilter);

const LIST_HIERARCHY_KEYS = ['region', 'district', 'ward', 'village'];
function hierarchyCell(group, jsonKey) {
  const h = parseLocationHierarchy(group.locationHierarchy);
  const v = formatLevelValue(h === null || h === void 0 ? void 0 : h[jsonKey]);
  return v !== null && v !== void 0 ? v : '—';
}
function membersCountCell(group) {
  var _group$membersCount;
  const n = (_group$membersCount = group.membersCount) !== null && _group$membersCount !== void 0 ? _group$membersCount : group.members_count;
  if (n === null || n === undefined || n === '') return '—';
  const num = Number(n);
  return Number.isNaN(num) ? String(n) : num;
}
function SereGroupSearcher(_ref) {
  let intl = _ref.intl,
    modulesManager = _ref.modulesManager,
    history = _ref.history,
    rights = _ref.rights,
    fetchSereGroups = _ref.fetchSereGroups,
    fetchSereGroupsSummary = _ref.fetchSereGroupsSummary,
    fetchingSereGroups = _ref.fetchingSereGroups,
    fetchedSereGroups = _ref.fetchedSereGroups,
    errorSereGroups = _ref.errorSereGroups,
    sereGroups = _ref.sereGroups,
    sereGroupsPageInfo = _ref.sereGroupsPageInfo,
    sereGroupsTotalCount = _ref.sereGroupsTotalCount;
  const fetch = params => {
    fetchSereGroups(modulesManager, params);
    fetchSereGroupsSummary(stripSereGroupPaginationParams(params));
  };
  const filtersToQueryParams = state => {
    const params = Object.keys(state.filters).filter(key => !!state.filters[key].filter).map(key => state.filters[key].filter);
    params.push("first: ".concat(state.pageSize));
    if (state.afterCursor) params.push("after: \"".concat(state.afterCursor, "\""));
    if (state.beforeCursor) params.push("before: \"".concat(state.beforeCursor, "\""));
    if (state.orderBy) params.push("orderBy: [\"".concat(state.orderBy, "\"]"));
    return params;
  };
  const headers = () => ['sereGroups.importCode', 'sereGroups.name', 'sereGroups.region', 'sereGroups.prefecture', 'sereGroups.subPrefecture', 'sereGroups.district', 'sereGroups.membersCount', 'sereGroups.dateUpdated', ''];
  const itemFormatters = () => [group => group.importCode, group => group.name, ...LIST_HIERARCHY_KEYS.map(key => group => hierarchyCell(group, key)), group => membersCountCell(group), group => feCore.formatDateFromISO(modulesManager, intl, group.dateUpdated), group => /*#__PURE__*/React__default["default"].createElement(core.Tooltip, {
    title: feCore.formatMessage(intl, MODULE_NAME, 'sereGroups.view')
  }, /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
    onClick: () => feCore.historyPush(modulesManager, history, 'productiveInclusion.route.sereGroup', [feCore.decodeId(group.id)])
  }, /*#__PURE__*/React__default["default"].createElement(VisibilityIcon__default["default"], null)))];
  const rowIdentifier = group => group.id;
  const onDoubleClick = group => {
    feCore.historyPush(modulesManager, history, 'productiveInclusion.route.sereGroup', [feCore.decodeId(group.id)]);
  };
  if (!rights.includes(RIGHT_SERE_GROUP_SEARCH)) {
    return feCore.formatMessage(intl, MODULE_NAME, 'sereGroups.noRights');
  }
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(SereGroupsSummaryCards$1, null), /*#__PURE__*/React__default["default"].createElement(feCore.Searcher, {
    module: MODULE_NAME,
    cacheFiltersKey: "sereGroupsPageFiltersCache",
    fetch: fetch,
    items: sereGroups,
    itemsPageInfo: sereGroupsPageInfo,
    fetchingItems: fetchingSereGroups,
    fetchedItems: fetchedSereGroups,
    errorItems: errorSereGroups,
    tableTitle: feCore.formatMessageWithValues(intl, MODULE_NAME, 'sereGroups.pageTitle', {
      totalCount: sereGroupsTotalCount
    }),
    headers: headers,
    itemFormatters: itemFormatters,
    filtersToQueryParams: filtersToQueryParams,
    FilterPane: SereGroupFilter$1,
    rowIdentifier: rowIdentifier,
    onDoubleClick: onDoubleClick,
    rowsPerPageOptions: ROWS_PER_PAGE_OPTIONS,
    defaultPageSize: DEFAULT_PAGE_SIZE,
    withSelection: "none"
  }));
}
const mapStateToProps$5 = state => {
  var _state$core$user$i_us, _state$core, _state$productiveIncl, _state$productiveIncl2, _state$productiveIncl3, _state$productiveIncl4, _state$productiveIncl5, _state$productiveIncl6;
  return {
    rights: (_state$core$user$i_us = (_state$core = state.core) === null || _state$core === void 0 || (_state$core = _state$core.user) === null || _state$core === void 0 || (_state$core = _state$core.i_user) === null || _state$core === void 0 ? void 0 : _state$core.rights) !== null && _state$core$user$i_us !== void 0 ? _state$core$user$i_us : [],
    fetchingSereGroups: (_state$productiveIncl = state.productiveInclusion) === null || _state$productiveIncl === void 0 ? void 0 : _state$productiveIncl.fetchingSereGroups,
    fetchedSereGroups: (_state$productiveIncl2 = state.productiveInclusion) === null || _state$productiveIncl2 === void 0 ? void 0 : _state$productiveIncl2.fetchedSereGroups,
    errorSereGroups: (_state$productiveIncl3 = state.productiveInclusion) === null || _state$productiveIncl3 === void 0 ? void 0 : _state$productiveIncl3.errorSereGroups,
    sereGroups: (_state$productiveIncl4 = state.productiveInclusion) === null || _state$productiveIncl4 === void 0 ? void 0 : _state$productiveIncl4.sereGroups,
    sereGroupsPageInfo: (_state$productiveIncl5 = state.productiveInclusion) === null || _state$productiveIncl5 === void 0 ? void 0 : _state$productiveIncl5.sereGroupsPageInfo,
    sereGroupsTotalCount: (_state$productiveIncl6 = state.productiveInclusion) === null || _state$productiveIncl6 === void 0 ? void 0 : _state$productiveIncl6.sereGroupsTotalCount
  };
};
const mapDispatchToProps$4 = dispatch => redux.bindActionCreators({
  fetchSereGroups,
  fetchSereGroupsSummary
}, dispatch);
var SereGroupSearcher$1 = reactIntl.injectIntl(feCore.withModulesManager(feCore.withHistory(reactRedux.connect(mapStateToProps$5, mapDispatchToProps$4)(SereGroupSearcher))));

const styles$3 = theme => ({
  page: theme.page
});
function SereGroupsPage(_ref) {
  let classes = _ref.classes;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: classes.page
  }, /*#__PURE__*/React__default["default"].createElement(SereGroupSearcher$1, null));
}
var SereGroupsPage$1 = styles$5.withTheme(styles$5.withStyles(styles$3)(SereGroupsPage));

function displayValue$2(value) {
  if (value === null || value === undefined || value === '') return '—';
  return value;
}
function SereMembersPanel(_ref) {
  let intl = _ref.intl,
    groupId = _ref.groupId,
    rights = _ref.rights,
    fetchSereGroupMembers = _ref.fetchSereGroupMembers,
    fetchingSereMembers = _ref.fetchingSereMembers,
    fetchedSereMembers = _ref.fetchedSereMembers,
    errorSereMembers = _ref.errorSereMembers,
    sereMembers = _ref.sereMembers,
    sereMembersPageInfo = _ref.sereMembersPageInfo,
    sereMembersTotalCount = _ref.sereMembersTotalCount;
  const fetch = params => fetchSereGroupMembers(["groupId: \"".concat(groupId, "\""), ...params]);
  const filtersToQueryParams = state => {
    const params = [];
    params.push('isDeleted: false');
    params.push("first: ".concat(state.pageSize));
    if (state.afterCursor) params.push("after: \"".concat(state.afterCursor, "\""));
    if (state.beforeCursor) params.push("before: \"".concat(state.beforeCursor, "\""));
    if (state.orderBy) {
      params.push("orderBy: [\"".concat(state.orderBy, "\"]"));
    } else {
      params.push('orderBy: ["lastName", "firstName"]');
    }
    return params;
  };
  if (!rights.includes(RIGHT_SERE_MEMBER_SEARCH)) {
    return null;
  }
  const headers = () => ['members.codeMenage', 'members.lastName', 'members.firstName', 'members.phone', 'members.role', 'members.beneficiaryType'];
  const itemFormatters = () => [member => {
    var _member$codeMenage;
    return displayValue$2((_member$codeMenage = member.codeMenage) !== null && _member$codeMenage !== void 0 ? _member$codeMenage : member.code_menage);
  }, member => displayValue$2(member.lastName), member => displayValue$2(member.firstName), member => displayValue$2(member.phone), member => displayValue$2(member.role), member => {
    var _member$beneficiaryTy;
    return displayValue$2((_member$beneficiaryTy = member.beneficiaryType) !== null && _member$beneficiaryTy !== void 0 ? _member$beneficiaryTy : member.beneficiary_type);
  }];
  return /*#__PURE__*/React__default["default"].createElement(feCore.Searcher, {
    module: MODULE_NAME,
    cacheFiltersKey: "sereMembersPageFiltersCache-".concat(groupId),
    fetch: fetch,
    items: sereMembers,
    itemsPageInfo: sereMembersPageInfo,
    fetchingItems: fetchingSereMembers,
    fetchedItems: fetchedSereMembers,
    errorItems: errorSereMembers,
    tableTitle: feCore.formatMessageWithValues(intl, MODULE_NAME, 'sereGroup.members.pageTitle', {
      totalCount: sereMembersTotalCount
    }),
    headers: headers,
    itemFormatters: itemFormatters,
    filtersToQueryParams: filtersToQueryParams,
    rowIdentifier: member => {
      var _member$uuid;
      return (_member$uuid = member.uuid) !== null && _member$uuid !== void 0 ? _member$uuid : member.id;
    },
    rowsPerPageOptions: ROWS_PER_PAGE_OPTIONS,
    defaultPageSize: SERE_GROUP_MEMBERS_DEFAULT_PAGE_SIZE,
    withSelection: "none"
  });
}
const mapStateToProps$4 = state => {
  var _state$core$user$i_us, _state$core, _state$productiveIncl, _state$productiveIncl2, _state$productiveIncl3, _state$productiveIncl4, _state$productiveIncl5, _state$productiveIncl6;
  return {
    rights: (_state$core$user$i_us = (_state$core = state.core) === null || _state$core === void 0 || (_state$core = _state$core.user) === null || _state$core === void 0 || (_state$core = _state$core.i_user) === null || _state$core === void 0 ? void 0 : _state$core.rights) !== null && _state$core$user$i_us !== void 0 ? _state$core$user$i_us : [],
    fetchingSereMembers: (_state$productiveIncl = state.productiveInclusion) === null || _state$productiveIncl === void 0 ? void 0 : _state$productiveIncl.fetchingSereMembers,
    fetchedSereMembers: (_state$productiveIncl2 = state.productiveInclusion) === null || _state$productiveIncl2 === void 0 ? void 0 : _state$productiveIncl2.fetchedSereMembers,
    errorSereMembers: (_state$productiveIncl3 = state.productiveInclusion) === null || _state$productiveIncl3 === void 0 ? void 0 : _state$productiveIncl3.errorSereMembers,
    sereMembers: (_state$productiveIncl4 = state.productiveInclusion) === null || _state$productiveIncl4 === void 0 ? void 0 : _state$productiveIncl4.sereMembers,
    sereMembersPageInfo: (_state$productiveIncl5 = state.productiveInclusion) === null || _state$productiveIncl5 === void 0 ? void 0 : _state$productiveIncl5.sereMembersPageInfo,
    sereMembersTotalCount: (_state$productiveIncl6 = state.productiveInclusion) === null || _state$productiveIncl6 === void 0 ? void 0 : _state$productiveIncl6.sereMembersTotalCount
  };
};
const mapDispatchToProps$3 = dispatch => redux.bindActionCreators({
  fetchSereGroupMembers
}, dispatch);
var SereMembersPanel$1 = reactIntl.injectIntl(reactRedux.connect(mapStateToProps$4, mapDispatchToProps$3)(SereMembersPanel));

function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function normalizeActivityForDialog(activity) {
  var _activity$status, _activity$activityDat;
  if (!activity) return {
    status: ACTIVITY_STATUS_PLANNED
  };
  const rawStatus = (_activity$status = activity.status) !== null && _activity$status !== void 0 ? _activity$status : activity.activity_status;
  const statusUpper = rawStatus ? String(rawStatus).toUpperCase() : ACTIVITY_STATUS_PLANNED;
  const status = ACTIVITY_STATUSES.includes(statusUpper) ? statusUpper : ACTIVITY_STATUS_PLANNED;
  const rawDate = (_activity$activityDat = activity.activityDate) !== null && _activity$activityDat !== void 0 ? _activity$activityDat : activity.activity_date;
  const activityDate = rawDate ? String(rawDate).split('T')[0] : '';
  return _objectSpread$2(_objectSpread$2({}, activity), {}, {
    status,
    activityDate
  });
}
function SereActivityDialog(_ref) {
  var _editedActivity$title2, _editedActivity$descr, _editedActivity$activ, _editedActivity$statu;
  let intl = _ref.intl,
    open = _ref.open,
    activity = _ref.activity,
    onClose = _ref.onClose,
    onSave = _ref.onSave;
  const _useState = React.useState({}),
    _useState2 = _slicedToArray__default["default"](_useState, 2),
    editedActivity = _useState2[0],
    setEditedActivity = _useState2[1];
  React.useEffect(() => {
    if (open) {
      setEditedActivity(normalizeActivityForDialog(activity));
    }
  }, [activity, open]);
  const updateField = (field, value) => {
    setEditedActivity(current => _objectSpread$2(_objectSpread$2({}, current), {}, {
      [field]: value
    }));
  };
  const canSave = () => {
    var _editedActivity$title;
    return !!((_editedActivity$title = editedActivity.title) !== null && _editedActivity$title !== void 0 && _editedActivity$title.trim()) && !!editedActivity.status;
  };
  return /*#__PURE__*/React__default["default"].createElement(core.Dialog, {
    open: open,
    onClose: onClose,
    fullWidth: true,
    maxWidth: "sm"
  }, /*#__PURE__*/React__default["default"].createElement(core.DialogTitle, null, feCore.formatMessage(intl, MODULE_NAME, editedActivity !== null && editedActivity !== void 0 && editedActivity.id ? 'sereActivity.dialog.editTitle' : 'sereActivity.dialog.createTitle')), /*#__PURE__*/React__default["default"].createElement(core.DialogContent, null, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/React__default["default"].createElement(feCore.TextInput, {
    module: MODULE_NAME,
    label: "sereActivity.title",
    value: (_editedActivity$title2 = editedActivity.title) !== null && _editedActivity$title2 !== void 0 ? _editedActivity$title2 : '',
    onChange: value => updateField('title', value),
    required: true
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/React__default["default"].createElement(feCore.TextInput, {
    module: MODULE_NAME,
    label: "sereActivity.description",
    value: (_editedActivity$descr = editedActivity.description) !== null && _editedActivity$descr !== void 0 ? _editedActivity$descr : '',
    onChange: value => updateField('description', value),
    multiline: true
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/React__default["default"].createElement(feCore.TextInput, {
    module: MODULE_NAME,
    label: "sereActivity.activityDate",
    type: "date",
    value: (_editedActivity$activ = editedActivity.activityDate) !== null && _editedActivity$activ !== void 0 ? _editedActivity$activ : '',
    onChange: value => updateField('activityDate', value)
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/React__default["default"].createElement(feCore.ConstantBasedPicker, {
    module: MODULE_NAME,
    label: "sereActivity.status",
    value: (_editedActivity$statu = editedActivity.status) !== null && _editedActivity$statu !== void 0 ? _editedActivity$statu : ACTIVITY_STATUS_PLANNED,
    onChange: value => updateField('status', value),
    constants: ACTIVITY_STATUSES,
    withNull: false,
    required: true
  })))), /*#__PURE__*/React__default["default"].createElement(core.DialogActions, null, /*#__PURE__*/React__default["default"].createElement(core.Button, {
    onClick: onClose
  }, feCore.formatMessage(intl, MODULE_NAME, 'sereActivity.dialog.cancel')), /*#__PURE__*/React__default["default"].createElement(core.Button, {
    color: "primary",
    variant: "contained",
    disabled: !canSave(),
    onClick: () => onSave(editedActivity)
  }, feCore.formatMessage(intl, MODULE_NAME, 'sereActivity.dialog.save'))));
}
var SereActivityDialog$1 = reactIntl.injectIntl(SereActivityDialog);

function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function SereActivitiesPanel(_ref) {
  let intl = _ref.intl,
    modulesManager = _ref.modulesManager,
    groupId = _ref.groupId,
    rights = _ref.rights,
    fetchSereActivities = _ref.fetchSereActivities,
    createSereActivity = _ref.createSereActivity,
    updateSereActivity = _ref.updateSereActivity,
    deleteSereActivity = _ref.deleteSereActivity,
    fetchingSereActivities = _ref.fetchingSereActivities,
    fetchedSereActivities = _ref.fetchedSereActivities,
    errorSereActivities = _ref.errorSereActivities,
    sereActivities = _ref.sereActivities,
    sereActivitiesPageInfo = _ref.sereActivitiesPageInfo,
    sereActivitiesTotalCount = _ref.sereActivitiesTotalCount,
    coreConfirm = _ref.coreConfirm,
    clearConfirm = _ref.clearConfirm,
    confirmed = _ref.confirmed,
    journalize = _ref.journalize,
    submittingMutation = _ref.submittingMutation,
    mutation = _ref.mutation;
  const _useState = React.useState(false),
    _useState2 = _slicedToArray__default["default"](_useState, 2),
    dialogOpen = _useState2[0],
    setDialogOpen = _useState2[1];
  const _useState3 = React.useState(null),
    _useState4 = _slicedToArray__default["default"](_useState3, 2),
    editedActivity = _useState4[0],
    setEditedActivity = _useState4[1];
  const activityToDeleteRef = React.useRef(null);
  const prevSubmittingMutationRef = React.useRef();
  const fetch = params => fetchSereActivities(["groupId: \"".concat(groupId, "\""), ...params]);
  const filtersToQueryParams = state => ["first: ".concat(Math.min(state.pageSize, 50))];
  React.useEffect(() => {
    var _activity$id;
    if (confirmed !== true || !activityToDeleteRef.current) {
      return undefined;
    }
    const activity = activityToDeleteRef.current;
    activityToDeleteRef.current = null;
    deleteSereActivity((_activity$id = activity.id) !== null && _activity$id !== void 0 ? _activity$id : activity.uuid, feCore.formatMessageWithValues(intl, MODULE_NAME, 'sereActivity.delete.mutationLabel', {
      title: activity.title
    }));
    return () => clearConfirm(false);
  }, [confirmed]);
  React.useEffect(() => {
    if (prevSubmittingMutationRef.current && !submittingMutation) {
      journalize(mutation);
      const isActivityMutation = [ACTION_TYPE.CREATE_SERE_ACTIVITY, ACTION_TYPE.UPDATE_SERE_ACTIVITY, ACTION_TYPE.DELETE_SERE_ACTIVITY].includes(mutation === null || mutation === void 0 ? void 0 : mutation.actionType);
      if (isActivityMutation && !(mutation !== null && mutation !== void 0 && mutation.error)) {
        setDialogOpen(false);
        setEditedActivity(null);
        fetch(filtersToQueryParams({
          pageSize: SERE_ACTIVITY_DEFAULT_PAGE_SIZE
        }));
      }
    }
  }, [submittingMutation, mutation]);
  React.useEffect(() => {
    prevSubmittingMutationRef.current = submittingMutation;
  });
  const openCreateDialog = () => {
    setEditedActivity({
      groupId,
      status: 'PLANNED'
    });
    setDialogOpen(true);
  };
  const openEditDialog = activity => {
    setEditedActivity(_objectSpread$1(_objectSpread$1({}, activity), {}, {
      groupId
    }));
    setDialogOpen(true);
  };
  const onSaveActivity = activity => {
    if (activity.id) {
      updateSereActivity(activity, feCore.formatMessageWithValues(intl, MODULE_NAME, 'sereActivity.update.mutationLabel', {
        title: activity.title
      }));
      return;
    }
    createSereActivity(activity, feCore.formatMessageWithValues(intl, MODULE_NAME, 'sereActivity.create.mutationLabel', {
      title: activity.title
    }));
  };
  const onDeleteActivity = activity => {
    activityToDeleteRef.current = activity;
    coreConfirm(feCore.formatMessage(intl, MODULE_NAME, 'sereActivity.delete.confirm.title'), feCore.formatMessage(intl, MODULE_NAME, 'sereActivity.delete.confirm.message'));
  };
  if (!rights.includes(RIGHT_SERE_ACTIVITY_SEARCH)) {
    return null;
  }
  const canCreateActivity = rights.includes(RIGHT_SERE_ACTIVITY_CREATE);
  const formatActivityStatus = status => {
    if (!status) return '—';
    const key = "sereActivity.status.".concat(status);
    const label = feCore.formatMessage(intl, MODULE_NAME, key);
    return label === key ? status : label;
  };
  const formatActivityDate = activity => {
    var _activity$activityDat;
    const raw = (_activity$activityDat = activity.activityDate) !== null && _activity$activityDat !== void 0 ? _activity$activityDat : activity.activity_date;
    return raw ? feCore.formatDateFromISO(modulesManager, intl, raw) : '—';
  };
  const headers = () => ['sereActivity.title', 'sereActivity.status', 'sereActivity.activityDate', 'sereActivity.description', ''];
  const itemFormatters = () => [activity => {
    var _activity$title;
    return (_activity$title = activity.title) !== null && _activity$title !== void 0 ? _activity$title : '—';
  }, activity => formatActivityStatus(activity.status), activity => formatActivityDate(activity), activity => {
    var _activity$description;
    return (_activity$description = activity.description) !== null && _activity$description !== void 0 ? _activity$description : '—';
  }, activity => /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, rights.includes(RIGHT_SERE_ACTIVITY_UPDATE) && /*#__PURE__*/React__default["default"].createElement(core.Tooltip, {
    title: feCore.formatMessage(intl, MODULE_NAME, 'sereActivity.edit')
  }, /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
    onClick: () => openEditDialog(activity)
  }, /*#__PURE__*/React__default["default"].createElement(EditIcon__default["default"], null))), rights.includes(RIGHT_SERE_ACTIVITY_DELETE) && /*#__PURE__*/React__default["default"].createElement(core.Tooltip, {
    title: feCore.formatMessage(intl, MODULE_NAME, 'sereActivity.delete')
  }, /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
    onClick: () => onDeleteActivity(activity)
  }, /*#__PURE__*/React__default["default"].createElement(DeleteIcon__default["default"], null))))];
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(SereActivityDialog$1, {
    open: dialogOpen,
    activity: editedActivity,
    onClose: () => setDialogOpen(false),
    onSave: onSaveActivity
  }), /*#__PURE__*/React__default["default"].createElement(feCore.Searcher, {
    module: MODULE_NAME,
    cacheFiltersKey: "sereActivitiesPageFiltersCache-".concat(groupId),
    fetch: fetch,
    items: sereActivities,
    itemsPageInfo: sereActivitiesPageInfo,
    fetchingItems: fetchingSereActivities,
    fetchedItems: fetchedSereActivities,
    errorItems: errorSereActivities,
    enableActionButtons: canCreateActivity,
    searcherActions: canCreateActivity ? [{
      label: feCore.formatMessage(intl, MODULE_NAME, 'sereActivity.add'),
      icon: /*#__PURE__*/React__default["default"].createElement(AddIcon__default["default"], null),
      onClick: openCreateDialog,
      authorized: true
    }] : [],
    tableTitle: feCore.formatMessageWithValues(intl, MODULE_NAME, 'sereGroup.activities.pageTitle', {
      totalCount: sereActivitiesTotalCount
    }),
    headers: headers,
    itemFormatters: itemFormatters,
    filtersToQueryParams: filtersToQueryParams,
    rowIdentifier: activity => activity.id,
    rowsPerPageOptions: SERE_ACTIVITY_ROWS_PER_PAGE_OPTIONS,
    defaultPageSize: SERE_ACTIVITY_DEFAULT_PAGE_SIZE,
    withSelection: "none"
  }));
}
const mapStateToProps$3 = state => {
  var _state$core$user$i_us, _state$core, _state$core2, _state$productiveIncl, _state$productiveIncl2, _state$productiveIncl3, _state$productiveIncl4, _state$productiveIncl5, _state$productiveIncl6, _state$productiveIncl7, _state$productiveIncl8, _state$productiveIncl9;
  return {
    rights: (_state$core$user$i_us = (_state$core = state.core) === null || _state$core === void 0 || (_state$core = _state$core.user) === null || _state$core === void 0 || (_state$core = _state$core.i_user) === null || _state$core === void 0 ? void 0 : _state$core.rights) !== null && _state$core$user$i_us !== void 0 ? _state$core$user$i_us : [],
    confirmed: (_state$core2 = state.core) === null || _state$core2 === void 0 ? void 0 : _state$core2.confirmed,
    fetchingSereActivities: (_state$productiveIncl = state.productiveInclusion) === null || _state$productiveIncl === void 0 ? void 0 : _state$productiveIncl.fetchingSereActivities,
    fetchedSereActivities: (_state$productiveIncl2 = state.productiveInclusion) === null || _state$productiveIncl2 === void 0 ? void 0 : _state$productiveIncl2.fetchedSereActivities,
    errorSereActivities: (_state$productiveIncl3 = state.productiveInclusion) === null || _state$productiveIncl3 === void 0 ? void 0 : _state$productiveIncl3.errorSereActivities,
    sereActivities: (_state$productiveIncl4 = state.productiveInclusion) === null || _state$productiveIncl4 === void 0 ? void 0 : _state$productiveIncl4.sereActivities,
    sereActivitiesPageInfo: (_state$productiveIncl5 = state.productiveInclusion) === null || _state$productiveIncl5 === void 0 ? void 0 : _state$productiveIncl5.sereActivitiesPageInfo,
    sereActivitiesTotalCount: (_state$productiveIncl6 = (_state$productiveIncl7 = state.productiveInclusion) === null || _state$productiveIncl7 === void 0 ? void 0 : _state$productiveIncl7.sereActivitiesTotalCount) !== null && _state$productiveIncl6 !== void 0 ? _state$productiveIncl6 : 0,
    submittingMutation: (_state$productiveIncl8 = state.productiveInclusion) === null || _state$productiveIncl8 === void 0 ? void 0 : _state$productiveIncl8.submittingMutation,
    mutation: (_state$productiveIncl9 = state.productiveInclusion) === null || _state$productiveIncl9 === void 0 ? void 0 : _state$productiveIncl9.mutation
  };
};
const mapDispatchToProps$2 = dispatch => redux.bindActionCreators({
  fetchSereActivities,
  createSereActivity,
  updateSereActivity,
  deleteSereActivity,
  coreConfirm: feCore.coreConfirm,
  clearConfirm: feCore.clearConfirm,
  journalize: feCore.journalize
}, dispatch);
var SereActivitiesPanel$1 = reactIntl.injectIntl(feCore.withModulesManager(reactRedux.connect(mapStateToProps$3, mapDispatchToProps$2)(SereActivitiesPanel)));

/**
 * Renders administrative levels from `locationHierarchy` JSON with business labels
 * (District = village/V, Sous-préfecture = ward/W, …). Never shows raw V/W/D/R.
 */
function LocationHierarchyDisplay(_ref) {
  let intl = _ref.intl,
    hierarchyProp = _ref.hierarchy,
    compact = _ref.compact;
  const hierarchy = parseLocationHierarchy(hierarchyProp);
  const variant = compact ? 'caption' : 'body2';
  const dash = '—';
  if (!hierarchy) {
    return /*#__PURE__*/React__default["default"].createElement(core.Typography, {
      variant: variant,
      color: "textSecondary",
      component: "span"
    }, feCore.formatMessage(intl, MODULE_NAME, 'locationHierarchy.notSet'));
  }
  return /*#__PURE__*/React__default["default"].createElement(core.Box, {
    component: "div"
  }, HIERARCHY_LEVELS.map(_ref2 => {
    let jsonKey = _ref2.jsonKey,
      labelKey = _ref2.labelKey;
    const node = hierarchy[jsonKey];
    const value = formatLevelValue(node);
    const display = value !== null && value !== void 0 ? value : dash;
    return /*#__PURE__*/React__default["default"].createElement(core.Typography, {
      key: jsonKey,
      variant: variant,
      display: "block",
      component: "div"
    }, /*#__PURE__*/React__default["default"].createElement("strong", null, feCore.formatMessage(intl, MODULE_NAME, labelKey)), ': ', display);
  }));
}

const styles$2 = theme => ({
  paper: theme.paper.paper,
  paperHeader: theme.paper.header,
  item: theme.paper.item
});
function displayValue$1(value) {
  if (value === null || value === undefined || value === '') return '—';
  return value;
}
function SereGroupInfoSection(_ref) {
  let intl = _ref.intl,
    classes = _ref.classes,
    sereGroup = _ref.sereGroup,
    onBack = _ref.onBack;
  return /*#__PURE__*/React__default["default"].createElement(core.Paper, {
    className: classes.paper
  }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    container: true,
    alignItems: "center",
    direction: "row",
    className: classes.paperHeader
  }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(core.IconButton, {
    onClick: onBack,
    "aria-label": "back"
  }, /*#__PURE__*/React__default["default"].createElement(ChevronLeftIcon__default["default"], null))), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(core.Typography, {
    variant: "h6"
  }, feCore.formatMessage(intl, MODULE_NAME, 'sereGroup.infoSectionTitle')))), /*#__PURE__*/React__default["default"].createElement(core.Divider, null), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    container: true,
    spacing: 2,
    className: classes.item
  }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3
  }, /*#__PURE__*/React__default["default"].createElement(core.Typography, {
    variant: "subtitle2",
    color: "textSecondary"
  }, feCore.formatMessage(intl, MODULE_NAME, 'sereGroup.code')), /*#__PURE__*/React__default["default"].createElement(core.Typography, null, displayValue$1(sereGroup.importCode))), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3
  }, /*#__PURE__*/React__default["default"].createElement(core.Typography, {
    variant: "subtitle2",
    color: "textSecondary"
  }, feCore.formatMessage(intl, MODULE_NAME, 'sereGroup.name')), /*#__PURE__*/React__default["default"].createElement(core.Typography, null, displayValue$1(sereGroup.name))), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3
  }, /*#__PURE__*/React__default["default"].createElement(core.Typography, {
    variant: "subtitle2",
    color: "textSecondary"
  }, feCore.formatMessage(intl, MODULE_NAME, 'sereGroup.locality')), /*#__PURE__*/React__default["default"].createElement(core.Typography, null, displayValue$1(sereGroup.locality))), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/React__default["default"].createElement(core.Typography, {
    variant: "subtitle2",
    color: "textSecondary",
    gutterBottom: true
  }, feCore.formatMessage(intl, MODULE_NAME, 'sereGroup.administrativeLevels')), /*#__PURE__*/React__default["default"].createElement(LocationHierarchyDisplay, {
    intl: intl,
    hierarchy: sereGroup.locationHierarchy
  }))));
}
var SereGroupInfoSection$1 = reactIntl.injectIntl(styles$5.withStyles(styles$2)(SereGroupInfoSection));

const styles$1 = theme => ({
  page: theme.page,
  section: {
    marginBottom: theme.spacing(2)
  }
});
function SereGroupPage(_ref) {
  var _sereGroup$name;
  let intl = _ref.intl,
    modulesManager = _ref.modulesManager,
    history = _ref.history,
    classes = _ref.classes,
    rights = _ref.rights,
    groupUuid = _ref.groupUuid,
    sereGroup = _ref.sereGroup,
    fetchingSereGroup = _ref.fetchingSereGroup,
    fetchedSereGroup = _ref.fetchedSereGroup,
    errorSereGroup = _ref.errorSereGroup,
    fetchSereGroup = _ref.fetchSereGroup,
    clearSereGroup = _ref.clearSereGroup;
  const _useState = React.useState(0),
    _useState2 = _slicedToArray__default["default"](_useState, 2),
    tabValue = _useState2[0],
    setTabValue = _useState2[1];
  React.useEffect(() => {
    if (groupUuid) {
      fetchSereGroup(modulesManager, ["id: \"".concat(groupUuid, "\"")]);
    }
    return () => clearSereGroup();
  }, [groupUuid]);
  if (!rights.includes(RIGHT_SERE_GROUP_SEARCH)) {
    return feCore.formatMessage(intl, MODULE_NAME, 'sereGroups.noRights');
  }
  const title = feCore.formatMessageWithValues(intl, MODULE_NAME, 'sereGroup.pageTitle', {
    name: (_sereGroup$name = sereGroup === null || sereGroup === void 0 ? void 0 : sereGroup.name) !== null && _sereGroup$name !== void 0 ? _sereGroup$name : ''
  });
  const backToList = () => feCore.historyPush(modulesManager, history, 'productiveInclusion.route.sereGroups');
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: classes.page
  }, /*#__PURE__*/React__default["default"].createElement(feCore.Helmet, {
    title: title
  }), /*#__PURE__*/React__default["default"].createElement(feCore.ProgressOrError, {
    progress: fetchingSereGroup,
    error: errorSereGroup
  }), fetchedSereGroup && sereGroup && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    container: true,
    spacing: 2,
    className: classes.section
  }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/React__default["default"].createElement(SereGroupInfoSection$1, {
    sereGroup: sereGroup,
    onBack: backToList
  }))), /*#__PURE__*/React__default["default"].createElement(core.Tabs, {
    value: tabValue,
    onChange: (_, value) => setTabValue(value)
  }, /*#__PURE__*/React__default["default"].createElement(core.Tab, {
    label: feCore.formatMessage(intl, MODULE_NAME, 'sereGroup.tab.members')
  }), /*#__PURE__*/React__default["default"].createElement(core.Tab, {
    label: feCore.formatMessage(intl, MODULE_NAME, 'sereGroup.tab.activities')
  })), tabValue === 0 && /*#__PURE__*/React__default["default"].createElement(SereMembersPanel$1, {
    groupId: feCore.decodeId(sereGroup.id)
  }), tabValue === 1 && /*#__PURE__*/React__default["default"].createElement(SereActivitiesPanel$1, {
    groupId: feCore.decodeId(sereGroup.id)
  })));
}
const mapStateToProps$2 = (state, props) => {
  var _state$core$user$i_us, _state$core, _props$match, _state$productiveIncl, _state$productiveIncl2, _state$productiveIncl3, _state$productiveIncl4;
  return {
    rights: (_state$core$user$i_us = (_state$core = state.core) === null || _state$core === void 0 || (_state$core = _state$core.user) === null || _state$core === void 0 || (_state$core = _state$core.i_user) === null || _state$core === void 0 ? void 0 : _state$core.rights) !== null && _state$core$user$i_us !== void 0 ? _state$core$user$i_us : [],
    groupUuid: (_props$match = props.match) === null || _props$match === void 0 || (_props$match = _props$match.params) === null || _props$match === void 0 ? void 0 : _props$match.group_uuid,
    sereGroup: (_state$productiveIncl = state.productiveInclusion) === null || _state$productiveIncl === void 0 ? void 0 : _state$productiveIncl.sereGroup,
    fetchingSereGroup: (_state$productiveIncl2 = state.productiveInclusion) === null || _state$productiveIncl2 === void 0 ? void 0 : _state$productiveIncl2.fetchingSereGroup,
    fetchedSereGroup: (_state$productiveIncl3 = state.productiveInclusion) === null || _state$productiveIncl3 === void 0 ? void 0 : _state$productiveIncl3.fetchedSereGroup,
    errorSereGroup: (_state$productiveIncl4 = state.productiveInclusion) === null || _state$productiveIncl4 === void 0 ? void 0 : _state$productiveIncl4.errorSereGroup
  };
};
const mapDispatchToProps$1 = dispatch => redux.bindActionCreators({
  fetchSereGroup,
  clearSereGroup
}, dispatch);
var SereGroupPage$1 = reactIntl.injectIntl(feCore.withModulesManager(feCore.withHistory(styles$5.withTheme(styles$5.withStyles(styles$1)(reactRedux.connect(mapStateToProps$2, mapDispatchToProps$1)(SereGroupPage))))));

const useStyles$1 = styles$4.makeStyles(theme => ({
  form: {
    padding: '0 0 10px 0',
    width: '100%'
  },
  item: {
    padding: theme.spacing(1)
  }
}));
function filterTextValue(filters, key) {
  var _filters$key;
  const v = filters === null || filters === void 0 || (_filters$key = filters[key]) === null || _filters$key === void 0 ? void 0 : _filters$key.value;
  return v == null ? '' : String(v);
}
function filterValue(filters, key) {
  var _filters$key$value, _filters$key2;
  return (_filters$key$value = filters === null || filters === void 0 || (_filters$key2 = filters[key]) === null || _filters$key2 === void 0 ? void 0 : _filters$key2.value) !== null && _filters$key$value !== void 0 ? _filters$key$value : null;
}
function SereMemberListFilter(_ref) {
  _ref.intl;
    let filters = _ref.filters,
    onChangeFilters = _ref.onChangeFilters;
  const classes = useStyles$1();
  const pushFilter = (id, value, filter) => {
    onChangeFilters([{
      id,
      value,
      filter
    }]);
  };
  const onChangeContains = (field, value) => {
    const trimmed = (value !== null && value !== void 0 ? value : '').trim();
    pushFilter(field, trimmed || null, trimmed ? "".concat(field, "_").concat(CONTAINS_LOOKUP, ": \"").concat(escapeGqlString(trimmed), "\"") : null);
  };
  const onChangeStatus = value => {
    pushFilter('status', value || null, value && SERE_MEMBER_STATUSES.includes(value) ? "status: ".concat(value) : null);
  };
  const onChangePresenceCount = value => {
    const trimmed = (value !== null && value !== void 0 ? value : '').trim();
    if (!trimmed) {
      pushFilter('presenceCount', null, null);
      return;
    }
    const n = Number(trimmed);
    pushFilter('presenceCount', trimmed, !Number.isNaN(n) ? "presenceCount: ".concat(n) : null);
  };
  return /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    container: true,
    className: classes.form,
    spacing: 1
  }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3,
    className: classes.item
  }, /*#__PURE__*/React__default["default"].createElement(feCore.TextInput, {
    module: MODULE_NAME,
    label: "members.filter.codeMenage",
    value: filterTextValue(filters, 'codeMenage'),
    onChange: v => onChangeContains('codeMenage', v)
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3,
    className: classes.item
  }, /*#__PURE__*/React__default["default"].createElement(feCore.TextInput, {
    module: MODULE_NAME,
    label: "members.filter.lastName",
    value: filterTextValue(filters, 'lastName'),
    onChange: v => onChangeContains('lastName', v)
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3,
    className: classes.item
  }, /*#__PURE__*/React__default["default"].createElement(feCore.TextInput, {
    module: MODULE_NAME,
    label: "members.filter.firstName",
    value: filterTextValue(filters, 'firstName'),
    onChange: v => onChangeContains('firstName', v)
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3,
    className: classes.item
  }, /*#__PURE__*/React__default["default"].createElement(feCore.TextInput, {
    module: MODULE_NAME,
    label: "members.filter.phone",
    value: filterTextValue(filters, 'phone'),
    onChange: v => onChangeContains('phone', v)
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3,
    className: classes.item
  }, /*#__PURE__*/React__default["default"].createElement(feCore.TextInput, {
    module: MODULE_NAME,
    label: "members.filter.sereName",
    value: filterTextValue(filters, 'sereName'),
    onChange: v => onChangeContains('sereName', v)
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3,
    className: classes.item
  }, /*#__PURE__*/React__default["default"].createElement(feCore.TextInput, {
    module: MODULE_NAME,
    label: "members.filter.sereImportCode",
    value: filterTextValue(filters, 'sereImportCode'),
    onChange: v => onChangeContains('sereImportCode', v)
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3,
    className: classes.item
  }, /*#__PURE__*/React__default["default"].createElement(feCore.TextInput, {
    module: MODULE_NAME,
    label: "members.filter.role",
    value: filterTextValue(filters, 'role'),
    onChange: v => onChangeContains('role', v)
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3,
    className: classes.item
  }, /*#__PURE__*/React__default["default"].createElement(feCore.TextInput, {
    module: MODULE_NAME,
    label: "members.filter.beneficiaryType",
    value: filterTextValue(filters, 'beneficiaryType'),
    onChange: v => onChangeContains('beneficiaryType', v)
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3,
    className: classes.item
  }, /*#__PURE__*/React__default["default"].createElement(feCore.TextInput, {
    module: MODULE_NAME,
    label: "members.filter.prefecture",
    value: filterTextValue(filters, 'prefecture'),
    onChange: v => onChangeContains('prefecture', v)
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3,
    className: classes.item
  }, /*#__PURE__*/React__default["default"].createElement(feCore.TextInput, {
    module: MODULE_NAME,
    label: "members.filter.subPrefecture",
    value: filterTextValue(filters, 'subPrefecture'),
    onChange: v => onChangeContains('subPrefecture', v)
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3,
    className: classes.item
  }, /*#__PURE__*/React__default["default"].createElement(feCore.TextInput, {
    module: MODULE_NAME,
    label: "members.filter.district",
    value: filterTextValue(filters, 'district'),
    onChange: v => onChangeContains('district', v)
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3,
    className: classes.item
  }, /*#__PURE__*/React__default["default"].createElement(feCore.TextInput, {
    module: MODULE_NAME,
    label: "members.filter.presenceCount",
    value: filterTextValue(filters, 'presenceCount'),
    onChange: onChangePresenceCount
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true,
    xs: 12,
    sm: 6,
    md: 3,
    className: classes.item
  }, /*#__PURE__*/React__default["default"].createElement(feCore.ConstantBasedPicker, {
    module: MODULE_NAME,
    label: "members.status",
    nullLabel: "members.status.null",
    value: filterValue(filters, 'status'),
    onChange: onChangeStatus,
    constants: SERE_MEMBER_STATUSES,
    withNull: true
  })));
}
var SereMemberListFilter$1 = reactIntl.injectIntl(SereMemberListFilter);

const useStyles = styles$4.makeStyles(theme => ({
  active: {
    backgroundColor: theme.palette.success.light,
    color: theme.palette.success.contrastText
  },
  inactive: {
    backgroundColor: theme.palette.grey[400],
    color: theme.palette.getContrastText(theme.palette.grey[400])
  },
  pending: {
    backgroundColor: theme.palette.warning.light,
    color: theme.palette.warning.contrastText
  },
  suspended: {
    backgroundColor: theme.palette.error.light,
    color: theme.palette.error.contrastText
  }
}));
function statusClass(status, classes) {
  switch (status) {
    case MEMBER_STATUS_ACTIVE:
      return classes.active;
    case MEMBER_STATUS_INACTIVE:
      return classes.inactive;
    case MEMBER_STATUS_PENDING:
      return classes.pending;
    case MEMBER_STATUS_SUSPENDED:
      return classes.suspended;
    default:
      return classes.inactive;
  }
}
function SereMemberStatusChip(_ref) {
  let status = _ref.status,
    label = _ref.label;
  const classes = useStyles();
  if (!label && !status) return '—';
  return /*#__PURE__*/React__default["default"].createElement(core.Chip, {
    size: "small",
    label: label !== null && label !== void 0 ? label : status,
    className: statusClass(status, classes)
  });
}

/** Même découpage que la liste SERE (clés JSON openIMIS). */
const MEMBER_LOCATION_JSON_KEYS = {
  region: 'region',
  prefecture: 'district',
  subPrefecture: 'ward',
  district: 'village'
};
const MEMBER_LOCATION_FLAT_KEYS = {
  prefecture: ['prefectureName', 'prefecture_name'],
  subPrefecture: ['subPrefectureName', 'sub_prefecture_name'],
  district: ['districtName', 'district_name'],
  region: ['regionName', 'region_name']
};

/**
 * Localité héritée du groupement SERE (Option A : locationHierarchy, repli champs plats).
 * Aligné liste globale Membres sans groupId.
 */
function memberLocationLevel(member, level) {
  var _member$sereGroup, _MEMBER_LOCATION_FLAT;
  const group = (_member$sereGroup = member === null || member === void 0 ? void 0 : member.sereGroup) !== null && _member$sereGroup !== void 0 ? _member$sereGroup : member === null || member === void 0 ? void 0 : member.sere_group;
  const h = parseLocationHierarchy(group === null || group === void 0 ? void 0 : group.locationHierarchy);
  if (h) {
    const jsonKey = MEMBER_LOCATION_JSON_KEYS[level];
    const v = formatLevelValue(h === null || h === void 0 ? void 0 : h[jsonKey]);
    if (v) return v;
  }
  const flatKeys = (_MEMBER_LOCATION_FLAT = MEMBER_LOCATION_FLAT_KEYS[level]) !== null && _MEMBER_LOCATION_FLAT !== void 0 ? _MEMBER_LOCATION_FLAT : [];
  for (const key of flatKeys) {
    const v = member === null || member === void 0 ? void 0 : member[key];
    if (v != null && String(v).trim() !== '') return String(v).trim();
  }
  return '—';
}

/** Identifiant route fiche SERE — préférer sereGroup.uuid puis id. */
function resolveSereGroupUuid(member) {
  var _member$sereGroup2, _ref, _ref2, _ref3, _ref4, _nested$uuid;
  const nested = (_member$sereGroup2 = member === null || member === void 0 ? void 0 : member.sereGroup) !== null && _member$sereGroup2 !== void 0 ? _member$sereGroup2 : member === null || member === void 0 ? void 0 : member.sere_group;
  const raw = (_ref = (_ref2 = (_ref3 = (_ref4 = (_nested$uuid = nested === null || nested === void 0 ? void 0 : nested.uuid) !== null && _nested$uuid !== void 0 ? _nested$uuid : nested === null || nested === void 0 ? void 0 : nested.id) !== null && _ref4 !== void 0 ? _ref4 : member === null || member === void 0 ? void 0 : member.sereGroupUuid) !== null && _ref3 !== void 0 ? _ref3 : member === null || member === void 0 ? void 0 : member.sere_group_uuid) !== null && _ref2 !== void 0 ? _ref2 : member === null || member === void 0 ? void 0 : member.groupUuid) !== null && _ref !== void 0 ? _ref : member === null || member === void 0 ? void 0 : member.group_uuid;
  if (!raw) return null;
  try {
    return feCore.decodeId(raw);
  } catch (_) {
    return String(raw);
  }
}
function displayMemberStatus(member, formatStatusLabel) {
  var _member$statusDisplay;
  const display = (_member$statusDisplay = member === null || member === void 0 ? void 0 : member.statusDisplay) !== null && _member$statusDisplay !== void 0 ? _member$statusDisplay : member === null || member === void 0 ? void 0 : member.status_display;
  if (display) return display;
  const status = member === null || member === void 0 ? void 0 : member.status;
  if (!status) return '—';
  return formatStatusLabel ? formatStatusLabel(status) : status;
}
function presenceCountCell(member) {
  var _member$presenceCount;
  const n = (_member$presenceCount = member === null || member === void 0 ? void 0 : member.presenceCount) !== null && _member$presenceCount !== void 0 ? _member$presenceCount : member === null || member === void 0 ? void 0 : member.presence_count;
  if (n === null || n === undefined || n === '') return 0;
  const num = Number(n);
  return Number.isNaN(num) ? 0 : num;
}

function displayValue(value) {
  if (value === null || value === undefined || value === '') return '—';
  return value;
}
function SereMemberListSearcher(_ref) {
  let intl = _ref.intl,
    modulesManager = _ref.modulesManager,
    history = _ref.history,
    rights = _ref.rights,
    fetchSereMembersGlobalList = _ref.fetchSereMembersGlobalList,
    fetchingSereMembersList = _ref.fetchingSereMembersList,
    fetchedSereMembersList = _ref.fetchedSereMembersList,
    errorSereMembersList = _ref.errorSereMembersList,
    sereMembersList = _ref.sereMembersList,
    sereMembersListPageInfo = _ref.sereMembersListPageInfo,
    sereMembersListTotalCount = _ref.sereMembersListTotalCount;
  const fetch = params => fetchSereMembersGlobalList(params);
  const filtersToQueryParams = state => {
    const params = Object.keys(state.filters).filter(key => !!state.filters[key].filter).map(key => state.filters[key].filter);
    params.push('isDeleted: false');
    params.push("first: ".concat(state.pageSize));
    if (state.afterCursor) params.push("after: \"".concat(state.afterCursor, "\""));
    if (state.beforeCursor) params.push("before: \"".concat(state.beforeCursor, "\""));
    if (state.orderBy) {
      params.push("orderBy: [\"".concat(state.orderBy, "\"]"));
    } else {
      params.push('orderBy: ["lastName", "firstName"]');
    }
    return params;
  };
  const formatStatusLabel = status => feCore.formatMessage(intl, MODULE_NAME, "members.status.".concat(status));
  const sereNameCell = member => {
    var _member$sereName, _member$sereImportCod, _ref2;
    const name = (_member$sereName = member.sereName) !== null && _member$sereName !== void 0 ? _member$sereName : member.sere_name;
    const importCode = (_member$sereImportCod = member.sereImportCode) !== null && _member$sereImportCod !== void 0 ? _member$sereImportCod : member.sere_import_code;
    const groupUuid = resolveSereGroupUuid(member);
    if (!name && !importCode) return '—';
    const label = (_ref2 = name !== null && name !== void 0 ? name : importCode) !== null && _ref2 !== void 0 ? _ref2 : '—';
    const tooltip = importCode && name && importCode !== name ? "".concat(name, " (").concat(importCode, ")") : importCode || name;
    if (groupUuid && rights.includes(RIGHT_SERE_GROUP_SEARCH)) {
      return /*#__PURE__*/React__default["default"].createElement(core.Tooltip, {
        title: tooltip
      }, /*#__PURE__*/React__default["default"].createElement(core.Link, {
        component: "button",
        variant: "body2",
        onClick: () => feCore.historyPush(modulesManager, history, 'productiveInclusion.route.sereGroup', [groupUuid])
      }, label));
    }
    return /*#__PURE__*/React__default["default"].createElement(core.Tooltip, {
      title: tooltip
    }, /*#__PURE__*/React__default["default"].createElement(core.Typography, {
      variant: "body2",
      component: "span"
    }, label));
  };
  const headers = () => ['members.codeMenage', 'members.lastName', 'members.firstName', 'members.phone', 'members.sere', 'members.role', 'members.beneficiaryType', 'members.prefecture', 'members.subPrefecture', 'members.district', 'members.presenceCount', 'members.status'];
  const itemFormatters = () => [member => {
    var _member$codeMenage;
    return displayValue((_member$codeMenage = member.codeMenage) !== null && _member$codeMenage !== void 0 ? _member$codeMenage : member.code_menage);
  }, member => displayValue(member.lastName), member => displayValue(member.firstName), member => displayValue(member.phone), member => sereNameCell(member), member => displayValue(member.role), member => {
    var _member$beneficiaryTy;
    return displayValue((_member$beneficiaryTy = member.beneficiaryType) !== null && _member$beneficiaryTy !== void 0 ? _member$beneficiaryTy : member.beneficiary_type);
  }, member => memberLocationLevel(member, 'prefecture'), member => memberLocationLevel(member, 'subPrefecture'), member => memberLocationLevel(member, 'district'), member => presenceCountCell(member), member => /*#__PURE__*/React__default["default"].createElement(SereMemberStatusChip, {
    status: member.status,
    label: displayMemberStatus(member, formatStatusLabel)
  })];
  if (!rights.includes(RIGHT_SERE_MEMBER_SEARCH)) {
    return feCore.formatMessage(intl, MODULE_NAME, 'members.noRights');
  }
  return /*#__PURE__*/React__default["default"].createElement(feCore.Searcher, {
    module: MODULE_NAME,
    cacheFiltersKey: "sereMembersListPageFiltersCache",
    fetch: fetch,
    items: sereMembersList,
    itemsPageInfo: sereMembersListPageInfo,
    fetchingItems: fetchingSereMembersList,
    fetchedItems: fetchedSereMembersList,
    errorItems: errorSereMembersList,
    tableTitle: feCore.formatMessageWithValues(intl, MODULE_NAME, 'members.pageTitle', {
      totalCount: sereMembersListTotalCount
    }),
    headers: headers,
    itemFormatters: itemFormatters,
    filtersToQueryParams: filtersToQueryParams,
    FilterPane: SereMemberListFilter$1,
    rowIdentifier: member => {
      var _member$uuid;
      return (_member$uuid = member.uuid) !== null && _member$uuid !== void 0 ? _member$uuid : member.id;
    },
    rowsPerPageOptions: ROWS_PER_PAGE_OPTIONS,
    defaultPageSize: SERE_MEMBERS_DEFAULT_PAGE_SIZE,
    withSelection: "none"
  });
}
const mapStateToProps$1 = state => {
  var _state$core$user$i_us, _state$core, _state$productiveIncl, _state$productiveIncl2, _state$productiveIncl3, _state$productiveIncl4, _state$productiveIncl5, _state$productiveIncl6, _state$productiveIncl7;
  return {
    rights: (_state$core$user$i_us = (_state$core = state.core) === null || _state$core === void 0 || (_state$core = _state$core.user) === null || _state$core === void 0 || (_state$core = _state$core.i_user) === null || _state$core === void 0 ? void 0 : _state$core.rights) !== null && _state$core$user$i_us !== void 0 ? _state$core$user$i_us : [],
    fetchingSereMembersList: (_state$productiveIncl = state.productiveInclusion) === null || _state$productiveIncl === void 0 ? void 0 : _state$productiveIncl.fetchingSereMembersList,
    fetchedSereMembersList: (_state$productiveIncl2 = state.productiveInclusion) === null || _state$productiveIncl2 === void 0 ? void 0 : _state$productiveIncl2.fetchedSereMembersList,
    errorSereMembersList: (_state$productiveIncl3 = state.productiveInclusion) === null || _state$productiveIncl3 === void 0 ? void 0 : _state$productiveIncl3.errorSereMembersList,
    sereMembersList: (_state$productiveIncl4 = state.productiveInclusion) === null || _state$productiveIncl4 === void 0 ? void 0 : _state$productiveIncl4.sereMembersList,
    sereMembersListPageInfo: (_state$productiveIncl5 = state.productiveInclusion) === null || _state$productiveIncl5 === void 0 ? void 0 : _state$productiveIncl5.sereMembersListPageInfo,
    sereMembersListTotalCount: (_state$productiveIncl6 = (_state$productiveIncl7 = state.productiveInclusion) === null || _state$productiveIncl7 === void 0 ? void 0 : _state$productiveIncl7.sereMembersListTotalCount) !== null && _state$productiveIncl6 !== void 0 ? _state$productiveIncl6 : 0
  };
};
const mapDispatchToProps = dispatch => redux.bindActionCreators({
  fetchSereMembersGlobalList
}, dispatch);
var SereMemberListSearcher$1 = reactIntl.injectIntl(feCore.withModulesManager(feCore.withHistory(reactRedux.connect(mapStateToProps$1, mapDispatchToProps)(SereMemberListSearcher))));

const styles = theme => ({
  page: theme.page
});
function SereMembersPage(_ref) {
  let classes = _ref.classes;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: classes.page
  }, /*#__PURE__*/React__default["default"].createElement(SereMemberListSearcher$1, null));
}
var SereMembersPage$1 = styles$5.withTheme(styles$5.withStyles(styles)(SereMembersPage));

function ProductiveInclusionMainMenu(props) {
  const intl = props.intl,
    rights = props.rights;
  const entries = [];
  if (rights.includes(RIGHT_SERE_GROUP_SEARCH)) {
    entries.push({
      text: feCore.formatMessage(intl, MODULE_NAME, 'menu.sereGroups'),
      icon: /*#__PURE__*/React__default["default"].createElement(icons.GroupWork, null),
      route: "/".concat(ROUTE_SERE_GROUPS),
      id: 'productiveInclusion.sereGroups'
    });
  }
  if (rights.includes(RIGHT_SERE_MEMBER_SEARCH)) {
    entries.push({
      text: feCore.formatMessage(intl, MODULE_NAME, 'menu.members'),
      icon: /*#__PURE__*/React__default["default"].createElement(icons.People, null),
      route: "/".concat(ROUTE_SERE_MEMBERS),
      id: 'productiveInclusion.members'
    });
  }
  if (!entries.length) {
    return null;
  }
  return /*#__PURE__*/React__default["default"].createElement(feCore.MainMenuContribution, _extends__default["default"]({}, props, {
    header: feCore.formatMessage(intl, MODULE_NAME, 'mainMenu'),
    icon: /*#__PURE__*/React__default["default"].createElement(icons.GroupWork, null),
    entries: entries,
    menuId: "ProductiveInclusionMainMenu"
  }));
}
const mapStateToProps = state => {
  var _state$core$user$i_us, _state$core;
  return {
    rights: (_state$core$user$i_us = (_state$core = state.core) === null || _state$core === void 0 || (_state$core = _state$core.user) === null || _state$core === void 0 || (_state$core = _state$core.i_user) === null || _state$core === void 0 ? void 0 : _state$core.rights) !== null && _state$core$user$i_us !== void 0 ? _state$core$user$i_us : []
  };
};
var ProductiveInclusionMainMenu$1 = reactIntl.injectIntl(feCore.withModulesManager(reactRedux.connect(mapStateToProps)(ProductiveInclusionMainMenu)));

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const DEFAULT_CONFIG = {
  translations: [{
    key: 'en',
    messages: messagesEn
  }, {
    key: 'fr',
    messages: messagesFr
  }],
  reducers: [{
    key: 'productiveInclusion',
    reducer
  }],
  'core.Router': [{
    path: ROUTE_SERE_GROUPS,
    component: SereGroupsPage$1
  }, {
    path: "".concat(ROUTE_SERE_GROUP, "/:group_uuid"),
    component: SereGroupPage$1
  }, {
    path: ROUTE_SERE_MEMBERS,
    component: SereMembersPage$1
  }],
  'core.MainMenu': [{
    name: 'ProductiveInclusionMainMenu',
    component: ProductiveInclusionMainMenu$1
  }],
  refs: [{
    key: 'productiveInclusion.route.sereGroups',
    ref: ROUTE_SERE_GROUPS
  }, {
    key: 'productiveInclusion.route.sereGroup',
    ref: ROUTE_SERE_GROUP
  }, {
    key: 'productiveInclusion.route.sereMembers',
    ref: ROUTE_SERE_MEMBERS
  }]
};
const ProductiveInclusionModule = function () {
  let cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _objectSpread(_objectSpread({}, DEFAULT_CONFIG), cfg);
};

exports.ProductiveInclusionModule = ProductiveInclusionModule;
//# sourceMappingURL=index.js.map
