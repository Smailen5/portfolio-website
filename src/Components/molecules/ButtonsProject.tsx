import { Button } from "@/Components/atoms/button";

type ButtonsProjectType = {
  linkSite: string;
  linkRepo: string;
};

export const ButtonsProject: React.FC<ButtonsProjectType> = ({
  linkSite,
  linkRepo,
}) => {
  // Gestisci qui lo stile dei bottoni
  const buttonClass = "border-primary";
  return (
    <div className="space-x-8">
      <Button variant="outline" className={`${buttonClass}`}>
        <a href={linkSite} target="_blank" rel="noopener noreferrer">
          guarda ora
        </a>
      </Button>
      <Button variant="outline" className={`${buttonClass}`}>
        <a href={linkRepo} target="_blank" rel="noopener noreferrer">
          codice
        </a>
      </Button>
    </div>
  );
};
