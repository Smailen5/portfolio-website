import useScroll from "../../utils/useScroll";
import Footer from "./Footer";
import NavbarSample from "./Navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  useScroll();
  return (
    <>
      <NavbarSample />
      <div className="flex h-auto w-full justify-center bg-background">
        <main className="flex w-full max-w-[1024px] flex-col flex-nowrap gap-20 px-6 pb-14 pt-36 md:items-center">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};
