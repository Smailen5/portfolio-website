import { CurriculumDownload } from "@/features/cv/components/CurriculumDownload";
import { NAVIGATION_LINKS } from "@/shared/constants/navigation";
import { Link } from "@tanstack/react-router";

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
          <div className="flex items-center justify-between pb-6">
            <button onClick={() => setIsOpen(false)}>chiudi</button>
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
