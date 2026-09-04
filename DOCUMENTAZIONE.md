# Documentazione interna del progetto

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
│   ├── hooks/            # useProjects, useChangeAvatar
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
pnpm lint:check       # ESLint check errori
pnpm lint:fix         # ESLint fix errori possibili
pnpm format:check     # Prettier check
pnpm format:fix       # Prettier fix
pnpm type-check       # TypeScript check
```
