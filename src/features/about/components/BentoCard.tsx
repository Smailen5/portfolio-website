import { useId } from 'react';
import { twMerge } from 'tailwind-merge';

interface BentoCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const BentoCard = ({ title, children, className }: BentoCardProps) => {
  const titleId = useId();

  return (
    <article
      aria-labelledby={titleId}
      className={twMerge(
        'border-primary/30 bg-base-300 flex flex-col rounded-lg border p-6',
        className
      )}
    >
      <h2 id={titleId} className="text-lg">
        {title}
      </h2>
      <hr className="border-base-200 my-4" />
      {children}
    </article>
  );
};
