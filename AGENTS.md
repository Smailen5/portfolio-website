# AGENTS.md - Portfolio Website

## Comandi Essenziali

```bash
pnpm dev              # Dev server
pnpm build            # Build produzione
pnpm lint             # Controllo ESLint
pnpm typecheck        # TypeScript check
pnpm lint:fix         # Fix ESLint
pnpm format:fix       # Fix Prettier
```

## Stack Tecnologico

- React 18 + TypeScript 5+ (strict mode)
- TanStack Router (file-based routing)
- Tailwind CSS v4 + DaisyUI
- Vite + pnpm

## Architettura Codice

```text
src/
├── routes/           # TanStack Router (file-based)
├── components/       # Atomic design (atoms/molecules/organisms)
├── features/         # Feature-specific components
├── shared/           # Componenti condivisi
└── router.tsx        # Config router
```

**Path alias:** `@/*` → `./src/*`

**Nota:** `routeTree.gen.ts` è generato automaticamente, non modificare.

## Deployment

- **Produzione:** branch `maintenance` (Netlify, modalità manuale)
- **CI:** valida titolo PR, esegue lint/typecheck/build
- **Release:** release-please automatico su `main`
- **Hotfix:** mergiano su branch `v[0-9]*` (es. `v3.0.x`)

## Convenzioni

Per commit, PR, issue e label, leggi `CONVENTION.md`.
