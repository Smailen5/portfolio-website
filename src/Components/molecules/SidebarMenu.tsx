import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../atoms/button";
import { ModeToggle } from "./ModeToggle";

interface SidebarMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  linkCurriculumIT: string;
  linkCurriculumEN: string;
}

export const SidebarMenu = ({
  isOpen,
  setIsOpen,
  linkCurriculumIT,
  linkCurriculumEN,
}: SidebarMenuProps) => {
  const [showCVOptions, setShowCVOptions] = useState(false);

  const toggleSidebar = () => setIsOpen(false);
  const toggleCVOptions = () => setShowCVOptions(!showCVOptions);
  const toggleCvDownloaded = () => {
    setIsOpen(false);
    setShowCVOptions(false);
  };

  return (
    <>
      {/* overlay */}
      <div
        className={`fixed inset-0 z-20 h-screen bg-background transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-80" : "pointer-events-none opacity-0"
        }`}
        onClick={toggleSidebar}
      />

      {/* Sfondo sidebar */}
      <div
        className={`fixed inset-y-0 right-0 top-0 z-50 h-screen w-64 transform bg-background shadow-lg transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="mb-8 flex items-center justify-between">
            <ModeToggle />
            <Button onClick={toggleSidebar} variant={"destructive"}>
              ✕
            </Button>
          </div>

          <nav className="flex flex-col gap-4">
            <Link
              to="/"
              className="block rounded-lg p-2 text-foreground hover:bg-primary/20"
              onClick={toggleSidebar}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="block rounded-lg p-2 text-foreground hover:bg-primary/20"
              onClick={toggleSidebar}
            >
              Progetti
            </Link>
            <Link
              to="/contact"
              className="block rounded-lg p-2 text-foreground hover:bg-primary/20"
              onClick={toggleSidebar}
            >
              Contattami
            </Link>
            <button
              onClick={toggleCVOptions}
              className="rounded-lg p-2 text-left text-foreground hover:bg-primary/20"
            >
              Curriculum
            </button>

            {showCVOptions && (
              <div className="ml-4 flex flex-col gap-2">
                <a
                  href={linkCurriculumIT}
                  download="CV-Smailen-Vargas-Frontend-IT.pdf"
                  className="block rounded-lg bg-primary p-2 text-center text-primary-foreground hover:bg-primary/90"
                  onClick={toggleCvDownloaded}
                >
                  Curriculum in Italiano
                </a>
                <a
                  href={linkCurriculumEN}
                  download="CV-Smailen-Vargas-Frontend-EN.pdf"
                  className="block rounded-lg bg-primary p-2 text-center text-primary-foreground hover:bg-primary/90"
                  onClick={toggleCvDownloaded}
                >
                  Curriculum in English
                </a>
              </div>
            )}
          </nav>
        </div>
      </div>
    </>
  );
};
