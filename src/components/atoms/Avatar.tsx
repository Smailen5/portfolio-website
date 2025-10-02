import { getInitials } from "@/shared/utils/getInitials";
import useChangeAvatar from "@/shared/hooks/useChangeAvatar";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

// Componente Ring che gestisce il bordo e il contenitore dell'avatar
const Ring = ({
  children
}: { children: React.ReactNode }) => {

  return (
    <div
      className="flex items-center justify-center overflow-hidden border-2 bg-center p-0.5 rounded-full size-12 border-accent"
    >
      {children}
    </div>
  );
};

// Componente Avatar principale che gestisce l'immagine e il fallback
export const Avatar = ({
  name,
}: { name?: string }) => {
  const { currentAvatar, animation } = useChangeAvatar(); // Hook per la gestione dell'avatar
  const [loadingError, setLoadingError] = useState<boolean>(false); // Stato per gestire errori di caricamento
  const initialName = getInitials(name || ""); // Ottiene le iniziali dal nome

  return (
    <Ring>
      {loadingError ? (
        // Fallback con iniziali se l'immagine non si carica
        <div
          role="img"
          aria-label={`${name ? `Avatar di ${name}` : "Avatar"}`}
          className="rounded-full flex h-full w-full items-center justify-center bg-accent-content text-accent"
        >
          {initialName}
        </div>
      ) : (
        // Immagine dell'avatar
        <img
          src={currentAvatar}
          onError={() => setLoadingError(true)}
          className={twMerge(`rounded-full`, animation)}
          alt={`${name !== undefined ? `Avatar di ${name}` : "Avatar"}`}
        />
      )}
    </Ring>
  );
};
