// Componente per visualizzare una singola skill/tecnologia
const Skills = ({
  name, // Nome della tecnologia
  icon, // URL dell'icona della tecnologia
}: {
  name: string;
  icon: string;
}) => {
  // Dimensione fissa per le icone
  const iconSize = "w-12 h-12";

  // Layout mobile: mostra nome e icona affiancati

  return (
    <li className="border-accent text-accent-content mb-4 flex items-center justify-between rounded-md border-2 p-2">
      <p className="font-semibold uppercase">{name}</p>
      <img src={icon} alt={name + "icon"} className={`${iconSize}`} />
    </li>
  );
};

export default Skills;
