import { twMerge } from 'tailwind-merge';

export const Separator = ({ className }: { className?: string }) => {
  return <div className={twMerge('h-10 w-full', className)} />;
};
