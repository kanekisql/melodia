# MelodIA Frontend Architecture

MelodIA uses a pragmatic mix of Clean Architecture and Feature First.

## Folder Map

- `app`: application composition, route configuration, root providers, and app-level setup.
- `features`: product capabilities grouped by user-facing behavior.
- `domain`: framework-agnostic business models, entities, value objects, and repository contracts.
- `infrastructure`: adapters for external systems such as Gemini, music APIs, HTTP clients, and localStorage.
- `shared`: reusable UI, hooks, types, utilities, constants, config, and cross-cutting providers.
- `assets`: static images, icons, and audio placeholders owned by the frontend.

## Dependency Rule

- `domain` must not import React, browser APIs, API clients, or UI code.
- `infrastructure` may implement contracts defined by `domain`.
- `features` may compose domain types, infrastructure adapters, and shared UI.
- `app` wires everything together.
- `shared` must stay generic and avoid product-specific business rules.

## Naming Conventions

- Components: `PascalCase.tsx`.
- Hooks: `useThing.ts`.
- Types and entities: `kebab-case.ts` or `PascalCase` exports.
- Constants: `SCREAMING_SNAKE_CASE` values from `kebab-case.ts` files.
- Feature folders: `kebab-case`.
- Barrel files: `index.ts` only when they improve imports.

## Import Aliases

- `@app/*`
- `@assets/*`
- `@domain/*`
- `@features/*`
- `@infrastructure/*`
- `@shared/*`
