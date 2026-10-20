interface CurriculumDownloadProps {
  closeSideBar?: () => void;
}

export const CurriculumDownload = ({
  closeSideBar,
}: CurriculumDownloadProps) => {
  // Handler per il click sul download
  const handleDownload = () => {
    closeSideBar?.();
  };

  return (
    <details className="dropdown">
      <summary className="m-1 text-base font-semibold lg:cursor-pointer">
        Curriculum
      </summary>

      <ul className="dropdown-content menu rounded-box bg-base-100 z-10 w-52 p-2 shadow-sm">
        <li>
          <a
            href="/curriculum/cv-smailen-vargas-it.pdf"
            download="CV-Smailen-Vargas-IT.pdf"
            onClick={handleDownload}
          >
            Curriculum in Italiano
          </a>
        </li>
        <li>
          <a
            href="/curriculum/cv-smailen-vargas-en.pdf"
            download="CV-Smailen-Vargas-EN.pdf"
            onClick={handleDownload}
          >
            Curriculum in Inglese
          </a>
        </li>
      </ul>
    </details>
  );
};
