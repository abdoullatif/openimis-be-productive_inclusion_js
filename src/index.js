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
} from './constants';

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
  ],
};

export const ProductiveInclusionModule = (cfg = {}) => ({ ...DEFAULT_CONFIG, ...cfg });
