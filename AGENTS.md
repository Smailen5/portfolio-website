# AGENTS.md — Portfolio Website

## Comandi

Richiede Node 22 + pnpm `9.14.2` (fissata da `packageManager`, usa `corepack`).

```bash
pnpm install             # dipendenze
pnpm dev                 # Vite dev server (--host, esposto in LAN)
pnpm build               # build produzione in dist/
pnpm preview             # anteprima build locale
pnpm lint / lint:fix     # ESLint check / autofix
pnpm format / format:fix # Prettier check / scrittura
pnpm typecheck           # tsc su tsconfig.app.json + tsconfig.node.json
pnpm check               # gate completo: lint && format && typecheck && build
```

- **Non esiste una suite di test** (no Vitest, no script `test`): la verifica è
  `pnpm check`.
- CI (`.github/workflows/ci.yml`) su PR verso `main` e `v[0-9]*`: esegue
  `lint → format → typecheck → build` e valida il titolo PR (prefisso
  conventional commit, ≤ 72 caratteri).
- Hook Husky: `commit-msg` → commitlint; `pre-push` → `pnpm lint && pnpm format`.

## Architettura

```text
src/
├── routes/       # TanStack Router file-based: solo createFileRoute + head SEO
├── pages/        # Componenti pagina reali (home, about, contact, project)
├── components/   # Atomic design: atoms/ molecules/ organisms/
├── features/     # Slice verticali: cv/, projects/
├── shared/       # constants/, hooks/, types/, utils/
├── data/         # Dati statici (skillsData, social, images)
└── styles/app.css
```

- `src/routes/*` è sottile: delega a `@/pages/*`; la logica sta in `pages/`,
  `features/`, `components/`.
- Alias **unico** `@/*` → `./src/*`.
- `src/routeTree.gen.ts` è generato da `@tanstack/router-plugin` a dev/build:
  **non modificarlo**.
- SEO tramite opzione `head` di TanStack Router (`@/shared/utils/seo`), **non**
  React Helmet (il `README.md` è obsoleto su quel punto).

## Convenzioni di codice

- Solo **export named** (ESLint `no-restricted-syntax` avvisa sul default export).
- Import cross-livello dai barrel (`@/components/atoms|molecules|organisms`);
  tra componenti dello stesso livello usa il path diretto `./Component`. Ogni
  nuovo componente va aggiunto all'`index.ts` del suo livello.
- Tailwind v4 + DaisyUI; classi custom in whitelist in `eslint.config.js`
  (`tailwindcss/no-custom-classname`).
- Commit e titolo PR: conventional commit in italiano (verbo 3a persona), vincoli
  in `commitlint.config.cjs` e `.github/workflows/ci.yml`.

## Env

- `VITE_API_URL` è l'unica variabile consumata dal codice
  (`src/shared/constants/api.ts` → `API_URL`). `VITE_NETLIFY_CDN_URL` è definita
  nei `.env` ma **non** è referenziata nel codice.
- `.env.development`, `.env.production` e `.env.example` sono versionati con URL
  reali (nessun segreto).

## Deploy & release

- Hosting Netlify; `netlify.toml`: build `pnpm build`, publish `dist/`.
- Deploy **manuale**: `netlify deploy` (draft) → `netlify deploy --prod`.
  Le build fallite non vengono pubblicate.
- `main` = produzione; CI e release coprono anche i branch `v[0-9]*` (hotfix).
  Release automatiche via release-please: non toccare branch/PR `release-please--*`.
- Rollback/troubleshooting: `.opencode/notes/NOTE-deploy-runbook.md`.

## Note

- `.opencode/plans/PLAN*.md` e `.opencode/notes/NOTE*.md` sono **gitignored**.
