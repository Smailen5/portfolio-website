import { useEffect } from 'react';

// Funzione per gestire lo scroll all'inizio della pagina
const useScroll = () => {
  useEffect(() => {
    const resetScrollPosition = () => {
      window.scrollTo(0, 0); // Resetta lo scroll alla cima della pagina
    };

    // Esegui il reset dello scroll al caricamento della pagina
    resetScrollPosition();

    // Se vuoi fare il reset anche su altri eventi, aggiungili qui
    // per esempio, se vuoi resettare lo scroll quando la finestra viene ridimensionata
    // window.addEventListener("resize", resetScrollPosition);

    // Pulizia dell'eventuale listener se lo hai aggiunto
    return () => {
      // window.removeEventListener("resize", resetScrollPosition);
    };
  }, []); // [] assicura che l'effetto si esegua solo una volta, al montaggio del componente
};

export default useScroll;
