import { twMerge } from "tailwind-merge";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ children, className }: SectionProps) => {
  return (
    <section className={twMerge("mx-auto flex w-full flex-col gap-16", className)}>
      {children}
    </section>
  );
};
