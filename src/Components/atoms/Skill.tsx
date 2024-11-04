import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

const Skills = ({ name, icon }: { name: string; icon: string }) => {
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
