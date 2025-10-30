import { twMerge } from 'tailwind-merge';

const Separator = ({ className }: { className?: string }) => {
  return <div className={twMerge('h-10 w-full', className)} />;
};

export default Separator;
