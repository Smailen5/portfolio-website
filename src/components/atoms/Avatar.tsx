import useChangeAvatar from '@/shared/hooks/useChangeAvatar';
import { getInitials } from '@/shared/utils/getInitials';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

/**
 * Componente Ring - Contenitore decorativo per avatar
 *
 * Fornisce il bordo circolare colorato attorno all'avatar
 *
 * @param {React.ReactNode} children - Contenuto da wrappare (immagine o iniziali)
 */
const Ring = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-accent flex size-12 items-center justify-center overflow-hidden rounded-full border-2 bg-center p-0.5">
      {children}
    </div>
  );
};

/**
 * Componente Avatar - Immagine profilo con fallback
 *
 * Mostra l'immagine dell'avatar con animazione di cambio casuale
 * In caso di errore di caricamento, mostra le iniziali del nome
 *
 * Features:
 * - Cambio avatar casuale (useChangeAvatar hook)
 * - Fallback con iniziali se immagine non carica
 * - Accessibilità (role, aria-label, alt)
 * - Animazione smooth durante il cambio
 *
 * @param {string} [name] - Nome completo per generare iniziali (opzionale)
 */
export const Avatar = ({ name }: { name?: string }) => {
  const { currentAvatar, animation } = useChangeAvatar();
  const [loadingError, setLoadingError] = useState<boolean>(false);
  const initialName = getInitials(name || '');

  return (
    <Ring>
      {loadingError ? (
        // Fallback con iniziali se l'immagine non si carica
        <div
          role="img"
          aria-label={`${name ? `Avatar di ${name}` : 'Avatar'}`}
          className="bg-accent-content text-accent flex h-full w-full items-center justify-center rounded-full"
        >
          {initialName}
        </div>
      ) : (
        // Immagine dell'avatar
        <img
          src={currentAvatar}
          onError={() => setLoadingError(true)}
          className={twMerge(`rounded-full`, animation)}
          alt={`${name !== undefined ? `Avatar di ${name}` : 'Avatar'}`}
        />
      )}
    </Ring>
  );
};
