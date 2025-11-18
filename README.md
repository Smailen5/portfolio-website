# Portfolio Smailen Vargas

<div align="center">

[![Netlify Status](https://api.netlify.com/api/v1/badges/33b32928-0abb-4427-ac58-3f980cfc51ed/deploy-status)](https://app.netlify.com/sites/smailenvargas/deploys)
![Version](https://img.shields.io/github/package-json/v/Smailen5/portfolio-website.svg)

Portfolio personale come Frontend Developer.

**React 18** · **TypeScript 5+** · **TanStack Router** · **Tailwind CSS v4**

[🌐 Esplora il Sito](https://smailenvargas.com) · [📝 Changelog](CHANGELOG.md) · [🐛 Segnala Bug](https://github.com/Smailen5/portfolio-website/issues)

</div>

---

## 📖 Panoramica

Portfolio moderno e performante sviluppato con le tecnologie frontend più recenti. Il sito presenta un'architettura **type-safe**, **routing file-based** e un sistema di **SEO dinamico** ottimizzato per i motori di ricerca.

**Highlights tecnici:**

- 🎯 **100% TypeScript** con strict mode
- 🗂️ **File-based routing** con TanStack Router
- 🎨 **Tailwind v4** + DaisyUI per UI moderne
- 🔍 **SEO ottimizzato** con React Helmet
- 🌓 **Dark mode** persistente
- 📱 **Fully responsive** design

---

## 🖼️ Screenshot

<details>
<summary>Vista Desktop</summary>
<img src="/src/assets/screenshot/sito-desktop.jpeg" alt="Vista Desktop">
</details>

<details>
<summary>Vista Mobile</summary>
<img src="/src/assets/screenshot/sito-smartphone.jpeg" alt="Vista Mobile">
</details>

## 🛠️ Tecnologie Utilizzate

### Frontend

- [React 18](https://react.dev/) - Framework UI
- [TypeScript 5+](https://www.typescriptlang.org/) - Type Checking
- [TanStack Router](https://tanstack.com/router) - Client-side Routing (file-based)
- [Tailwind CSS v4](https://tailwindcss.com/) - Styling utility-first
- [DaisyUI](https://daisyui.com/) - Componenti UI
- [React Helmet](https://github.com/nfl/react-helmet) - SEO & Meta Tags
- ~~[NextUI](https://nextui.org/) - Componenti UI~~ (Rimosso v4.0.0)
- ~~[Lottie](https://airbnb.io/lottie/) - Animazioni~~ (Rimosso v4.0.0)

### Strumenti

- [pnpm](https://pnpm.io/) - Package Manager
- [Vite](https://vitejs.dev/) - Build Tool & Dev Server
- ~~[Formik](https://formik.org/) - Form Management~~ (Rimosso v5.0.0)

### Servizi

- [Netlify](https://www.netlify.com/) - Hosting, Deploy & CDN
- [GitHub](https://github.com) - Repository progetti (link esterni)
- ~~[Formspree](https://formspree.io/) - Form Backend~~ (Rimosso v5.0.0)
- [GoDaddy](https://www.godaddy.com/) - Domain Provider

## 🏗️ Struttura del Progetto

Il progetto segue una struttura ibrida tra Atomic Design e Feature-based:

```
src/
├── components/           # Design System globale (Atomic Design)
│   ├── atoms/            # Componenti base (Avatar, Button, etc.)
│   ├── molecules/        # Composizioni (Hero, Layout, ToggleTheme)
│   └── organisms/        # Componenti complessi (Navbar, Footer, SectionSkill)
│
├── routes/               # TanStack Router (file-based routing)
│   ├── __root.tsx        # Root layout + Outlet
│   ├── index.tsx         # Homepage (/)
│   ├── contact/          # Pagina contatti (/contact)
│   └── projects/         # Pagina progetti (/projects)
│
├── features/             # Slice verticali per funzionalità
│   ├── projects/         # Tutto relativo ai progetti
│   │   ├── components/   # Card, Filter, Header, Section
│   │   ├── hooks/        # useProjects
│   │   └── services/     # API calls
│   ├── cv/               # Download curriculum
│   ├── skills/           # Competenze tecniche
│   └── social/           # Link social media
│
├── shared/               # Codice condiviso cross-feature
│   ├── constants/        # API endpoints, navigation links
│   ├── hooks/            # useTheme, useScroll, etc.
│   ├── types/            # TypeScript types globali
│   └── utils/            # Funzioni di utilità
│
├── api/                  # Client-side fetch functions
├── context/              # React Context (ThemeContext)
└── data/                 # Dati statici (skills, social, images)
```

### Path Aliases

Il progetto utilizza path aliases configurati in `tsconfig.json`:

```typescript
"@/*": ["src/*"]
"@components/*": ["src/components/*"]
"@features/*": ["src/features/*"]
"@shared/*": ["src/shared/*"]
```

**Esempi di importazione:**

```typescript
// Componenti globali
import { Avatar } from '@/components/atoms/Avatar';
import { Layout } from '@/components/molecules/Layout';

// Features
import { CardProject } from '@/features/projects/components/Card';
import { fetchProjects } from '@/api/getProjects';

// Shared
import { useTheme } from '@/shared/hooks/useTheme';
import { ENDPOINTS } from '@/shared/constants/api';
```

### Convenzioni di Codice

#### Componenti React

- **Arrow functions** con `export` named
- **Props** con interfaccia `ComponentNameProps`
- **Destructuring** delle props
- **TypeScript strict** (no `any`)

```typescript
interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{label}</button>;
};
```

#### Naming

- **Componenti**: PascalCase (`Button.tsx`, `NavBar.tsx`)
- **Utils/Hooks**: camelCase (`fetchProjects.ts`, `useTheme.tsx`)
- **Tipi**: PascalCase (`Project`, `CardProjectProps`)
- **Costanti**: UPPER_SNAKE_CASE (`API_BASE_URL`, `NAVIGATION_LINKS`)

#### TSDoc

Tutti i componenti includono commenti TSDoc in italiano:

```typescript
/**
 * Componente Avatar - Immagine profilo con fallback
 *
 * Mostra l'immagine dell'avatar con animazione di cambio casuale
 * In caso di errore di caricamento, mostra le iniziali del nome
 *
 * @param {string} [name] - Nome completo per generare iniziali (opzionale)
 */
export const Avatar = ({ name }: { name?: string }) => {
  // ...
};
```

## 🎯 Sfide Superate

<details>
<summary>Espandi dettagli</summary>

- **File-based Routing**: Implementazione TanStack Router per routing type-safe e file-based
- **SEO Dinamico**: Sistema meta tags con React Helmet per ogni pagina
- **Responsive Design**: Portfolio visivamente accattivante e funzionale su ogni dispositivo
- **Filtro Progetti**: Sistema di filtraggio per tecnologia con contatore real-time
- **Tema Persistente**: Dark/Light mode con salvataggio in localStorage
- **Netlify CDN**: Hosting ottimizzato per asset statici e progetti
- **Type Safety**: TypeScript strict mode con zero `any` types
- ~~**Form di Contatto**: Form con validazione Formik~~ (Rimosso v5.0.0)
- ~~**API GitHub**: Rate limiting e caching progetti~~ (Sostituito con CDN Netlify v3.9.0)
</details>

## 📋 Road Map

<details>
<summary>Espandi road map</summary>

### ✅ Completati

- [x] Migrazione TanStack Router (v4.0.0)
- [x] Tailwind CSS v4 + DaisyUI (v4.0.0)
- [x] SEO con React Helmet (v5.0.0)
- [x] Filtro progetti per tecnologia (v3.0.0)
- [x] Dark mode con persistenza (v2.0.0)
- [x] Download/visualizzazione CV (v2.0.0)
- [x] CDN Netlify per progetti (v3.9.0)
- [x] TypeScript strict mode (v4.0.0)
- [x] Commenti TSDoc completi (v5.0.0)
- [x] Refactoring completo SPA (v5.0.0)

### 🔄 In Sviluppo

- [ ] Animazioni Framer Motion
- [ ] Blog tecnico integrato
- [ ] PWA (Progressive Web App)
- [ ] Analytics privacy-first

### ❌ Cancellati

- ~~Server e database progetti~~ (Non necessario con CDN Netlify)
- ~~Temi multipli~~ (Bastano light/dark)
- ~~Form di contatto~~ (Email + Social sufficienti)
- ~~API GitHub con rate limiting~~ (Sostituito con CDN Netlify)
</details>

## 🚀 Comandi Utili

```bash
# Sviluppo
pnpm install          # Installa dipendenze
pnpm dev              # Avvia dev server (http://localhost:5173)
pnpm dev --host       # Espone server sulla rete locale

# Build & Deploy
pnpm build            # Build per produzione
pnpm preview          # Anteprima build locale

# Qualità Codice
pnpm lint             # ESLint check
pnpm type-check       # TypeScript check
```

## 📚 Risorse Utili

<details>
<summary>Espandi risorse</summary>

### Documentazione

- [React 18 Docs](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TanStack Router Docs](https://tanstack.com/router/latest)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [DaisyUI Components](https://daisyui.com/components/)
- [React Helmet](https://github.com/nfl/react-helmet)

### Design & Assets

- [Icons8](https://icons8.it/icons/) - Icone utilizzate
- [Frontend Mentor](https://www.frontendmentor.io/) - Sfide progetti

### Tools

- [Vite Guide](https://vitejs.dev/guide/)
- [pnpm Docs](https://pnpm.io/)
- [Netlify Docs](https://docs.netlify.com/)

### Deprecate

- ~~[Formik Docs](https://formik.org/docs)~~ (Non più usato)
- ~~[NextUI Docs](https://nextui.org/)~~ (Sostituito con DaisyUI)
</details>

## 📝 Note Legali

© 2024 - 2025 Smailen Vargas. Tutti i diritti riservati.
