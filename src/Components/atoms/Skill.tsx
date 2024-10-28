const Skills = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <div className="flex items-center justify-between rounded-md bg-white p-4 uppercase shadow-md shadow-slate-400">
      <p className="font-semibold uppercase">{name}</p>
      <img src={icon} alt={name + " icon"} />
    </div>
  );
};

export default Skills;
