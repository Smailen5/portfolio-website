import { Link } from "@tanstack/react-router";

export const HeaderProject = () => {
  return (
    <>
      <header className="space-y-4 text-left">
        <p>
          Questi progetti sono stati sviluppati nell&apos;ambito delle sfide di
          Frontend Mentor e sono stati fondamentali per affinare le competenze
          acquisite durante i miei studi. Sono stati tratti come veri e propri
          progetti reali, completamente funzionanti e con particolare attenzione
          all&apos;accessibilità e al design.
        </p>
        <p>
          Alcuni dei progetti più vecchi, realizzati durante il primo anno,
          potrebbero contenere errori o soluzioni meno ottimali. Ho deciso di
          lasciarli intatti per mostrare il mio percorso di miglioramento e la
          crescita come sviluppatore. La documentazione è scritta in inglese, è
          possibile utilizzare{" "}
          <Link
            to="https://chromewebstore.google.com/detail/google-traduttore/aapbdbdomjkkjkaonfhkkikfgjllcleb?hl=it"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-primary"
          >
            Google Translate
          </Link>{" "}
          per tradurla.
        </p>
        <p>
          Vuoi scoprire di più? Visita il mio{" "}
          <Link
            to="https://www.frontendmentor.io/profile/Smailen5"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-primary"
          >
            profilo Frontend Mentor
          </Link>{" "}
          per vedere le sfide completate o il mio{" "}
          <Link
            to="https://github.com/Smailen5"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-primary"
          >
            profilo GitHub
          </Link>{" "}
          per tutti i progetti, incluso il{" "}
          <Link
            to="https://github.com/Smailen5/portfolio-website"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-primary"
          >
            codice sorgente di questo sito
          </Link>
          .
        </p>
      </header>
    </>
  );
};
