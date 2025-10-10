import { icons } from "@/assets/icons/index";

type IconType = {
  name: string;
  icon: keyof typeof icons;
  link: string;
};

export const Icon: React.FC<IconType> = ({ name, icon, link }) => {
  const IconImg = icons[icon];
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 hover:space-x-4 lg:space-x-0"
    >
      <img srcSet={IconImg} alt={name} className="size-5" />
      <span className="max-h-6 overflow-hidden font-semibold uppercase transition-all duration-700 ease-in-out group-hover:max-w-xs lg:max-w-0 lg:opacity-0 group-hover:lg:opacity-100">
        {name}
      </span>
    </a>
  );
};
