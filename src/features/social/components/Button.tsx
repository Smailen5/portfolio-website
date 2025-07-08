import { icons } from "@/assets/icons/index";
import { Button } from "@/components/atoms/Button";
import { useState } from "react";

type ButtonSocialType = {
  name: string;
  link: string;
  icon: keyof typeof icons;
};

const ButtonSocial: React.FC<ButtonSocialType> = ({ name, link, icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = icons[icon];

  const handleNavigation = () =>
    window.open(link, "_blank", "noopener noreferrer");

  return (
    <Button
      variant={"ghost"}
      size="default"
      onClick={handleNavigation}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={()=> setIsHovered(false)}
      className={`space-x-4 group ${isHovered ? "space-x-4" : "md:space-x-0"}`}
    >
      <img srcSet={IconComponent} alt={`${name} icon`} className="size-5" />
      <span
        className={`overflow-hidden font-semibold uppercase transition-all duration-700 ease-in-out md:${
          isHovered ? "max-w-xs md:opacity-100 " : "max-w-0 md:opacity-0 "
        }`}
      >
        {name}
      </span>
    </Button>
  );
};

export default ButtonSocial;
