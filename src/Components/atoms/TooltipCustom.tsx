import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

interface TooltipCustomProps {
  trigger: string;
  content: string;
}

export const TooltipCustom = ({ trigger, content }: TooltipCustomProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        {" "}
        <TooltipTrigger>
          <strong>{trigger}</strong>
        </TooltipTrigger>
        <TooltipContent>{content}</TooltipContent>{" "}
      </Tooltip>
    </TooltipProvider>
  );
};
