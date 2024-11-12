import { nameCorrect } from "@/utils/nameCorrect";
import { Header } from "../atoms/Header";
import { Section } from "../atoms/Section";

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
  if (technologies === undefined) {
    return null;
  }

  return (
    <Section className="gap-4 p-4 md:gap-6">
      <Header type="h3" className="text-left uppercase">
        {nameCorrect(name)}
      </Header>
      {/* array delle tecnologie utilizzate */}
      <ul className="flex flex-wrap gap-4 uppercase">
        {technologies.map((tech) => {
          return (
            <li key={tech} className="text-xs font-semibold md:text-sm">
              {tech}
            </li>
          );
        })}
      </ul>
      {children}
    </Section>
  );
};
