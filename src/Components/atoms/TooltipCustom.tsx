import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

// Props per il componente TooltipCustom
interface TooltipCustomProps {
  trigger: string; // Testo che attiva il tooltip
  content: string; // Contenuto del tooltip
}

// Componente per mostrare tooltip personalizzati
export const TooltipCustom = ({ trigger, content }: TooltipCustomProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <strong>{trigger}</strong>
        </TooltipTrigger>
        <TooltipContent>{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
