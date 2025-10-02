import { useState } from "react";

// Props per il componente CurriculumDownload
interface CurriculumDownloadProps {
  closeSideBar?: () => void;
}

export const CurriculumDownload = ({
  closeSideBar,
}: CurriculumDownloadProps) => {
  const [showOptions, setShowOptions] = useState(false);
  // Handler per il click sul download
  const handleDownload = () => {
    setShowOptions(false);
    closeSideBar?.();
  };

  return (
    <div className="relative">
      {/* Pulsante per mostrare le opzioni CV */}
      <button
        onClick={() => {
          setShowOptions(!showOptions);
        }}
        className="text-base font-semibold"
      >
        Curriculum
      </button>

      {/* Opzioni di download CV */}

      <div
        className={`absolute left-0 -right-10 mt-2 shadow-lg bg-base-100 transition-transform duration-300 ease-in-out ${
          showOptions ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <a
          href="/assets/curriculum/CV-Smailen-Vargas-Frontend-IT.pdf"
          download="CV-Smailen-Vargas-Frontend-IT.pdf"
          className="block w-full p-3 text-left transition-colors hover:bg-gray-100"
          onClick={handleDownload}
        >
          Curriculum in Italiano
        </a>
        <a
          href="/assets/curriculum/CV-Smailen-Vargas-Frontend-EN.pdf"
          download="CV-Smailen-Vargas-Frontend-EN.pdf"
          className="block w-full p-3 text-left transition-colors hover:bg-gray-100"
          onClick={handleDownload}
        >
          Curriculum in Inglese
        </a>
      </div>
    </div>
  );
};
