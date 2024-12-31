import { Button } from "../atoms/button";

// Props per il componente CurriculumDownload
interface CurriculumDownloadProps {
  linkCurriculumIT: string; // Link al CV in italiano
  linkCurriculumEN: string; // Link al CV in inglese
  showOptions: boolean; // Stato di visibilità del menu
  onToggle: () => void; // Funzione per toggleare il menu
  onDownload?: () => void; // Funzione opzionale da chiamare dopo il download
  variant?: "dropdown" | "sidebar"; // Variante di stile
}

export const CurriculumDownload = ({
  linkCurriculumIT,
  linkCurriculumEN,
  showOptions,
  onToggle,
  onDownload,
  variant = "dropdown",
}: CurriculumDownloadProps) => {
  // Handler per il click sul download
  const handleDownload = () => {
    onDownload?.();
    onToggle();
  };

  return (
    <div className={variant === "dropdown" ? "relative" : ""}>
      {/* Pulsante per mostrare le opzioni CV */}
      <Button
        onClick={onToggle}
        variant="ghost"
        className={`text-base ${variant === "sidebar" ? "w-full justify-start px-2" : "font-semibold"}`}
      >
        Curriculum
      </Button>

      {/* Opzioni di download CV */}
      {showOptions && (
        <div
          className={`${
            variant === "dropdown"
              ? "absolute right-0 top-full z-50 mt-2"
              : "mt-4 w-full"
          } flex w-48 flex-col gap-2 rounded-lg ${
            variant === "dropdown" ? "bg-background p-2 shadow-lg" : ""
          }`}
        >
          <a
            href={linkCurriculumIT}
            download="CV-Smailen-Vargas-Frontend-IT.pdf"
            className="block rounded-lg bg-primary p-2 text-center text-primary-foreground hover:bg-primary/90"
            onClick={handleDownload}
          >
            Curriculum in Italiano
          </a>
          <a
            href={linkCurriculumEN}
            download="CV-Smailen-Vargas-Frontend-EN.pdf"
            className="block rounded-lg bg-primary p-2 text-center text-primary-foreground hover:bg-primary/90"
            onClick={handleDownload}
          >
            Curriculum in English
          </a>
        </div>
      )}
    </div>
  );
};
