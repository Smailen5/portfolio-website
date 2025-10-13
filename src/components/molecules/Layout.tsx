import useScroll from "@/shared/hooks/useScroll";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  useScroll();
  return (
    <>
      <div className="flex h-auto w-full justify-center">
        <div className="flex w-full max-w-[1024px] flex-col flex-nowrap gap-20 px-6 pb-14 pt-36 md:items-center">
          {children}
        </div>
      </div>
    </>
  );
};
