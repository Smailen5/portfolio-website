import { twMerge } from "tailwind-merge";

// Props per il componente Section
interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

// Componente Section per creare sezioni della pagina con stile consistente
export const Section = ({ children, className }: SectionProps) => {
  return (
    <section
      className={twMerge("mx-auto flex w-full flex-col gap-16", className)}
    >
      {children}
    </section>
  );
};
