# CONVENTION.md — Convenzioni del progetto

L'agente deve leggere questo file all'inizio di ogni sessione.
Limiti, tipi validi e formati verificabili stanno nelle FONTI di verità (in
fondo): non copiarli qui con valori hardcoded, per evitare drift.

## Quick Reference

| Elemento | Formato                      | Limite                  | Esempio                |
| -------- | ---------------------------- | ----------------------- | ---------------------- |
| Commit   | `<tipo>: <verbo 3a persona>` | `commitlint.config.cjs` | `feat: aggiunge login` |
| PR       | `<tipo>: <verbo 3a persona>` | `ci.yml`                | `feat: aggiunge login` |
| Issue    | `<tipo>: <descrizione>`      | libero                  | `feat: impl login`     |
| Label    | tipo (req) + priorità (cons) | -                       | `feat`, `high`         |
| Lingua   | IT testi, EN codice          | -                       | -                      |

## DO e DON'T

### ✅ FAI

- Leggi `CONVENTION.md` e `AGENTS.md` all'inizio
- Conventional commit in italiano (tipi validi = `type-enum` in
  `commitlint.config.cjs`)
- Verbo al presente indicativo 3a persona: "aggiunge", non "aggiunto"/"aggiungere"
- Aggiungi file individualmente: `git add file1 file2`
- Commit atomici: una cosa logica per commit
- Leggi template PR/issue prima di crearli
- Usa `Closes #numero` nel body della PR
- Verifica il titolo PR con i vincoli del CI (vedi `ci.yml`)

### ❌ NON FARE

- Mai `git add .` o `git add -A`
- Mai `git commit -am` o `git commit -m` senza staging individuale
- Mai lavorare su `main` direttamente
- Mai force-push senza approvazione
- Mai saltare gli hook `commit-msg` e `pre-push` (`--no-verify`)
- Mai cancellare issue (usa `gh issue edit`)
- Mai chiudere PR (fixa il branch e pusha)
- Mai superare i limiti header/PR definiti nelle fonti (`commitlint`/`ci.yml`)

## Creazione Issue

1. Leggi template: `ls .github/ISSUE_TEMPLATE/` e `cat .github/ISSUE_TEMPLATE/<tipo>.yaml`
2. Titolo: `<tipo>: <descrizione in italiano>`
3. Label: tipo (obbligatorio, dal template) + priorità `high`/`medium`/`low`
   (consigliata, NON imposta dal template)
4. Crea con: `bash -c 'gh issue create --repo Smailen5/portfolio-website
   --title "..." --label "<tipo>,<priorità>" --body-file <tmpfile>'`
5. Non cancellare issue, modifica con `gh issue edit`

## Creazione PR

1. Leggi template: `cat .github/pull_request_template.md`
2. Titolo: conventional commit + italiano, entro i vincoli del CI (`ci.yml`)
3. Body: `Closes #numero` + descrizione
4. Label: tipo corrispondente al prefisso (`feat`, `fix`, etc.)
5. Crea con: `bash -c 'gh pr create --repo Smailen5/portfolio-website
   --base main --title "..." --label "<tipo>" --body-file <tmpfile>'`
6. Una PR = una issue, mai duplicate
7. Mai chiudere PR, fixa il branch e pusha

## Commit

- Header: `<tipo>: <testo in italiano>` (limite e tipi definiti in
  `commitlint.config.cjs`, non qui)
- Verbo al presente indicativo 3a persona singolare
- Linus test: "If applied, this commit will **soggetto**" deve avere senso
- Mai `git add .` o `git commit -am`
- Commit atomici

## Label

### Issue

- **Tipo** (obbligatorio): vedi `type-enum` in `commitlint.config.cjs`
- **Priorità** (consigliata, non imposta dal template): `high`, `medium`, `low`
- **Opzionale**: `quick win` per issue semplici (5-10 min)

### PR

- **Tipo** (opzionale): stesso catalogo delle issue

## Lingua

- Documentazione, commit, PR, issue: **ITALIANO**
- Codice sorgente: **INGLESE**
- `.env.example` contiene placeholder, mai segreti

## Fonti di verità (dove stanno i valori verificabili)

- `commitlint.config.cjs` — tipi commit validi, lunghezza header, regole
- `.github/workflows/ci.yml` — vincoli titolo PR (formato + lunghezza)
- `.husky/` — hook locali (`commit-msg` → commitlint, `pre-push` → lint+typecheck)
- `.github/ISSUE_TEMPLATE/` — struttura e label di ogni tipo di issue
- `.github/pull_request_template.md` — struttura della PR
- `~/.config/opencode/AGENTS.md` — direttive globali agente
- `AGENTS.md` in-repo — comandi, architettura, CI/CD
