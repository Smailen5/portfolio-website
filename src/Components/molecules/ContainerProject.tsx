import { nameCorrect } from "@/utils/nameCorrect";

type ContainerProject = {
  name: string;
  technologies: string[];
  children: React.ReactNode;
};

export const ContainerProject: React.FC<ContainerProject> = ({
  name,
  children,
  technologies,
}) => {
  // console.log(technologies);
  if(technologies === undefined){
    return null
  }
  
  return (
    <div className="flex flex-1 flex-col justify-between gap-2 p-4 text-left">
      <h3 className="text-2xl font-bold uppercase">{nameCorrect(name)}</h3>
      {/* array delle tecnologie utilizzate */}
      <div className="flex flex-wrap gap-4 uppercase">
        {technologies.map((tech) => {
          return (
            <h4 key={tech} className="font-semibold">
              {tech}
            </h4>
          );
        })}
      </div>
      {children}
    </div>
  );
};
