/** Retire les paramètres de pagination / tri pour réutiliser les filtres métier côté récap. */
export function stripSereGroupPaginationParams(params) {
  if (!Array.isArray(params)) return [];
  return params.filter(
    (p) => !/^first:/.test(p)
      && !/^after:/.test(p)
      && !/^before:/.test(p)
      && !/^orderBy:/.test(p),
  );
}

export function escapeGqlString(value) {
  if (value == null) return '';
  return String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}
