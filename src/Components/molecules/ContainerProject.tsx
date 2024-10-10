type ContainerProject = {
    title: string;
    technologies: string[];
    children: React.ReactNode;
}

export const ContainerProject:React.FC<ContainerProject> = ({ title, technologies, children }) => {
  return (
    <div className="flex flex-1 flex-col justify-between gap-2 p-4 text-left">
      <h3 className="text-2xl font-bold uppercase">{title}</h3>
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
