<div align="center">

# Smailen Vargas — Frontend Developer

**React · TypeScript · Full-Stack & Linux Systems**

Un portfolio moderno e type-safe costruito da zero: routing file-based, SEO per rotta, un unico tema scuro senza sfarfallio al caricamento e una codebase ordinata ad atomic design.

[**Visita il sito**](https://smailenvargas.com) · [Changelog](CHANGELOG.md) · [Segnala un bug](https://github.com/Smailen5/portfolio-website/issues) · [🇬🇧 English](README.md)

[![Netlify Status](https://api.netlify.com/api/v1/badges/33b32928-0abb-4427-ac58-3f980cfc51ed/deploy-status)](https://app.netlify.com/sites/smailenvargas/deploys)
![Version](https://img.shields.io/github/package-json/v/Smailen5/portfolio-website.svg)

</div>

## Panoramica

Questo è il mio portfolio personale e la mia vetrina frontend. Presenta una selezione di progetti, le tecnologie con cui lavoro e il mio percorso, oltre a un canale diretto per la collaborazione.

Il progetto è mantenuto dal 2024 ed è costruito con lo stesso stack che uso in produzione: **React 18**, **TypeScript in strict mode**, **TanStack Router** e **Tailwind CSS v4**. Ogni rotta è type-safe, i metadati sono generati per pagina e i dati dei progetti vengono letti da un'API REST self-hosted.

## Screenshot

<details>
<summary>Vista desktop (2024)</summary>
<img src="src/assets/screenshot/sito-desktop.jpeg" alt="Vista desktop del portfolio (2024)">
</details>

<details>
<summary>Vista mobile (2024)</summary>
<img src="src/assets/screenshot/sito-smartphone.jpeg" alt="Vista mobile del portfolio (2024)">
</details>

## Stack Tecnologico

| Area               | Tecnologia                              | Note                                                                  |
| ------------------ | --------------------------------------- | --------------------------------------------------------------------- |
| UI                 | React 18                                | Solo componenti a funzione e hook                                     |
| Linguaggio         | TypeScript 5.9                          | Modalità `strict`, zero `any`                                         |
| Routing            | TanStack Router 1.x                     | Routing file-based type-safe con metadati `head` per rotta            |
| Styling            | Tailwind CSS v4 + DaisyUI 5             | CSS utility-first con un unico tema scuro personalizzato              |
| Build tool         | Vite 7                                  | Dev server rapido e build di produzione ottimizzata                   |
| Package manager    | pnpm 9.14.2                             | Versione fissata tramite `corepack`                                   |
| Qualità del codice | ESLint 9, Prettier 3, Husky, commitlint | Config ESLint flat, Prettier con plugin Tailwind, commit conventional |
| Hosting            | Netlify                                 | Build statica servita dalla CDN                                       |

## Funzionalità

- **Routing file-based type-safe** — le rotte vivono in `src/routes/` e sono generate dal file system tramite il plugin di TanStack Router. Nessun registro manuale delle rotte, nessun link rotto.
- **SEO per rotta** — titoli, descrizioni, keywords, tag Open Graph e JSON-LD (schema Person) sono generati tramite l'API nativa `head` di TanStack Router. Nessuna libreria SEO di terze parti.
- **Tema scuro senza sfarfallio** — `data-theme="dark"` è impostato direttamente nell'entry HTML. Non esiste un toggle del tema né `localStorage`, quindi non c'è mai un flash del tema sbagliato al caricamento.
- **Catalogo progetti con filtro dal vivo** — i progetti vengono recuperati da un'API REST e filtrati per tecnologia con un contatore in tempo reale.
- **Data layer resiliente** — una cache in memoria con stale time di 5 minuti evita richieste ridondanti, le richieste in volo vengono annullate con `AbortController` e la UI espone skeleton di caricamento e uno stato di errore con azione di retry.
- **Struttura ad Atomic Design** — i componenti sono organizzati in `atoms/`, `molecules/` e `organisms/`, con slice verticali per `projects/` e `cv/`.
- **Responsive e accessibile** — i layout si adattano da mobile a desktop, con landmark semantici, etichette `aria` e heading solo per screen reader.
- **Pagina 404 personalizzata** per le rotte sconosciute.

## Avvio Rapido

### Requisiti

- **Node.js 22+**
- **pnpm 9.14.2**, abilitato tramite corepack

```bash
corepack enable
```

### Installazione

```bash
pnpm install
```

### Sviluppo

```bash
pnpm dev
```

Il dev server di Vite parte con `--host`, quindi è raggiungibile anche da altri dispositivi sulla tua rete locale.

### Script disponibili

| Script            | Descrizione                                                 |
| ----------------- | ----------------------------------------------------------- |
| `pnpm dev`        | Avvia il dev server di Vite                                 |
| `pnpm build`      | Crea la build di produzione ottimizzata in `dist/`          |
| `pnpm preview`    | Anteprima locale della build di produzione                  |
| `pnpm lint`       | Esegue ESLint                                               |
| `pnpm lint:fix`   | Esegue ESLint con autofix                                   |
| `pnpm format`     | Verifica la formattazione con Prettier                      |
| `pnpm format:fix` | Applica la formattazione con Prettier                       |
| `pnpm typecheck`  | Controlla i tipi delle configurazioni app e node            |
| `pnpm check`      | Gate completo di qualità: lint → format → typecheck → build |

### Variabili d'ambiente

Copia `.env.example` in `.env.development` e/o `.env.production`. L'unica variabile letta dall'applicazione è:

| Variabile      | Descrizione                                 |
| -------------- | ------------------------------------------- |
| `VITE_API_URL` | URL base dell'API REST che serve i progetti |

## Struttura del Progetto

```text
src/
├── routes/       # Rotte file-based: wrapper sottili con createFileRoute + metadati head
├── pages/        # Componenti pagina reali (home, about, contact, project)
├── components/   # Atomic Design: atoms/ · molecules/ · organisms/
├── features/     # Slice verticali: cv/ · projects/
├── shared/       # constants/ · hooks/ · types/ · utils/
├── data/         # Dati statici (skills, link social, import asset)
└── styles/       # Entry point Tailwind e tema DaisyUI (app.css)
```

- L'alias di import **`@/*`** punta sempre a `./src/*`.
- `src/routeTree.gen.ts` è generato da `@tanstack/router-plugin` durante dev e build: non modificarlo a mano.
- Le rotte restano sottili e delegano il rendering a `src/pages/*`; la logica vera vive in `pages/`, `features/` e `components/`.

## Qualità del Codice & CI

```bash
pnpm check
```

Questo comando esegue in sequenza ESLint, Prettier, TypeScript e una build di produzione, ed è il gate da lanciare prima di ogni commit.

- I **Conventional Commits** sono imposti da `commitlint` tramite un hook Husky `commit-msg`.
- Un hook Husky `pre-push` esegue `lint` e `format`.
- La **CI** gira sulle pull request verso `main` e `v[0-9]*`: installa le dipendenze con pnpm, poi esegue `lint → format → typecheck → build` e valida che il titolo della PR rispetti il formato Conventional Commits (massimo 72 caratteri).

## Deploy

Il sito è una build statica pubblicata su **Netlify**:

```bash
pnpm build          # output in dist/
netlify deploy      # deploy di anteprima
netlify deploy --prod
```

Le release sono automatizzate con **release-please** su `main`.

## Ecosistema

Il frontend è una SPA statica. I dati dei progetti sono serviti da un'API REST self-hosted (`VITE_API_URL`) che gira su un nodo casalingo **Proxmox VE** tramite container **LXC**, mentre gli asset statici sono distribuiti dalla **CDN di Netlify**.

**Repository backend:** [Smailen5/server-portfolio](https://github.com/Smailen5/server-portfolio)

## Licenza

© 2024-2026 Smailen Vargas. Tutti i diritti riservati.

Questo repository è pubblicato a solo scopo di portfolio e dimostrazione. Non è concessa alcuna autorizzazione a copiare, modificare, ridistribuire o riutilizzare il codice, in tutto o in parte, senza previo consenso scritto. Vedi [LICENSE](LICENSE) per il testo completo.
