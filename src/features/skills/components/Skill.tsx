import { useGlobalContext } from "@/shared/utils/context";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@components/atoms/tooltip";

// Componente per visualizzare una singola skill/tecnologia
const Skills = ({
  name, // Nome della tecnologia
  icon, // URL dell'icona della tecnologia
}: {
  name: string;
  icon: string;
}) => {
  // Hook per la larghezza della finestra
  const { useWindowWidth } = useGlobalContext();
  const width = useWindowWidth();

  // Dimensione fissa per le icone
  const iconSize = "w-12 h-12";

  // Layout mobile: mostra nome e icona affiancati
  if (width < 720) {
    return (
      <li className="mb-4 flex items-center justify-between rounded-md border-2 border-card p-2 text-card-foreground">
        <p className="font-semibold uppercase">{name}</p>
        <img src={icon} alt={name + "icon"} className={`${iconSize}`} />
      </li>
    );
  }

  // Layout desktop: mostra solo icona con tooltip
  return (
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
  );
};

export default Skills;
