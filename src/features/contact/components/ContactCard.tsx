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
    <article aria-labelledby={id}>
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
      {children && <div>{children}</div>}
    </article>
  );
};
