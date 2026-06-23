# Droits Inclusion productive (SERE) — plage 124001–124009

## Important

**Ne pas utiliser 122001–122009** dans ce module : ces IDs sont réservés au **core** (gestion des rôles openIMIS).

| Ancien (retiré) | Core | Nouveau SERE |
|-----------------|------|--------------|
| 122001 | Query role | **124001** Recherche SERE |
| 122002 | Create role | **124002** Création SERE |
| 122003 | Update role | **124003** Mise à jour SERE |
| 122004 | Delete role | **124004** Suppression SERE |
| 122005 | Duplicate role | **124005** Recherche membres |
| 122006 | Replace role | **124006** Recherche activités |
| 122007 | — | **124007** Création activité |
| 122008 | — | **124008** Mise à jour activité |
| 122009 | — | **124009** Suppression activité |

Constantes : `src/constants.js` → `RIGHT_SERE_*` et `PRODUCTIVE_INCLUSION_RIGHTS`.

## Écrans FE

| Écran | Droit |
|-------|-------|
| Menu SERE / liste / récap / import | 124001 |
| Menu Membres (liste globale) | 124005 |
| Fiche SERE → activités (liste) | 124006 |
| Bouton Ajouter activité | 124007 |
| Modifier activité | 124008 |
| Supprimer activité | 124009 |

## Administration → Rôles

Après migration backend, pour chaque rôle métier SERE :

1. Cocher **124001–124009** (Inclusion productive)
2. Décocher **122001–122006** s’ils avaient été cochés par erreur (accès écran Rôles core)
