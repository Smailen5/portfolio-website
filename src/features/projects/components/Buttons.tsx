import { useNavigate } from "@tanstack/react-router";

type ButtonsProjectType = {
  nome: string;
};

export const ButtonsProject: React.FC<ButtonsProjectType> = ({ nome }) => {
  const navigate = useNavigate();

  const goToProject = (nome: string) => {
    navigate({ to: `/projects/${nome}` });
  };

  return (
    // <div className="space-x-8">
    <button onClick={() => goToProject(nome)}>dettagli</button>
    // </div>
  );
};
