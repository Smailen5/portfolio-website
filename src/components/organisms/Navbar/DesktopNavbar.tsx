import { CurriculumDownload } from "@/features/cv/components/CurriculumDownload";
import { NAVIGATION_LINKS } from "@/shared/constants/navigation";
import { Link } from "@tanstack/react-router";

export const DesktopNavbar = () => {
  return (
    <>
      <nav className='flex items-center gap-4'>
        {NAVIGATION_LINKS.map((link) => (
          <Link
          key={link.params}
          to={link.linkTo}
          params={link.params}
          className="capitalize"
          >
            {link.params}
          </Link>
        ))}
        <CurriculumDownload />
        <div>toggle tema</div>
      </nav>
    </>
  );
};
