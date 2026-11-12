# NestJS pour le back-end

- **Décideurs** : Timothée BOURDEAU, Marc YE

## Contexte

Le back-end doit exposer une API REST documentée (OpenAPI), gérer l'authentification et les rôles (administrateur, joueur, spectateur), diffuser des mises à jour en direct, appeler l'API start.gg avec cache et limitation de débit, et exécuter des tâches planifiées (clôture des pronostics, rafraîchissement du cache). Le sujet impose aussi des permissions vérifiées côté serveur, un journal d'audit et des tests. Nous sommes deux développeurs, avec une durée limitée, et nous voulons une structure qui évite les débats d'organisation du code.

## Options envisagées

1. **NestJS (TypeScript)** : framework structuré en modules, avec injection de dépendances, guards, interceptors, pipes, et modules officiels (Swagger, Schedule, Throttler).
2. **Express ou Fastify seuls (TypeScript)** : très légers et flexibles, mais l'architecture, l'injection de dépendances et la validation sont à assembler soi-même.
3. **FastAPI (Python)** : productif, bonne documentation d'API automatique, mais nous ferions cohabiter deux langages avec le front.

## Décision

Nous retenons **NestJS** en TypeScript, organisé en **monolithe modulaire** (un module par domaine : tournois, pronostics, Pick'em, connecteurs, authentification, etc.).

## Conséquences

**Positives**
- Les guards, interceptors et pipes correspondent directement à nos besoins (permissions par rôle, journal d'audit, validation des entrées).
- `@nestjs/swagger`, `@nestjs/schedule` et `@nestjs/throttler` couvrent la documentation d'API, les tâches planifiées et une partie des protections OWASP.
- L'injection de dépendances facilite les tests et l'architecture en connecteurs (interface `TournamentConnector`, implémentation start.gg remplaçable, mocks dans les tests).
- Le support natif des événements serveur (SSE) suffit pour le temps réel (décision à formaliser dans un ADR dédié).
- TypeScript des deux côtés permet de partager types et schémas avec le front.

**Négatives**
- Courbe d'apprentissage et verbosité (décorateurs, modules, providers) plus importantes qu'avec Express seul.
- Plus de code « d'enveloppe » à écrire pour de petites routes.

**Règles qui en découlent**
- Le moteur de tournoi (génération d'arbres, poules, seeding, barème, résolution, recalcul) est écrit comme du code TypeScript pur, **sans dépendance à Nest**, pour être testé rapidement et sans base de données. Les services Nest l'appellent et persistent le résultat.
- Les permissions sont vérifiées par des guards côté serveur, jamais seulement côté client.
