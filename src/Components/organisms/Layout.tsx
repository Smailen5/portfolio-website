import useScroll from "../../utils/useScroll";
import Footer from "./Footer";
import NavbarSample from "./Navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  useScroll();
  return (
    <>
      <NavbarSample />
      <div className="flex h-auto w-full flex-col items-center bg-background">
        <main className="flex w-full max-w-[1024px] flex-col flex-nowrap items-center justify-center gap-20 px-6 pb-14 pt-36">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};
