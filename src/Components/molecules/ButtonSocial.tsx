import { Button } from "@/Components/atoms/button";
import { icons } from "../../assets/icons/index";

type ButtonSocialType = {
  name: string;
  link: string;
  icon: keyof typeof icons;
};

const ButtonSocial: React.FC<ButtonSocialType> = ({ name, link, icon }) => {
  const IconComponent = icons[icon];

  const handleNavigation = () =>
    window.open(link, "_blank", "noopener noreferrer");

  return (
    <Button
      variant={"ghost"}
      size="lg"
      onClick={handleNavigation}
      className="space-x-4"
    >
      <img srcSet={IconComponent} alt={`${name} icon`} className="size-5" />
      <span className="font-semibold uppercase">{name}</span>
    </Button>
  );
};

export default ButtonSocial;
