# Backend — purge des données SERE (`POST /productive_inclusion/reset/`)

## API

- **URL** : `{baseApiUrl}/productive_inclusion/reset/`
- **Méthode** : `POST` (sans body)
- **Droit** : **124004** (`gql_sere_group_delete_perms`)

## Effet

Soft-delete (`is_deleted=True`) de tous les enregistrements actifs :

- `SereActivity`
- `SereMemberPresence`
- `SereMember`
- `SereGroup`

## Réponse succès (`200`)

```json
{
  "success": true,
  "groups_deleted": 12,
  "members_deleted": 80,
  "activities_deleted": 5,
  "presences_deleted": 0
}
```

## Frontend

Bouton **Réinitialiser** dans `fe-tools` → `SereImportBlock.js` (Registre).
