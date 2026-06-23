import messagesEn from './translations/en.json';
import messagesFr from './translations/fr.json';
import reducer from './reducer';
import SereGroupsPage from './pages/SereGroupsPage';
import SereGroupPage from './pages/SereGroupPage';
import SereMembersPage from './pages/SereMembersPage';
import ProductiveInclusionMainMenu from './menus/ProductiveInclusionMainMenu';
import {
  ROUTE_SERE_GROUP,
  ROUTE_SERE_GROUPS,
  ROUTE_SERE_MEMBERS,
  RIGHT_SERE_GROUP_SEARCH,
  RIGHT_SERE_MEMBER_SEARCH,
  RIGHT_SERE_ACTIVITY_SEARCH,
  RIGHT_SERE_ACTIVITY_CREATE,
  RIGHT_SERE_ACTIVITY_UPDATE,
  RIGHT_SERE_ACTIVITY_DELETE,
  RIGHT_SERE_GROUP_CREATE,
  RIGHT_SERE_GROUP_UPDATE,
  RIGHT_SERE_GROUP_DELETE,
} from './constants';

/** Libellés écran Administration → Rôles (IDs 124001–124009, backend migration 0008). */
const PRODUCTIVE_INCLUSION_MODULE_RIGHTS = [
  { id: RIGHT_SERE_GROUP_SEARCH, name: 'productiveInclusion.right.sereGroupSearch' },
  { id: RIGHT_SERE_GROUP_CREATE, name: 'productiveInclusion.right.sereGroupCreate' },
  { id: RIGHT_SERE_GROUP_UPDATE, name: 'productiveInclusion.right.sereGroupUpdate' },
  { id: RIGHT_SERE_GROUP_DELETE, name: 'productiveInclusion.right.sereGroupDelete' },
  { id: RIGHT_SERE_MEMBER_SEARCH, name: 'productiveInclusion.right.sereMemberSearch' },
  { id: RIGHT_SERE_ACTIVITY_SEARCH, name: 'productiveInclusion.right.sereActivitySearch' },
  { id: RIGHT_SERE_ACTIVITY_CREATE, name: 'productiveInclusion.right.sereActivityCreate' },
  { id: RIGHT_SERE_ACTIVITY_UPDATE, name: 'productiveInclusion.right.sereActivityUpdate' },
  { id: RIGHT_SERE_ACTIVITY_DELETE, name: 'productiveInclusion.right.sereActivityDelete' },
];

const DEFAULT_CONFIG = {
  translations: [
    { key: 'en', messages: messagesEn },
    { key: 'fr', messages: messagesFr },
  ],
  reducers: [{ key: 'productiveInclusion', reducer }],
  'core.Router': [
    { path: ROUTE_SERE_GROUPS, component: SereGroupsPage },
    { path: `${ROUTE_SERE_GROUP}/:group_uuid`, component: SereGroupPage },
    { path: ROUTE_SERE_MEMBERS, component: SereMembersPage },
  ],
  'core.MainMenu': [{ name: 'ProductiveInclusionMainMenu', component: ProductiveInclusionMainMenu }],
  refs: [
    { key: 'productiveInclusion.route.sereGroups', ref: ROUTE_SERE_GROUPS },
    { key: 'productiveInclusion.route.sereGroup', ref: ROUTE_SERE_GROUP },
    { key: 'productiveInclusion.route.sereMembers', ref: ROUTE_SERE_MEMBERS },
    { key: 'productiveInclusion.rights', ref: PRODUCTIVE_INCLUSION_MODULE_RIGHTS },
  ],
};

export const ProductiveInclusionModule = (cfg = {}) => ({ ...DEFAULT_CONFIG, ...cfg });
