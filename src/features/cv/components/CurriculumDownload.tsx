// Props per il componente CurriculumDownload
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
    <>
      <details className="dropdown">
        <summary className="m-1 text-base font-semibold">Curriculum</summary>

        <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
          <li>
            <a
              href="/assets/curriculum/CV-Smailen-Vargas-Frontend-IT.pdf"
              download="CV-Smailen-Vargas-Frontend-IT.pdf"
              onClick={handleDownload}
            >
              Curriculum in Italiano
            </a>
          </li>
          <li>
            <a
              href="/assets/curriculum/CV-Smailen-Vargas-Frontend-EN.pdf"
              download="CV-Smailen-Vargas-Frontend-EN.pdf"
              onClick={handleDownload}
            >
              Curriculum in Inglese
            </a>
          </li>
        </ul>
      </details>
    </>
  );
};
