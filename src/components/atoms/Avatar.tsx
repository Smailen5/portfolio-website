import { getInitials } from "@/shared/utils/getInitials";
import useChangeAvatar from "@/shared/hooks/useChangeAvatar";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

// Props per il componente Ring che gestisce il bordo dell'avatar
interface RingProps {
  children: React.ReactNode;
  borderColor?: "primary" | "secondary" | "muted" | "accent"; // Colore del bordo
  avatarSize?: "10" | "12" | "14" | "16"; // Dimensioni disponibili (in unità tailwind)
  rounded?: "none" | "full"; // Stile degli angoli
}

// Componente Ring che gestisce il bordo e il contenitore dell'avatar
const Ring = ({
  children,
  borderColor = "primary",
  avatarSize = "12",
  rounded = "full",
}: RingProps) => {
  // Mappatura dei colori del bordo alle classi tailwind
  const borderColors = {
    primary: "border-primary",
    secondary: "border-secondary",
    muted: "border-muted",
    accent: "border-accent",
  };

  // Mappatura delle dimensioni alle classi tailwind
  const sizes = {
    "10": "w-10 h-10",
    "12": "w-12 h-12",
    "14": "w-14 h-14",
    "16": "w-16 h-16",
  };

  // Mappatura degli stili di arrotondamento
  const roundedVariants = {
    none: "rounded-none",
    full: "rounded-full",
  };

  return (
    <div
      className={twMerge(
        "flex items-center justify-center overflow-hidden border-2 bg-center p-0.5",
        sizes[avatarSize],
        borderColors[borderColor],
        roundedVariants[rounded],
      )}
    >
      {children}
    </div>
  );
};

// Props per il componente Avatar principale
interface AvatarProps {
  name?: string; // Nome dell'utente per le iniziali di fallback
  borderColor?: "primary" | "secondary" | "muted" | "accent";
  avatarSize?: "10" | "12" | "14" | "16";
  rounded?: "none" | "full";
}

// Componente Avatar principale che gestisce l'immagine e il fallback
export const Avatar = ({
  name,
  borderColor = "primary",
  avatarSize = "12",
  rounded = "full",
}: AvatarProps) => {
  const { currentAvatar, animation } = useChangeAvatar(); // Hook per la gestione dell'avatar
  const [loadingError, setLoadingError] = useState<boolean>(false); // Stato per gestire errori di caricamento
  const initialName = getInitials(name || ""); // Ottiene le iniziali dal nome

  return (
    <Ring borderColor={borderColor} avatarSize={avatarSize} rounded={rounded}>
      {loadingError ? (
        // Fallback con iniziali se l'immagine non si carica
        <div
          role="img"
          aria-label={`${name ? `Avatar di ${name}` : "Avatar"}`}
          className={`rounded-${rounded} flex h-full w-full items-center justify-center bg-primary text-primary-foreground`}
        >
          {initialName}
        </div>
      ) : (
        // Immagine dell'avatar
        <img
          src={currentAvatar}
          onError={() => setLoadingError(true)}
          className={twMerge(`rounded-${rounded}`, animation)}
          alt={`${name !== undefined ? `Avatar di ${name}` : "Avatar"}`}
        />
      )}
    </Ring>
  );
};
