# Import SERE — localisation des groupements (aligné backend)

## Template Excel (`GET …/productive_inclusion/import_template/`)

Feuille **groupements** — colonnes :

| Colonne | Rôle |
|---------|------|
| `id` | Code import du SERE |
| `nom_groupement` | Nom |
| `region` | Nom Location type **R** (optionnel) |
| `prefecture` | Nom Location type **D** (optionnel) |
| `sous_prefecture` | Nom Location type **W** (optionnel) |
| `district` | Nom Location type **V** (village — requis si hiérarchie utilisée) |
| `localite` | Alternative : id / uuid / code du village (type **V**) |

## Résolution backend (`location_utils` + `SereImportService`)

1. **Priorité** : si au moins une colonne `region` / `prefecture` / `sous_prefecture` / `district` est renseignée → résolution nominative (`resolve_village_by_admin_names`). `district` (village) obligatoire dans ce mode.
2. **Sinon** : colonne `localite` / `id_village` → `resolve_village_location` (id, uuid ou code).

Mapping UI liste SERE / membres (inchangé) :

| Libellé UI | Clé `locationHierarchy` | Type Location |
|------------|-------------------------|---------------|
| Région | `region` | R |
| Préfecture | `district` | D |
| Sous-préfecture | `ward` | W |
| District | `village` | V |

## Frontend

- Bloc Registre : `openimis-fe-tools_js` → `SereImportBlock.js` (aide localisation).
- Droit import REST : **124001** (`gql_sere_group_search_perms`).
