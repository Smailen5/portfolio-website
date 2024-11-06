import { twMerge } from "tailwind-merge";

interface HeaderProps {
  children: string;
  titleID?: string;
  className?: string;
}

export const Header = ({ children, titleID, className }: HeaderProps) => {
  return (
    <header>
      <h3
        id={titleID || children}
        className={twMerge("text-center text-3xl font-semibold", className)}
      >
        {children}
      </h3>
    </header>
  );
};
