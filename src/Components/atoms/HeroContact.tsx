export const HeroContact = () => {
  return (
    <section
      aria-labelledby="contact-heading"
      className="flex-1 space-y-4 md:flex md:flex-col md:justify-center md:text-left lg:w-1/2 lg:text-left"
    >
      <h1 id="contact-heading" className="text-3xl font-semibold">
        Contattami
      </h1>
      <p>
        Se hai domande, richieste di collaborazione, o semplicemente vuoi
        parlare di React, non esitare a usare il modulo qui sotto per metterti
        in contatto con me. Sarò felice di risponderti il prima possibile!
      </p>
    </section>
  );
};
