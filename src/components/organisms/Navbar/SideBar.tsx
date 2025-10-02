import { CurriculumDownload } from "@/features/cv/components/CurriculumDownload";
import { NAVIGATION_LINKS } from "@/shared/constants/navigation";
import { Link } from "@tanstack/react-router";
import { CloseIcon } from "@/assets/icons";

export const SideBar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const closeSideBar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Overlay scuro che copre la pagina quando SideBar è aperto */}
      <div
        className={`bg-base-300 fixed inset-0 z-10 h-screen transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-80" : "pointer-events-none opacity-0"} `}
        onClick={closeSideBar}
      />

      {/* Contenitore principale della SideBar */}
      <div
        className={`bg-base-200 fixed inset-y-0 top-0 right-0 z-20 h-screen w-[70%] transform shadow-lg transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex items-center justify-end pb-6 pr-2">
            <button
              onClick={() => setIsOpen(false)}
              className="btn btn-error btn-circle"
            >
              <img src={CloseIcon} alt="close" />
            </button>
          </div>

          <nav className="flex flex-col gap-4">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.params}
                to={link.linkTo}
                params={link.params}
                className="capitalize"
                onClick={closeSideBar}
              >
                {link.params}
              </Link>
            ))}
            <CurriculumDownload closeSideBar={closeSideBar} />
          </nav>
        </div>
      </div>
    </>
  );
};
