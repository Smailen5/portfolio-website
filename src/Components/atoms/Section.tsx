interface SectionProps {
  children: React.ReactNode;
}

export const Section = ({ children }: SectionProps) => {
  return (
    <section className="mx-auto flex w-full flex-col gap-12">
      {children}
    </section>
  );
};
