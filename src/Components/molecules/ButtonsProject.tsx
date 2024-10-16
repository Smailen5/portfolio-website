import { Button } from "@/Components/atoms/button";
import { useNavigate } from "react-router-dom";

type ButtonsProjectType = {
  // linkSite: string;
  // linkRepo: string;
  nome:string;
};

export const ButtonsProject: React.FC<ButtonsProjectType> = ({
  // linkSite,
  // linkRepo,
  nome,
}) => {

  const navigate = useNavigate()

  const goToProject = (nome:string)=>{
    // console.log("Navigate to projects:", nome);
    
    navigate(`/projects/${nome}`)
  }

  // Gestisci qui lo stile dei bottoni
  const buttonClass = "border-primary";
  return (
    <div className="space-x-8">
      {/* <Button variant="outline" className={`${buttonClass}`}>
        <a href={linkSite} target="_blank" rel="noopener noreferrer">
          guarda ora
        </a>
      </Button> */}
      <Button variant="outline" className={`${buttonClass}`} onClick={()=> goToProject(nome)}>
        {/* <a href={linkRepo} target="_blank" rel="noopener noreferrer"> */}
          dettagli
        {/* </a> */}
      </Button>
    </div>
  );
};
