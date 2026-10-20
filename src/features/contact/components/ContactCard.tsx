interface ContactCardProps {
  id: string;
  title: string;
  description?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Card di un canale di contatto.
 *
 * Il titolo e' collegato alla card tramite `aria-labelledby`, cosi' i
 * lettori di schermo annunciano il canale prima del contenuto.
 *
 * @param {string} id - Identificativo usato per il titolo e per aria-labelledby
 * @param {string} title - Nome del canale
 * @param {React.ReactNode} [description] - Testo descrittivo del canale
 * @param {React.ReactNode} [children] - Azioni del canale (link o pulsanti)
 */
export const ContactCard = ({
  id,
  title,
  description,
  children,
}: ContactCardProps) => {
  return (
    <article
      aria-labelledby={id}
      className="border-primary/30 bg-base-300 relative overflow-hidden rounded-lg border p-6"
    >
      <span
        aria-hidden="true"
        className="bg-primary/5 pointer-events-none absolute -top-1/2 -right-1/4 h-[200%] w-1/2 rotate-45"
      />
      <h2 id={id}>{title}</h2>
      {description && (
        <p className="text-base-content/70 mt-2 text-sm">{description}</p>
      )}
      {children && (
        <div className="mt-4 flex flex-wrap items-center gap-3">{children}</div>
      )}
    </article>
  );
};
