# Angular pour le front-end

- **Décideurs** : Timothée BOURDEAU, Marc YE

## Contexte

Le front-end doit afficher des arbres de tournoi, des classements et un dashboard mis à jour en direct, et permettre de pronostiquer depuis un téléphone. L'accessibilité (WCAG 2.2 AA) est une exigence obligatoire : HTML sémantique, mises à jour en direct annoncées aux lecteurs d'écran sans surcharge, navigation clavier, formulaires avec erreurs liées aux champs, vue alternative des arbres. Les formulaires sont nombreux (création de tournoi, étapes, barèmes, Pick'em, inscriptions). Le back-end étant en NestJS, nous cherchons une cohérence de conventions entre les deux côtés.

## Options envisagées

1. **Angular** : framework complet (routeur, formulaires, client HTTP, injection de dépendances, tests) avec une structure imposée.
2. **React + Vite** : plus léger et très répandu, mais routeur, gestion d'état, formulaires et accessibilité reposent sur des bibliothèques à choisir et assembler.
3. **Next.js ou SvelteKit** : le rendu côté serveur apporte peu ici, puisque l'API est déjà séparée.

## Décision

Nous retenons **Angular**, avec composants autonomes (standalone) et signals, RxJS pour les flux d'événements en direct, et **Angular CDK (module a11y)** pour l'accessibilité.

## Conséquences

**Positives**
- Structure imposée : moins de débats d'architecture à deux, code homogène.
- Conventions proches de NestJS (modules, services injectables, décorateurs), ce qui réduit l'effort de passage entre front et back.
- Angular CDK fournit des outils utiles pour nos exigences : `LiveAnnouncer` (annonces des mises à jour en direct), gestion du focus, navigation clavier.
- Les Reactive Forms et leur validation intégrée facilitent des messages d'erreur explicites, liés au champ concerné.
- RxJS se prête bien à la consommation d'un flux d'événements serveur.

**Négatives**
- Courbe d'apprentissage plus raide (RxJS, injection de dépendances, concepts propres à Angular).
- Plus de code répétitif qu'avec une solution plus légère.
- Écosystème de composants et d'exemples plus restreint que celui de React.
- Le partage de schémas de validation avec le back demande un peu de configuration dans le monorepo.

**Règles qui en découlent**
- HTML sémantique d'abord, ARIA seulement quand c'est nécessaire.
- L'arbre de tournoi est rendu en SVG **et** accompagné d'une vue alternative équivalente (liste ou tableau des matchs par tour).
- L'information n'est jamais portée par la seule couleur.
- Un audit automatique d'accessibilité (axe ou Lighthouse) est intégré à la CI.
