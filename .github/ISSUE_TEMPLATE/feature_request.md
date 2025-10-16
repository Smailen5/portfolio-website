---
name: Feature Request ✨
about: Aggiungi una nuova funzione o migliora una funzione esistente
title: '[FEATURE]'
labels: ['feature', 'enhancement', 'needs-triage']
assignees: 'Smailen5'
---

## Descrizione Feature

<!-- Descrivi la feature che vorresti aggiungere o migliorare -->

## Motivazione

<!-- Spiega perché la feature è necessaria -->

## Descrizione Dettagliata

<!-- Descrivi nel dettaglio come la feature dovrebbe funzionare -->

## Screenshot, video, link o mockup (opzionale ma gradito)

<!-- Screenshot, video, link o mockup che mostra la feature -->

## Casi di Uso

<!-- Elenca i casi di uso tipici -->

1. **Caso di uso 1**: <!-- Descrizione del caso di uso -->
2. **Caso di uso 2**: <!-- Descrizione del caso di uso -->

## Esempio di implementazione (opzionale)

<!-- Se hai un esempio di implementazione, spiega come può essere implementata -->

```typescript
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
);
// Whenever the user explicitly chooses light mode
localStorage.theme = "light";
// Whenever the user explicitly chooses dark mode
localStorage.theme = "dark";
// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem("theme");
```

## Soluzione Alternativa (opzionale)

<!-- Se hai una soluzione alternativa, spiega come può essere implementata -->

## Labels

<!-- Aggiungi i labels appropriati ed elimina questa sezione -->

- `feature` - Feature richiesta
- `enhancement` - Miglioramento
- `needs-triage` - Da analizzare
- `doc` - Migliorare o aggiungere documentazione
