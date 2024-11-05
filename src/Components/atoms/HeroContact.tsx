interface HeroContactProps {
  noHeader?: boolean;
}

export const HeroContact = ({ noHeader }: HeroContactProps) => {
  return (
    <section
      aria-labelledby="contact-heading"
      className="flex-1 space-y-4 md:flex md:flex-col md:justify-center md:text-left lg:w-1/2 lg:text-left"
    >
      <h3 id="contact-heading" className="sr-only">
        Contattami
      </h3>
      {!noHeader && <h3 className="text-3xl font-semibold">Contattami</h3>}
      <p>
        Se hai domande, richieste di collaborazione, o semplicemente vuoi
        parlare di React, non esitare a usare il modulo qui sotto per metterti
        in contatto con me. Sarò felice di risponderti il prima possibile!
      </p>
    </section>
  );
};
