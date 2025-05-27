import { useState } from "react";
import { Link } from "react-router-dom";
import { CurriculumDownload } from "@features/cv/components/CurriculumDownload";
import { ModeToggle } from "@features/theme/components/ModeToggle";

// Props per il componente LinkNavbar
interface LinkNavbarProps {
  linkCurriculumIT: string; // Link al CV in italiano
  linkCurriculumEN: string; // Link al CV in inglese
}

export const LinkNavbar = ({
  linkCurriculumIT,
  linkCurriculumEN,
}: LinkNavbarProps) => {
  // Stato per il menu a tendina del curriculum
  const [showCVOptions, setShowCVOptions] = useState(false);

  return (
    <nav className="flex items-center gap-4">
      {/* Link di navigazione principali */}
      <Link
        to="/"
        className="block rounded-lg p-2 text-foreground hover:bg-primary/20"
      >
        Home
      </Link>
      <Link
        to="/projects"
        className="block rounded-lg p-2 text-foreground hover:bg-primary/20"
      >
        Progetti
      </Link>
      <Link
        to="/contact"
        className="block rounded-lg p-2 text-foreground hover:bg-primary/20"
      >
        Contattami
      </Link>

      <CurriculumDownload
        linkCurriculumIT={linkCurriculumIT}
        linkCurriculumEN={linkCurriculumEN}
        showOptions={showCVOptions}
        onToggle={() => setShowCVOptions(!showCVOptions)}
        variant="dropdown"
      />

      {/* Toggle per il tema chiaro/scuro */}
      <ModeToggle />
    </nav>
  );
};
