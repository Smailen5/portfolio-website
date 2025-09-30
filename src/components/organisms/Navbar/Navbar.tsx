import { useState } from "react";
import { DesktopNavbar } from "./DesktopNavbar";
import { SideBar } from "./SideBar";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between bg-red-500 px-4 py-2">
        <div>logo</div>

        {/* Menu Mobile: Bottone menu + SideBar */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(true)}>Menu</button>

          <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {/* Menu Desktop */}
        <div className="hidden lg:block">
          <DesktopNavbar />
        </div>
      </nav>
    </>
  );
};
