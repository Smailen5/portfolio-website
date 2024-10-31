interface SectionProps {
  title: string;
  content: string[];
}

export const Section = ({ title, content }: SectionProps) => {
  return (
    <div>
      <header>
        <h3 className="font-semibold text-xl">{title}</h3>
      </header>
      <ul className="grid grid-cols-2">
        {content.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </div>
  );
};
