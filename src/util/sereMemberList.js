import { decodeId } from '@openimis/fe-core';
import { parseLocationHierarchy, formatLevelValue } from './locationHierarchy';

/** Même découpage que la liste SERE (clés JSON openIMIS). */
const MEMBER_LOCATION_JSON_KEYS = {
  region: 'region',
  prefecture: 'district',
  subPrefecture: 'ward',
  district: 'village',
};

const MEMBER_LOCATION_FLAT_KEYS = {
  prefecture: ['prefectureName', 'prefecture_name'],
  subPrefecture: ['subPrefectureName', 'sub_prefecture_name'],
  district: ['districtName', 'district_name'],
  region: ['regionName', 'region_name'],
};

/**
 * Localité héritée du groupement SERE (Option A : locationHierarchy, repli champs plats).
 * Aligné liste globale Membres sans groupId.
 */
export function memberLocationLevel(member, level) {
  const group = member?.sereGroup ?? member?.sere_group;
  const h = parseLocationHierarchy(group?.locationHierarchy);
  if (h) {
    const jsonKey = MEMBER_LOCATION_JSON_KEYS[level];
    const v = formatLevelValue(h?.[jsonKey]);
    if (v) return v;
  }

  const flatKeys = MEMBER_LOCATION_FLAT_KEYS[level] ?? [];
  for (const key of flatKeys) {
    const v = member?.[key];
    if (v != null && String(v).trim() !== '') return String(v).trim();
  }

  return '—';
}

/** Identifiant route fiche SERE — préférer sereGroup.uuid puis id. */
export function resolveSereGroupUuid(member) {
  const nested = member?.sereGroup ?? member?.sere_group;
  const raw = nested?.uuid
    ?? nested?.id
    ?? member?.sereGroupUuid
    ?? member?.sere_group_uuid
    ?? member?.groupUuid
    ?? member?.group_uuid;
  if (!raw) return null;
  try {
    return decodeId(raw);
  } catch (_) {
    return String(raw);
  }
}

export function displayMemberStatus(member, formatStatusLabel) {
  const display = member?.statusDisplay ?? member?.status_display;
  if (display) return display;
  const status = member?.status;
  if (!status) return '—';
  return formatStatusLabel ? formatStatusLabel(status) : status;
}

export function presenceCountCell(member) {
  const n = member?.presenceCount ?? member?.presence_count;
  if (n === null || n === undefined || n === '') return 0;
  const num = Number(n);
  return Number.isNaN(num) ? 0 : num;
}
