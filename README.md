# Portfolio Smailen Vargas

<div align="center">

[![Netlify Status](https://api.netlify.com/api/v1/badges/33b32928-0abb-4427-ac58-3f980cfc51ed/deploy-status)](https://app.netlify.com/sites/smailenvargas/deploys)
![Version](https://img.shields.io/github/package-json/v/Smailen5/portfolio-website.svg)

Portfolio personale che mostra i miei progetti e competenze come Front-end Developer.

[Esplora il Sito](https://smailenvargas.com)

</div>

## 🌟 Caratteristiche Principali

- 📱 Design completamente responsivo
- 🌓 Tema chiaro/scuro
- 🔍 Filtro progetti per tecnologia
- 📄 Download/visualizzazione CV
- 📬 ~~Form di contatto integrato~~(Rimosso)
- 🔄 ~~Integrazione API GitHub~~ (Sostituito con CDN)

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

- [React](https://react.dev/) - Framework UI
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- ~~[NextUI](https://nextui.org/) - Componenti UI~~
- ~~[Lottie](https://airbnb.io/lottie/) - Animazioni~~
- [DaisyUI](https://daisyui.com/) - Componenti UI

### Strumenti

- [pnpm](https://pnpm.io/) - Package Manager
- [Vite](https://vitejs.dev/) - Build Tool
- [TypeScript](https://www.typescriptlang.org/) - Type Checking
- ~~[Formik](https://formik.org/) - Form Management~~

### Servizi

- [Netlify](https://www.netlify.com/) - Hosting
- ~~[Formspree](https://formspree.io/) - Form Backend~~
- [GoDaddy](https://www.godaddy.com/) - Domain Provider

## 📋 Ultima Versione
**v3.9.1 - Nuova CDN** - [Scopri di piu'](release/v3.9.1.md)

## 🏗️ Struttura del Progetto

Il progetto segue una struttura ibrida tra Atomic Design e Feature-based:

```
src/
├── components/           # Componenti UI riutilizzabili
│   ├── atoms/            # Componenti base (Button, Input, etc.)
│   ├── molecules/        # Componenti composti (Form, Card, etc.)
│   └── organisms/        # Componenti complessi (Navbar, Footer, etc.)
│
├── features/             # Logica di business per feature
│   └── auth/             # Tutto relativo all'autenticazione
│       ├── components/   # Componenti specifici auth
│       ├── hooks/        # Custom hooks auth
│       └── utils/        # Utility auth
|
├── shared/               # Codice condiviso (hooks, utils, types)
└── pages/                # Pagine dell'app
```

### Convenzioni di Importazione

Il progetto utilizza path aliases per importazioni più pulite e manutenibili:

```typescript
// Importazioni di componenti
import { Button } from "@components/atoms/Button";
import { ProjectCard } from "@components/molecules/ProjectCard";

// Importazioni di feature
import { useAuth } from "@features/auth/hooks/useAuth";

// Importazioni di codice condiviso
import { useTheme } from "@shared/hooks/useTheme";
```

### Convenzioni di Naming

#### Componenti in `components/`

I componenti in `components/` sono riutilizzabili in tutto il progetto e seguono Atomic Design:

- `atoms/`: Componenti base (Button, Input, etc.)
- `molecules/`: Componenti composti (Form, Card, etc.)
- `organisms/`: Componenti complessi (Navbar, Footer, etc.)
- `templates/`: Layouts (MainLayout, AuthLayout, etc.)

#### Componenti in `features/`

I componenti nelle features sono specifici di quella funzionalità e seguono queste regole:

1. **Nomi dei file**:

   - Nomi concisi e diretti
   - No prefisso della feature (es. `Button.tsx` non `SocialButton.tsx`)
   - No suffissi generici (es. `.component.tsx`)

   ```typescript
   // ✅ Corretto
   features / social / components / Button.tsx;
   features / projects / components / Card.tsx;

   // ❌ Non corretto
   features / social / components / SocialButton.tsx;
   features / projects / components / ProjectCard.tsx;
   ```

2. **Nomi dei componenti**:

   - Nomi custom e specifici per evitare conflitti
   - Diversi dai componenti base in `components/`

   ```typescript
   // ✅ Corretto
   // In features/social/components/Button.tsx
   export const SocialButton = () => { ... }

   // In features/projects/components/Card.tsx
   export const ProjectCard = () => { ... }

   // ❌ Non corretto
   // In features/social/components/Button.tsx
   export const Button = () => { ... }  // Conflitto con @components/atoms/Button
   ```

3. **Importazioni**:

   ```typescript
   // Importazione di componenti base
   import { Button } from "@components/atoms/Button";

   // Importazione di componenti feature
   import { SocialButton } from "@features/social/components/Button";
   import { ProjectCard } from "@features/projects/components/Card";
   ```

## 🎯 Sfide Superate

<details>
<summary>Espandi dettagli</summary>

- **Responsive Design**: Creare un portfolio che sia non solo visivamente accattivante, ma anche altamente funzionale, adattabile a diverse dimensioni di schermo.
- **Progetti Interattivi**: Ogni progetto include una immagine di anteprima, le tecnologie utilizzate e un link alla demo o al repository GitHub.
- ~~**Form di Contatto**: Form per permettere agli utenti di contattarmi direttamente dal sito.~~(Rimosso)
- ~~**API GitHub**: Implementare la API di GitHub per recuperare la repository con i progetti.~~(Rimosso)
</details>

## 📋 Road Map

<details>
<summary>Espandi road map</summary>

- [x] Download/visualizzazione CV
- [x] Filtro progetti per tecnologia
- [x] Dark mode automatica/manuale
- [ ] Animazioni avanzate
- [ ] Tracciamento esperienza tecnologie
- [ ] ~~Server e database progetti~~ (Cancellato)
- [ ] ~~Temi multipli~~ (Cancellato)
</details>

## 📚 Risorse Utili

<details>
<summary>Espandi risorse</summary>

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- ~~[Formik Docs](https://formik.org/docs)~~
- [React Docs](https://react.dev/)
- [Icons8](https://icons8.it/icons/)
</details>

## 📝 Note Legali

© 2024 - 2025 Smailen Vargas. Tutti i diritti riservati.
