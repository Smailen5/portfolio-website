import { useEffect } from 'react';

// Funzione per gestire lo scroll all'inizio della pagina
const useScroll = () => {
  useEffect(() => {
    const resetScrollPosition = () => {
      window.scrollTo(0, 0); // Resetta lo scroll alla cima della pagina
    };

    // Esegui il reset dello scroll al caricamento della pagina
    resetScrollPosition();
  }, []); // [] assicura che l'effetto si esegua solo una volta, al montaggio del componente
};

export default useScroll;
