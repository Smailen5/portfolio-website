import NavbarSample from "./Navbar";
import Footer from "./Footer";

export const Layout = ({ children }: { children: React.ReactNode }) => {
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
