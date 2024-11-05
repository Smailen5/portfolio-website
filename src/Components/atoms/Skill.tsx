import { useGlobalContext } from "@/utils/context";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

const Skills = ({ name, icon }: { name: string; icon: string }) => {
  const { useWindowWidth } = useGlobalContext();
  const width = useWindowWidth();

  const iconSize = "w-12 h-12";

  if (width < 720) {
    return (
      <>
        <li className="mb-4 flex items-center justify-between rounded-md border-2 border-card p-2 text-card-foreground">
          <p className="font-semibold uppercase">{name}</p>
          <img src={icon} alt={name + "icon"} className={`${iconSize}`} />
        </li>
      </>
    );
  }

  return (
    <>
      <li>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <img src={icon} alt={name + " icon"} className={`${iconSize}`} />
            </TooltipTrigger>
            <TooltipContent>{name}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </li>
    </>
  );
};

export default Skills;
