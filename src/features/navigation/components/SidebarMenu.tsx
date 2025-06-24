import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@components/atoms/Button";
import { CurriculumDownload } from "@features/cv/components/CurriculumDownload";
import { ModeToggle } from "@features/theme/components/ModeToggle";

// Props per il componente SidebarMenu
interface SidebarMenuProps {
  isOpen: boolean; // Stato di apertura/chiusura della sidebar
  setIsOpen: (isOpen: boolean) => void; // Funzione per controllare lo stato della sidebar
  linkCurriculumIT: string; // Link al CV in italiano
  linkCurriculumEN: string; // Link al CV in inglese
}

export const SidebarMenu = ({
  isOpen,
  setIsOpen,
  linkCurriculumIT,
  linkCurriculumEN,
}: SidebarMenuProps) => {
  // Stato per il menu a tendina del curriculum
  const [showCVOptions, setShowCVOptions] = useState(false);

  // Handlers per le interazioni utente
  const toggleSidebar = () => {
    setIsOpen(false); // Chiude la sidebar
    setShowCVOptions(false); // Chiude il menu CV
  };
  const toggleCVOptions = () => setShowCVOptions(!showCVOptions); // Toggle menu CV

  return (
    <>
      {/* Overlay scuro che copre la pagina quando la sidebar è aperta */}
      <div
        className={`fixed inset-0 z-20 h-screen bg-background transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-80" : "pointer-events-none opacity-0"
        }`}
        onClick={toggleSidebar}
      />

      {/* Contenitore principale della sidebar */}
      <div
        className={`fixed inset-y-0 right-0 top-0 z-50 h-screen w-64 transform bg-background shadow-lg transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          {/* Header della sidebar con toggle tema e pulsante chiusura */}
          <div className="mb-8 flex items-center justify-between">
            <ModeToggle />
            <Button onClick={toggleSidebar} variant={"destructive"}>
              ✕
            </Button>
          </div>

          {/* Menu di navigazione */}
          <nav className="flex flex-col gap-4">
            {/* Link di navigazione */}
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
            {/* Pulsante per mostrare le opzioni CV */}
            <CurriculumDownload
              linkCurriculumIT={linkCurriculumIT}
              linkCurriculumEN={linkCurriculumEN}
              showOptions={showCVOptions}
              onToggle={toggleCVOptions}
              onDownload={toggleSidebar}
              variant="sidebar"
            />
          </nav>
        </div>
      </div>
    </>
  );
};
