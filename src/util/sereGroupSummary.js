import { parseLocationHierarchy, formatLevelValue } from './locationHierarchy';

export function normalizePrefectureRows(raw) {
  if (!Array.isArray(raw)) return [];
  return raw.map((row) => {
    const label = row?.prefectureName
      ?? row?.prefecture_name
      ?? row?.name
      ?? row?.label
      ?? row?.prefecture
      ?? '—';
    const count = Number(row?.count ?? row?.groupsCount ?? row?.groups_count ?? 0);
    return { label: String(label), count: Number.isNaN(count) ? 0 : count };
  }).filter((r) => r.label && r.label !== '—');
}

/** Agrégation locale de secours (page courante uniquement — ne pas utiliser pour les totaux globaux). */
export function aggregatePrefectureFromGroups(groups) {
  const map = new Map();
  (groups || []).forEach((group) => {
    const h = parseLocationHierarchy(group?.locationHierarchy);
    const label = formatLevelValue(h?.district) ?? '—';
    if (label === '—') return;
    map.set(label, (map.get(label) || 0) + 1);
  });
  return [...map.entries()]
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
}

export function sumMembersFromGroups(groups) {
  return (groups || []).reduce((acc, g) => {
    const n = Number(g?.membersCount ?? g?.members_count);
    return acc + (Number.isNaN(n) ? 0 : n);
  }, 0);
}
