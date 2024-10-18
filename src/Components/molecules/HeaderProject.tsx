import { LinkBlank } from "../atoms/LinkBlank";

export const HeaderProject = () => {
  return (
    <>
      <div className="space-y-4 text-left">
        <p>
          Questi progetti sono stati sviluppati nell'ambito delle sfide di
          Frontend Mentor e sono stati fondamentali per affinare le competenze
          acquisite durante i miei studi. Alcuni sono stati trattati come veri e
          propri progetti reali, completamente funzionanti e con particolare
          attenzione a accessibilità e design.
        </p>
        <p>
          Alcuni dei progetti più vecchi, risalenti all'anno scorso, potrebbero
          contenere errori o soluzioni meno ottimali. Ho deciso di lasciarli
          intatti per mostrare il mio percorso di miglioramento e la crescita
          come sviluppatore. In futuro, mi piacerebbe correggerli e ottimizzarli
          per fare esperienza nel migliorare codice "vecchio".
        </p>
        <p>
          Vuoi scoprire di più? Visita il mio{" "}
          <LinkBlank
            href="https://smailen5.github.io/Frontend-Mentor-Challenge/"
            isText
          >
            profilo Frontend Mentor
          </LinkBlank>{" "}
          per vedere le sfide completate o il mio{" "}
          <LinkBlank href="https://github.com/Smailen5?tab=repositories" isText>
            profilo GitHub
          </LinkBlank>{" "}
          per tutti i progetti, incluso il codice sorgente di questo sito.
        </p>
      </div>
    </>
  );
};
