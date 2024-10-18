import useScroll from "../../utils/useScroll";
import Footer from "./Footer";
import NavbarSample from "./Navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  useScroll();
  return (
    <>
      <NavbarSample />
      <div className="min-h-screen bg-neutral-50 py-16 xl:flex xl:justify-center">
        <div className="mt-20 flex flex-col justify-around gap-20 px-6 xl:max-w-[1024px]">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};
