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

  // Layout: mostra nome e icone affiancati in mobile e in desktop mostra solo icona con tooltip

  return (
    <li className="border-accent text-accent-content mb-4 flex items-center justify-between rounded-md border-2 p-2 lg:tooltip lg:cursor-pointer" data-tip={name}>
      <p className="font-semibold uppercase md:hidden">{name}</p>
      <img src={icon} alt={name + "icon"} className={`${iconSize}`} />
    </li>
  );
};

export default Skills;
