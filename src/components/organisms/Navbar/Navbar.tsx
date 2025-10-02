import { Avatar } from '@/components/atoms/Avatar';
import { useState } from "react";
import { DesktopNavbar } from "./DesktopNavbar";
import { SideBar } from "./SideBar";
import { ToggleTheme } from '@/components/molecules/ToggleTheme';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between bg-base-100 px-4 py-2">
        <Avatar name='Smailen Vargas'/>
        <ToggleTheme />

        {/* Menu Mobile: Bottone menu + SideBar */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(true)} className='btn'>Menu</button>

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
