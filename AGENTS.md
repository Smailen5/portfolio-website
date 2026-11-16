# AGENTS.md — Portfolio Website

## Comandi

- **Requisiti**: Node.js 22+ (documentato dal `README.md`, la CI usa Node 22) e pnpm `9.14.2`, fissata da `packageManager`.
- **Setup**: `corepack enable` poi `pnpm install`.
- **Gate**: `pnpm check` = `lint → format → typecheck → build`. Non esiste uno script `test`: non ci sono test da eseguire.
- **Script utili**: `dev` (`vite --host`), `build` (`vite build --minify` → `dist/`), `preview`, `lint`/`lint:fix`, `format`/`format:fix`, `typecheck` (tsc su `tsconfig.app.json` + `tsconfig.node.json`).
- Husky usa `commit-msg` per commitlint. Il hook `pre-push` esegue `pnpm lint` seguito da `pnpm format`.
- `format`/`format:fix` usano Prettier + plugin Tailwind. `AGENTS.md` è escluso da `.prettierignore`.

## Architettura

`src/`: `main.tsx` (createRoot + `RouterProvider` da `router.tsx`), `routes/` (TanStack Router file-based, wrapper sottili), `pages/` (pagine reali), `components/{atoms,molecules,organisms}`, `shared/{components,constants,hooks,types,utils}`, `data/`, `assets/`, `styles/`.

- Le route di `src/routes/*` sono wrapper sottili e delegano a `@/pages/*`. Fa eccezione `src/routes/__root.tsx`, che monta `Root` e `NotFound` da `@/components/organisms`. SEO usa l'opzione `head` e `@/shared/utils/seo`, non React Helmet.
- `src/routeTree.gen.ts` è generato da `@tanstack/router-plugin` (`autoCodeSplitting: true`) in dev/build: non modificarlo.
- Alias unico `@/*` → `./src/*`.

## Convenzioni di codice

- TS `strict` + `noUnusedLocals`/`noUnusedParameters`. ESLint avvisa su default export e `any`.
- Import cross-livello solo dai barrel `@/components/{atoms,molecules,organisms}`: i componenti condivisi tra livelli vanno aggiunti all'`index.ts` del loro livello. Import intra-livello e componenti privati usano il path relativo: `Navbar` importa `./SideBar`, volutamente non esportata dal barrel `organisms`.
- Tailwind v4 + DaisyUI 5. Le classi custom ammesse sono elencate nella whitelist di `eslint.config.js` (`tailwindcss/no-custom-classname`).

## Env

- L'unica variabile Vite letta dal codice è `VITE_API_URL` (`src/shared/constants/api.ts` → `API_URL`). `VITE_NETLIFY_CDN_URL` resta nei `.env` ma non è referenziata.
- `.env.example`, `.env.development` e `.env.production` sono tracciati e contengono valori di endpoint/URL senza credenziali (in sviluppo anche `localhost`). Le `VITE_*` sono client-visible e finiscono nel bundle: non devono contenere segreti.

## Git & release

- `commitlint` (hook `commit-msg`) impone i types di `commitlint.config.cjs` (`feat`, `fix`, `docs`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`), subject senza punto finale e header ≤ 72. La convenzione locale è italiano con verbo 3a persona. La CI `validate-pr-title` sul titolo PR controlla solo prefisso Conventional Commit valido e lunghezza ≤ 72, non tutte le regole di commitlint.
- CI su PR verso `main` e `v[0-9]*`: `pnpm install --frozen-lockfile` → lint → format → typecheck → build.
- Release Please su push a `main` e `v[0-9]*`, tag con prefisso `v`: non toccare branch/PR `release-please--*`.
- Netlify: `netlify.toml` imposta build `pnpm build` e publish `dist/`. Il flusso CLI documentato nel `README.md` è `netlify deploy` (draft) seguito da `netlify deploy --prod`.
