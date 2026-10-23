import { twMerge } from 'tailwind-merge';

interface BentoCardProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const BentoCard = ({
  id,
  title,
  children,
  className,
}: BentoCardProps) => (
  <article
    aria-labelledby={id}
    className={twMerge(
      'border-primary/30 bg-base-300 flex flex-col rounded-lg border p-6',
      className
    )}
  >
    <h2 id={id} className="text-lg">
      {title}
    </h2>
    <hr className="border-base-200 my-4" />
    {children}
  </article>
);
