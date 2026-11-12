# PostgreSQL comme base de données

- **Décideurs** : Timothée BOURDEAU, Marc YE

## Contexte

Le modèle de données est fortement relationnel : jeux, statistiques, tournois, étapes, matchs, manches, équipes, joueurs, inscriptions, pronostics, questions, réponses, classements, sources. Certaines opérations doivent être **atomiques** : un recalcul en cascade (correction d'un score, puis arbre, qualifiés et points de tous les spectateurs) ne doit jamais laisser un état à moitié mis à jour. Le sujet demande aussi un journal d'audit, un historique des recalculs, un cache des données start.gg qui reste lisible si l'API est indisponible, et des tests de charge avec plusieurs centaines de spectateurs sur un même match.

## Options envisagées

1. **PostgreSQL** : base relationnelle avec transactions, contraintes d'intégrité, types riches (dont JSONB), index avancés.
2. **MongoDB** : modèle documentaire flexible, mais nos données sont très reliées entre elles et les transactions multi-documents sont moins naturelles.
3. **SQLite** : très simple à installer, mais peu adaptée à des écritures concurrentes importantes et à un déploiement en ligne partagé.
4. **MySQL / MariaDB** : relationnelles aussi, mais avec un typage et des fonctionnalités moins riches que PostgreSQL pour notre cas.

## Décision

Nous retenons **PostgreSQL** comme unique base de données du projet, pour les données métier, l'historique, le journal d'audit et le cache des données importées.

## Conséquences

**Positives**
- Les transactions et les contraintes (clés étrangères, unicité, valeurs obligatoires) protègent l'intégrité du recalcul en cascade et des pronostics.
- JSONB permet de stocker sans douleur des payloads variables (données brutes d'un connecteur, détails d'un événement d'audit) à côté du modèle relationnel.
- Une seule technologie à installer et à maintenir : le cache start.gg vit aussi en base, ce qui évite d'ajouter Redis pour l'instant.
- Bien supporté par Prisma, par les services d'hébergement gratuits et par Docker pour l'environnement local et la CI.

**Négatives**
- Plus lourd à installer que SQLite : nous fournirons un `docker-compose` pour l'installation locale.
- Les offres d'hébergement gratuites sont limitées (quotas, mise en veille) et évoluent : à vérifier au moment du choix de l'hébergeur.
- Le schéma est rigide : toute évolution passe par une migration.

**Règles qui en découlent**
- L'heure du verrouillage des pronostics est contrôlée sur l'horloge du serveur ou de la base, dans une transaction.
- Un recalcul en cascade s'exécute dans une seule transaction et écrit ce qui a changé dans l'historique.
- Les tests d'intégration tournent sur un vrai PostgreSQL (service de la CI ou conteneur), pas sur une base simulée.
