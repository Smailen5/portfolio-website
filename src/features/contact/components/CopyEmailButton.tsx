import { useCopyToClipboard } from '@/shared/hooks/useCopyToClipboard';

interface CopyEmailButtonProps {
  email: string;
}

/**
 * Pulsante che copia l'indirizzo email negli appunti.
 *
 * Mostra una conferma temporanea nel pulsante e un messaggio annunciato
 * dai lettori di schermo tramite `aria-live`.
 *
 * @param {string} email - Indirizzo da copiare
 */
export const CopyEmailButton = ({ email }: CopyEmailButtonProps) => {
  const { copied, copy } = useCopyToClipboard();

  return (
    <>
      <button type="button" onClick={() => copy(email)}>
        {copied ? 'Copiato!' : 'Copia Indirizzo'}
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? 'Indirizzo email copiato negli appunti' : ''}
      </span>
    </>
  );
};
