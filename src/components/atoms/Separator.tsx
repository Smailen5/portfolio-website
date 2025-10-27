import { twMerge } from 'tailwind-merge';

const Separator = ({ className }: { className?: string }) => {
  return <div className={twMerge('h-10 w-full bg-red-500', className)} />;
};

export default Separator;
