import { Avatar } from "@/components/atoms/Avatar";
import { ToggleTheme } from "@/components/molecules/ToggleTheme";
import { useState } from "react";
import { DesktopNavbar } from "./DesktopNavbar";
import { SideBar } from "./SideBar";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-base-100 flex items-center justify-between px-4 py-2">
        <Avatar name="Smailen Vargas" />

        <div className='flex items-center gap-4'>
          <ToggleTheme />

          {/* Menu Mobile: Bottone menu + SideBar */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(true)} className="btn">
              Menu
            </button>

            <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>

          {/* Menu Desktop */}
          <div className="hidden lg:block">
            <DesktopNavbar />
          </div>
        </div>
      </nav>
    </>
  );
};
