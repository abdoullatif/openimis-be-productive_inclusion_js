/** Retire pagination / tri / isDeleted (non exposé sur sereGroupSummary). */
export function stripSereGroupPaginationParams(params) {
  if (!Array.isArray(params)) return [];
  return params.filter(
    (p) => !/^first:/.test(p)
      && !/^after:/.test(p)
      && !/^before:/.test(p)
      && !/^orderBy:/.test(p)
      && !/^isDeleted:/.test(p),
  );
}

export function escapeGqlString(value) {
  if (value == null) return '';
  return String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}
