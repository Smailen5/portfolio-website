import { nameCorrect } from "@/shared/utils/nameCorrect";
import { truncate } from '@/shared/utils/truncate';
import { Header } from "@components/atoms/Header";
import { Section } from "@components/atoms/Section";

type ContainerProject = {
  name: string;
  technologies: string[];
  children: React.ReactNode;
  description: string | null;
};

export const ContainerProject: React.FC<ContainerProject> = ({
  name,
  children,
  technologies,
  description,
}) => {
  return (
    <Section className="gap-4 p-4 md:gap-6 h-[500px] md:h-[320px] flex flex-col justify-between">
      <Header type="h3" className="text-left uppercase">
        {nameCorrect(name)}
      </Header>
      {!description ? <p>Descrizione non disponibile</p> : <p className='line-clamp-3'>{truncate(description)}</p>}
      {/* array delle tecnologie utilizzate */}
      <ul className="flex flex-wrap gap-2 uppercase">
        {!technologies ? (
          <p>Tecnologie non disponibili</p>
        ) : (
          [...technologies].sort((a, b) => a.localeCompare(b)).map((tech) => {
            return (
              <li key={tech} className="text-xs font-semibold md:text-sm">
                {tech}
              </li>
            );
          })
        )}
      </ul>
      {children}
    </Section>
  );
};
