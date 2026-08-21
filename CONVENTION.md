# CONVENTION.md — Convenzioni del progetto

L'agente deve leggere questo file all'inizio di ogni sessione.

## Quick Reference

| Elemento | Formato | Limite | Esempio |
|----------|---------|--------|---------|
| **Commit** | `<tipo>: <verbo 3a persona>` | 42 caratteri | `feat: aggiunge login` |
| **PR** | `<tipo>: <cosa è stato fatto>` | 72 caratteri | `feat: aggiunge login con Google` |
| **Issue** | `<tipo>: <descrizione>` | libero | `feat: implementa login` |
| **Label issue** | tipo + priorità | obbligatori | `feat`, `high` |
| **Lingua** | Italiano per testi, Inglese per codice | - | - |

## DO e DON'T

### ✅ FAI

- Leggi `CONVENTION.md` e `AGENTS.md` all'inizio
- Conventional commit in italiano: `feat:`, `fix:`, `chore:`, `refactor:`, `test:`, `docs:`, `ci:`, `perf:`, `build:`
- Verbo al presente indicativo 3a persona: "aggiunge", non "aggiunto" o "aggiungere"
- Aggiungi file individualmente: `git add file1 file2`
- Commit atomici: una cosa logica per commit
- Leggi template PR/issue prima di crearli
- Usa `Closes #numero` nel body della PR
- Verifica lunghezza titolo PR: max 72 caratteri

### ❌ NON FARE

- Mai `git add .` o `git add -A`
- Mai `git commit -am` o `git commit -m` senza staging individuale
- Mai lavorare su `main` direttamente
- Mai force-push senza approvazione
- Mai saltare pre-commit hooks (`--no-verify`)
- Mai cancellare issue (usa `gh issue edit`)
- Mai chiudere PR (fixa il branch e pusha)
- Mai superare 42 caratteri nei commit
- Mai superare 72 caratteri nei titoli PR

## Creazione Issue

1. Leggi template: `ls .github/ISSUE_TEMPLATE/` e `cat .github/ISSUE_TEMPLATE/<tipo>.yaml`
2. Titolo: `<tipo>: <descrizione in italiano>`
3. Label obbligatori: tipo (`feat`, `fix`, `chore`, etc.) + priorità (`high`, `medium`, `low`)
4. Crea con: `bash -c 'gh issue create --repo Smailen5/portfolio-website --title "..." --label "<tipo>,<priorità>" --body-file <tmpfile>'`
5. Non cancellare issue, modifica con `gh issue edit`

## Creazione PR

1. Leggi template: `cat .github/pull_request_template.md`
2. Titolo: conventional commit + italiano, **max 72 caratteri** (CI rifiuta titoli più lunghi)
3. Body: `Closes #numero` + descrizione
4. Label: tipo corrispondente al prefisso (`feat`, `fix`, etc.)
5. Crea con: `bash -c 'gh pr create --repo Smailen5/portfolio-website --base main --title "..." --label "<tipo>" --body-file <tmpfile>'`
6. Una PR = una issue, mai duplicate
7. Mai chiudere PR, fixa il branch e pusha

## Commit

- Header: `<tipo>: <testo in italiano>` — **max 42 caratteri** (enforced da commitlint)
- Verbo al presente indicativo 3a persona singolare
- Linus test: "If applied, this commit will **soggetto**" deve avere senso
- Mai `git add .` o `git commit -am`
- Commit atomici

## Label

### Issue

- **Tipo** (obbligatorio): `feat`, `fix`, `chore`, `refactor`, `test`, `docs`, `ci`, `perf`, `build`
- **Priorità** (obbligatoria): `high`, `medium`, `low`
- **Opzionale**: `quick win` per issue semplici (5-10 min)

### PR

- **Tipo** (opzionale): stesso catalogo delle issue

## Lingua

- Documentazione, commit, PR, issue: **ITALIANO**
- Codice sorgente: **INGLESE**
- `.env.example` contiene placeholder, mai segreti

## Riferimenti

- `~/.config/opencode/AGENTS.md` — direttive globali
- `AGENTS.md` in-repo — comandi, architettura, CI/CD
- `.github/pull_request_template.md` — template PR
- `.github/ISSUE_TEMPLATE/` — template issue
