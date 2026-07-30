# AGENTS.md - Portfolio Website

## Comandi Essenziali

**Sviluppo:**
```bash
pnpm dev              # Avvia dev server con hot reload
pnpm build            # Build produzione con minificazione
pnpm preview          # Preview build locale
```

**Verifica (pre-push):**
```bash
pnpm lint             # Controllo ESLint
pnpm typecheck        # TypeScript type checking (noEmit)
```

La build produzione (`pnpm build`) viene eseguita in CI.

**Fix automatici:**
```bash
pnpm lint:fix         # Fix automatici ESLint
pnpm format:fix       # Formattazione Prettier
```

## Stack Tecnologico

- **React 18** + **TypeScript 5+** (strict mode, zero `any`)
- **TanStack Router** - routing file-based type-safe
- **Tailwind CSS v4** + **DaisyUI** - styling
- **Vite** - build tool e dev server
- **pnpm** - package manager (obbligatorio, non npm/yarn)

## Architettura Codice

**Struttura src/:**
- `routes/` - route file-based TanStack Router (`__root.tsx`, `index.tsx`, `about.tsx`, `contact/`, `projects/`)
- `components/` - pattern atomic design (atoms/molecules/organisms)
- `features/` - componenti feature-specific
- `shared/` - componenti condivisi
- `router.tsx` - configurazione router
- `routeTree.gen.ts` - generato automaticamente da TanStack Router

**Path aliases:**

Il progetto usa un solo alias: `@/*` mappa a `./src/*`.

```typescript
import Component from '@/components/Component'
```

Configurato in `tsconfig.app.json` (`compilerOptions.paths`) e risolto da Vite tramite il plugin `vite-tsconfig-paths` in `vite.config.ts`.

## CI/CD e Deployment

**CI/CD:**
- CI valida titolo PR con conventional commit (max 72 caratteri, descrittivo per changelog/release)
- CI esegue lint, type-check, build su pull request

**Release:**
- release-please automatico su `main` e branch `v[0-9]*` (es. `v3.0.x` per hotfix)
- Versionamento semantico configurato in `release-please-config.json`
- Release attivata quando cambia versione su main (PR di release-please mergiata)

**Deployment:**
- Netlify in modalità manuale (maintenance mode)
- Branch `maintenance` è quello in produzione
- Non modificare `maintenance` finché non finisce la manutenzione

**Workflow Hotfix:**
- Hotfix mergiano sul branch di hotfix (es. `v3.0.x`)
- Poi le modifiche vengono importate manualmente su main
- Release su main perché il branch hotfix verrà mergiato su main

## Convenzioni

Per branch naming, commit, PR, issue e label, leggi `CONVENTION.md`.

## Configurazioni

**Prettier:**
- Single quotes, semi-colon, trailing comma ES5
- Plugin `prettier-plugin-tailwindcss` per ordinare classi Tailwind

**ESLint:**
- TypeScript strict con `@typescript-eslint/no-explicit-any: warn`
- React hooks rules attive
- Prettier integrato come regola

**TypeScript:**
- Strict mode attivo
- `noUnusedLocals` e `noUnusedParameters` abilitati
- Target ES2020, module ESNext

## Note Importanti

- **Non usare npm/yarn** - il progetto usa pnpm (vedi `packageManager` in package.json)
- **routeTree.gen.ts** è generato automaticamente, non modificare manualmente
- **Strict mode TypeScript** - evitare `any`, usare type narrowing
- **Tailwind v4** - sintassi diversa da v3, consultare docs aggiornate
- **Netlify** - deploy automatico su push a main
