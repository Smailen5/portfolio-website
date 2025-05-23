# Nuova struttura del progetto

Dato il continuo incremento della complessità del progetto, è necessario una struttura più modulare e scalabile. Ho deciso di adottare una struttura ibrida tra Atomic Design e Feature-based.
Il progetto sarà suddiviso in 3 cartelle principali in questo modo:

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
