import { useState } from "react";
import { Link } from "react-router-dom";
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

  const toggleSidebar = () => setIsOpen(!isOpen)
  const toggleCVOptions = () => setShowCVOptions(!showCVOptions);
  const cvDownloaded = ()=> {
    setIsOpen(false);
    setShowCVOptions(false)
  }

  return (
    <>
      {/* <button
        onClick={toggleSidebar}
        className="relativ z-50 rounded-lg p-2 text-foreground hover:bg-primary/20"
      >
        Menu
      </button> */}

      {/* overlay */}
      <div
        className={`fixed inset-0 z-20 h-screen bg-background transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-80" : "pointer-events-none opacity-0"
        }`}
        onClick={toggleSidebar}
      />

      {/* Sfondo sidebar */}
      <div
        className={`fixed inset-y-0 right-0 top-0 z-50 h-screen w-64 transform border-l bg-background shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className=" p-4">
          <div className="mb-8 flex items-center justify-between">
            <ModeToggle />
            <button
              onClick={toggleSidebar}
              className="rounded-lg p-2 text-foreground hover:bg-primary/20"
            >
              ✕
            </button>
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
                  onClick={cvDownloaded}
                >
                  Curriculum in Italiano
                </a>
                <a
                  href={linkCurriculumEN}
                  download="CV-Smailen-Vargas-Frontend-EN.pdf"
                  className="block rounded-lg bg-primary p-2 text-center text-primary-foreground hover:bg-primary/90"
                  onClick={cvDownloaded}
                >
                  Curriculum in Inglese
                </a>
              </div>
            )}
          </nav>
        </div>
      </div>

      {/* <div
        className={`fixed right-0 top-0 z-30 h-full w-64 transform bg-blue-500 p-4 shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <ModeToggle />
          <button
            onClick={toggleSidebar}
            className="rounded-lg p-2 text-foreground hover:bg-primary/20"
          >
            ✕
          </button>
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
                onClick={toggleSidebar}
              >
                Curriculum in Italiano
              </a>
              <a
                href={linkCurriculumEN}
                download="CV-Smailen-Vargas-Frontend-EN.pdf"
                className="block rounded-lg bg-primary p-2 text-center text-primary-foreground hover:bg-primary/90"
                onClick={toggleSidebar}
              >
                Curriculum in Inglese
              </a>
            </div>
          )}
        </nav>
      </div> */}

      {/* {isOpen && (
        <div
          className="fixed inset-0 z-[9998] bg-black/50"
          onClick={toggleSidebar}
        />
      )} */}
    </>
  );
};
