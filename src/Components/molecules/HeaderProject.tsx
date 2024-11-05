import { LinkBlank } from "../atoms/LinkBlank";

export const HeaderProject = () => {
  return (
    <>
      <div className="space-y-4 text-left">
        <p>
          Questi progetti sono stati sviluppati nell'ambito delle sfide di
          Frontend Mentor e sono stati fondamentali per affinare le competenze
          acquisite durante i miei studi. Sono stati tratti come veri e propri
          progetti reali, completamente funzionanti e con particolare attenzione
          all'accessibilità e al design.
        </p>
        <p>
          Alcuni dei progetti più vecchi, realizzati durante il primo anno,
          potrebbero contenere errori o soluzioni meno ottimali. Ho deciso di
          lasciarli intatti per mostrare il mio percorso di miglioramento e la
          crescita come sviluppatore. La documentazione è scritta in inglese, è
          possibile utilizzare{" "}
          <LinkBlank
            href="https://chromewebstore.google.com/detail/google-traduttore/aapbdbdomjkkjkaonfhkkikfgjllcleb?hl=it"
            isText
          >
            Google Translate
          </LinkBlank>{" "}
          per tradurla.
        </p>
        <p>
          Vuoi scoprire di più? Visita il mio{" "}
          <LinkBlank
            href="https://www.frontendmentor.io/profile/Smailen5"
            isText
          >
            profilo Frontend Mentor
          </LinkBlank>{" "}
          per vedere le sfide completate o il mio{" "}
          <LinkBlank href="https://github.com/Smailen5" isText>
            profilo GitHub
          </LinkBlank>{" "}
          per tutti i progetti, incluso il{" "}
          <LinkBlank
            href="https://github.com/Smailen5/portfolio-website"
            isText
          >
            codice sorgente di questo sito
          </LinkBlank>
          .
        </p>
      </div>
    </>
  );
};
