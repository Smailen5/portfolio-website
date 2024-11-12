import { getInitials } from "@/utils/getInitials";
import useChangeAvatar from "@/utils/useChangeAvatar";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface RingProps {
  children: React.ReactNode;
  borderColor?: "primary" | "secondary" | "muted" | "accent";
  avatarSize?: "10"| "12"| "14"|"16";
  rounded?: "none" | "full";
}

const Ring = ({
  children,
  borderColor = "primary",
  avatarSize = "12",
  rounded = "full",
}: RingProps) => {
  return (
    <div
      className={`flex size-${avatarSize} items-center justify-center overflow-hidden rounded-${rounded} border-2 border-${borderColor} bg-center p-0.5`}
    >
      {children}
    </div>
  );
};

interface AvatarProps {
  name?: string;
  borderColor?: "primary" | "secondary" | "muted" | "accent";
  avatarSize?: "10"| "12"| "14"|"16";
  rounded?: "none" | "full";
}

export const Avatar = ({
  name,
  borderColor = "primary",
  avatarSize = "12",
  rounded = "full",
}: AvatarProps) => {
  const { currentAvatar, animation } = useChangeAvatar();
  const [loadingError, setLoadingError] = useState<boolean>(false);
  const initialName = getInitials(name || "");

  return (
    <Ring borderColor={borderColor} avatarSize={avatarSize} rounded={rounded}>
      {loadingError ? (
        <div
          role="img"
          aria-label={`${name ? `Avatar di ${name}` : "Avatar"}`}
          className={`rounded-${rounded} flex h-full w-full items-center justify-center bg-primary text-primary-foreground`}
        >
          {initialName}
        </div>
      ) : (
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
