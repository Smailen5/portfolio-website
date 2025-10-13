import { Avatar } from "@/components/atoms/Avatar";
import { ToggleTheme } from "@/components/molecules/ToggleTheme";
import { CurriculumDownload } from "@/features/cv/components/CurriculumDownload";
import { NAVIGATION_LINKS } from "@/shared/constants/navigation";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { SideBar } from "./SideBar";
import { Layout } from '@/components/molecules/Layout';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Layout */}
          <Layout>

          {/* Navbar */}
          <nav className="bg-base-100 flex items-center justify-between px-4 py-2">
            <Avatar name="Smailen Vargas" />

            <div className="flex items-center gap-4">
              <ToggleTheme />

              {/* Menu Mobile: Bottone menu + SideBar */}
              <div className="lg:hidden">
                <button onClick={() => setIsOpen(true)} className="btn">
                  Menu
                </button>

                <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>

              {/* Menu Desktop */}
              <div className="hidden lg:block">
                <nav className="flex items-center gap-4">
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
                </nav>
              </div>
            </div>
          </nav>
          </Layout>
    </>
  );
};
