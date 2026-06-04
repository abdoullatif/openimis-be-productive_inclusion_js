/**
 * GraphQL `locationHierarchy` JSON keys (openIMIS technical types V,W,D,R mapped in UI labels only).
 * Display order: broad → specific (region → … → village-as-District).
 */
export const HIERARCHY_LEVELS = [
  { jsonKey: 'region', labelKey: 'locationHierarchy.region' },
  { jsonKey: 'district', labelKey: 'locationHierarchy.prefecture' },
  { jsonKey: 'ward', labelKey: 'locationHierarchy.subPrefecture' },
  { jsonKey: 'village', labelKey: 'locationHierarchy.district' },
];

export function parseLocationHierarchy(raw) {
  if (raw == null || raw === '') return null;
  if (typeof raw === 'object' && !Array.isArray(raw)) return raw;
  if (typeof raw === 'string') {
    try {
      const parsed = JSON.parse(raw);
      return typeof parsed === 'object' && parsed ? parsed : null;
    } catch {
      return null;
    }
  }
  return null;
}

export function formatLevelValue(node) {
  if (!node || typeof node !== 'object') return null;
  const name = node.name;
  const code = node.code;
  if (name != null && String(name).trim() !== '') return String(name).trim();
  if (code != null && String(code).trim() !== '') return String(code).trim();
  return null;
}
