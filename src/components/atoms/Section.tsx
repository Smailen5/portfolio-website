import { twMerge } from 'tailwind-merge';

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={twMerge('w-full space-y-4', className)}>
      {children}
    </section>
  );
};

export default Section;
