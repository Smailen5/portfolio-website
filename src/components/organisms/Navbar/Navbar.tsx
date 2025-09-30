import { useState } from "react";
import { SideBar } from "./SideBar";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between bg-red-500 px-4 py-2">
        <div>logo</div>
        <div>
          <button onClick={() => setIsOpen(true)}>Menu</button>
        </div>
      </nav>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
