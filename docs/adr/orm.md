# Prisma comme ORM

- **Décideurs** : Timothée BOURDEAU, Marc YE

## Contexte

Nous devons accéder à PostgreSQL depuis NestJS avec un modèle comportant de nombreuses relations, des migrations reproductibles (installation par un développeur extérieur, déploiement continu) et un typage strict de bout en bout. Le dictionnaire de données est un livrable : un schéma lisible nous aide. Nous avons aussi besoin de transactions, notamment pour le recalcul en cascade.

## Options envisagées

1. **Prisma** : schéma déclaratif (`schema.prisma`), client entièrement typé généré à partir du schéma, migrations intégrées, transactions interactives.
2. **Drizzle** : schéma en TypeScript, proche du SQL, léger, mais écosystème plus jeune et moins de ressources.
3. **TypeORM** : intégration très documentée avec Nest, mais typage plus fragile et API plus verbeuse.
4. **SQL brut / query builder** : contrôle total, mais beaucoup de code répétitif et perte du typage automatique.

## Décision

Nous retenons **Prisma** avec PostgreSQL. Le fichier `schema.prisma` est la source de vérité du modèle de données, et toute évolution passe par une **migration versionnée** dans le dépôt.

## Conséquences

**Positives**
- Le client généré donne un typage précis des requêtes et des résultats, ce qui réduit les erreurs sur un modèle complexe.
- Le schéma sert de base au dictionnaire de données et au schéma des entités de la documentation.
- Les migrations (`prisma migrate`) rendent l'installation et le déploiement reproductibles.
- Les transactions interactives (`$transaction`) conviennent au recalcul en cascade.
- Documentation abondante et prise en main rapide.

**Négatives**
- Une étape de génération du client est nécessaire (en local, en CI, au build) : à intégrer dans le pipeline et le README.
- Certaines requêtes complexes (classements agrégés, calculs lourds) pourront exiger du SQL brut (`$queryRaw`), à garder isolé et testé.
- Dépendance à l'outillage Prisma pour les migrations.
- Prisma n'est pas intégré à Nest par défaut : nous créons un `PrismaService` injectable partagé par les modules.

**Règles qui en découlent**
- Pas de modification manuelle de la base hors migration.
- Les fichiers de migration sont relus en pull request.
- Les identifiants, les relations (équipe, inscription, tournoi) et l'historisation sont figés tôt dans le schéma, car ils sont coûteux à changer ensuite.
- Le moteur de tournoi n'importe jamais Prisma : il manipule des types purs, et ce sont les services qui font le lien avec la base.
