import { Button } from "@/components/atoms/Button";
import { useNavigate } from "react-router-dom";

type ButtonsProjectType = {
  nome: string;
};

export const ButtonsProject: React.FC<ButtonsProjectType> = ({ nome }) => {
  const navigate = useNavigate();

  const goToProject = (nome: string) => {
    navigate(`/projects/${nome}`);
  };

  return (
    // <div className="space-x-8">
      <Button variant="outline" onClick={() => goToProject(nome)}>
        dettagli
      </Button>
    // </div>
  );
};
