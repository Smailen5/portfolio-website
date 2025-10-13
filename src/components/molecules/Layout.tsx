import useScroll from "@/shared/hooks/useScroll";
import { twMerge } from "tailwind-merge";

interface LayoutProps {
  children: React.ReactNode;
  classLayout?: string;
  classContent?: string;
}

export const Layout = ({
  children,
  classLayout,
  classContent,
}: LayoutProps) => {
  useScroll();
  return (
    <>
      <div
        className={twMerge("flex h-auto w-full justify-center", classLayout)}
      >
        <div className={twMerge("w-full max-w-[1024px]", classContent)}>
          {children}
        </div>
      </div>
    </>
  );
};
