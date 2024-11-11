# Portfolio Smailen Vargas

Questo è il portfolio di Smailen, un front-end developer con passione per il web design e lo sviluppo. Qui puoi esplorare i miei progetti, conoscere le mie competenze e contattarmi per collaborazioni.

👉 [Visita il mio sito](https://smailenvargas.com)

## Sommario

- [Panoramica](#panoramica)
  - [Screenshot](#screenshot)
- [Processo](#processo)
  - [Costruito con](#costruito-con)
  - [Sfide incontrate](#sfide-incontrate)
  - [Road map](#road-map)
  - [Risorse utilizzate](#risorse-utilizzate)
- [Autore](#autore)
- [Per me](#per-me)

## Panoramica

[![Netlify Status](https://api.netlify.com/api/v1/badges/33b32928-0abb-4427-ac58-3f980cfc51ed/deploy-status)](https://app.netlify.com/sites/smailenvargas/deploys)

### Screenshot

![Smartphone](/src//assets/screenshot/sito-smartphone.jpeg)
![Desktop](/src/assets/screenshot/sito-desktop.jpeg)

## Processo

### Costruito con

- **Frontend**: React, Tailwind CSS, Nextui
- **Animazioni**: Lottie
- **Gestione Stato**: React Context API
- **Hosting**: Netlify
- **Dominio**: GoDaddy

### Sfide incontrate

- **Responsive Design**: Creare un portfolio che sia non solo visivamente accattivante, ma anche altamente funzionale, adattabile a diverse dimensioni di schermo.
- **Progetti Interattivi**: Ogni progetto include una immagine di anteprima, le tecnologie utilizzate e un link alla demo o al repository GitHub.
- **Form di Contatto**: Form per permettere agli utenti di contattarmi direttamente dal sito.
- **API GitHub**: Implementare la API di GitHub per recuperare la repository con i progetti mi ha dato molto filo da torcere, soprattutto nel recuperare le immagini dei progetti e le tecnologie utilizzate scritte nei file `Readme.md` di ogni progetto. 

### Road map

Nel futuro prevedo di:

- ✔ ~~Implementare la possibilita di scaricare il curriculum o visualizzarlo in una nuova pagina~~
- Implementare la modalita dark mode con TailwindCSS sia automatica che a piacere utilizzando un bottone
- ❌ ~~Cambiare pallette colori aggiungendo differenti temi~~
- Aggiungere piu animazioni sia con TailwindCSS che con una libreria JavaScript
- Aggiungere funzione per tenere traccia dell'esperienza in ogni tecnologia, dato una data di inizio ritorni quanti mesi sono passati
- ❌ ~~Finire di costruire il server e il database per recuperare tutti i progetti~~
- ✔ Aggiungere la possibilita di filtrare i progetti per tecnologia

### Risorse utilizzate

- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Come sempre la documentazione di Tailwind e sempre molto utile quando non capisco qualcosa
- [Formik Documentation](https://formik.org/docs) - Essenziale finche non ci prendo la mano per impostare e gestire i form correttamente
- [Form spree](https://formspree.io/) - Molto utile visto che non volevo scrivere la mia email sul sito, in parte gestisce anche lo spam
- [React Documentation](https://react.dev/) - Quando dimentico qualcosa e qui che vado
- [Icons8](https://icons8.it/icons/) - Un grazie per le bellissime icone soprattutto molto semplici da utilizzare, peccato che non tutte le icone le abbia reperite da qui

## Autore

- Github - [Smailen5](https://github.com/Smailen5)
- Frontend Mentor - [@ Smailen5](https://www.frontendmentor.io/profile/Smailen5)
- Linkedin - [Smailen Vargas](https://www.linkedin.com/in/smailen-vargas/)

## Per me

### Bugs

- I bottoni di nextUI hanno problemi con i Link di react-router-dom. FIX: Utilizza useNavigate per rimandare correttamente alle pagine, setTimeout per visualizzare l'animazione del bottone
