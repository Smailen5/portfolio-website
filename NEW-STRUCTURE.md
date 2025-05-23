# Nuova struttura del progetto

## 📝 Descrizione

Dato il continuo incremento della complessità del progetto, è necessario una struttura più modulare e scalabile. Ho deciso di adottare una struttura ibrida tra Atomic Design e Feature-based.

## 📁 Struttura del progetto

```
src/
├── components/
│   ├── atoms/            # Componenti base (Button, Input, etc.)
│   ├── molecules/        # Componenti composti (Form, Card, etc.)
│   ├── organisms/        # Componenti complessi (Navbar, Footer, etc.)
│   └── templates/        # Layouts (MainLayout, AuthLayout, etc.)
│
├── features/             # Logica di business per feature
│   ├── auth/             # Tutto relativo all'autenticazione
│   │   ├── components/   # Componenti specifici auth
│   │   ├── hooks/        # Custom hooks auth
│   │   └── utils/        # Utility auth
│   │
│   ├── projects/         # Tutto relativo ai progetti
│   │   ├── components/   # Componenti specifici progetti
│   │   ├── hooks/        # Custom hooks progetti
│   │   └── utils/        # Utility progetti
│   │
│   └── admin/            # Area admin
│       ├── components/   # Componenti admin
│       ├── hooks/        # Custom hooks admin
│       └── utils/        # Utility admin
│
├── shared/               # Codice condiviso
│   ├── hooks/            # Hooks generici
│   ├── utils/            # Utility generiche
│   ├── types/            # TypeScript types
│   └── constants/        # Costanti
│
└── pages/                # Pagine dell'app
    ├── Home/
    ├── Projects/
    ├── Admin/
    └── Auth/
```

Vantaggi:
1. **Atomic Design** per componenti riutilizzabili
2. **Feature-based** per logica di business
3. **Shared** per codice comune
4. **Pages** per routing

## 📝 Convenzioni di Importazione

Il progetto utilizza path aliases per importazioni più pulite e manutenibili:

```typescript
// Importazioni di componenti
import { Button } from "@components/atoms/Button";
import { ProjectCard } from "@components/molecules/ProjectCard";

// Importazioni di feature
import { useAuth } from "@features/auth/hooks/useAuth";

// Importazioni di codice condiviso
import { useTheme } from "@shared/hooks/useTheme";

// Importazioni multiple dalla stessa cartella
import { Button, Avatar, ErrorMessage } from "@components/atoms";
```

Anche per importazioni nella stessa cartella, si preferisce usare gli alias per:

- Maggiore consistenza
- Migliore leggibilità della struttura
- Facilità di manutenzione
- Semplicità nel refactoring
