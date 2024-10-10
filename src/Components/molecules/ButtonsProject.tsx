import { Button } from "@nextui-org/react";

type ButtonsProjectType = {
  linkSite: string;
  linkRepo: string;
};

export const ButtonsProject: React.FC<ButtonsProjectType> = ({
  linkSite,
  linkRepo,
}) => {
  return (
    <div className="space-x-8">
      <Button color="primary" variant="bordered">
        <a href={linkSite} target="_blank" rel="noopener noreferrer">
          guarda ora
        </a>
      </Button>
      <Button color="primary" variant="bordered">
        <a href={linkRepo} target="_blank" rel="noopener noreferrer">
          codice
        </a>
      </Button>
    </div>
  );
};
