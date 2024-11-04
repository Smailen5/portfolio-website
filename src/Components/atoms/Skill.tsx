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

  if (width < 720) {
    return (
      <>
        <li className="flex items-center justify-between rounded-md bg-card p-2">
          <p className="font-semibold uppercase">{name}</p>
          <img src={icon} alt={name + "icon"} />
        </li>
      </>
    );
  }

  return (
    <>
      <li className="">
        {/* <p className="text-xs font-semibold uppercase hidden">{name}</p> */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <img src={icon} alt={name + " icon"} />
            </TooltipTrigger>
            <TooltipContent>{name}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </li>
    </>
  );
};

export default Skills;
