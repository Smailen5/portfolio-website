import { Button } from "@/Components/atoms/button";
import { icons } from "../../assets/icons/index";
import React from "react";

type ButtonSocialType = {
  name: string;
  link: string;
  icon: keyof typeof icons;
};

const ButtonSocial: React.FC<ButtonSocialType> = ({ name, link, icon }) => {
  const IconComponent = icons[icon] as React.FC<React.SVGProps<SVGElement>> | string;

  const handleNavigation = () => {
    setTimeout(() => {
      window.open(link, "_blank", "noopener noreferrer");
    }, 500);
  };

  return (
    <Button variant={"ghost"} size="lg" className="" onClick={handleNavigation}>
      {typeof IconComponent === "string" ? (
        <img src={IconComponent} alt={`${name} icon`} />
      ) : (
        <IconComponent />
      )}
      {/* {React.createElement(icons[icon])} */}
      <span className="font-semibold uppercase">{name}</span>
    </Button>
  );
};

export default ButtonSocial;
