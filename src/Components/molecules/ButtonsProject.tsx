import { Button } from "@/Components/atoms/button";
import { useNavigate } from "react-router-dom";

type ButtonsProjectType = {
  nome:string;
};

export const ButtonsProject: React.FC<ButtonsProjectType> = ({
  nome,
}) => {

  const navigate = useNavigate()

  const goToProject = (nome:string)=>{
    navigate(`/projects/${nome}`)
  }

  // Gestisci qui lo stile dei bottoni
  const buttonClass = "";
  return (
    <div className="space-x-8">
      {/* <Button variant="outline" className={`${buttonClass}`}>
        <a href={linkSite} target="_blank" rel="noopener noreferrer">
          guarda ora
        </a>
      </Button> */}
      <Button variant="outline" className={`${buttonClass}`} onClick={()=> goToProject(nome)}>
          dettagli
      </Button>
    </div>
  );
};
