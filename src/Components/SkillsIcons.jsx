/* eslint-disable react/prop-types */
const SkillsIcons = ({ name, icon }) => {
  console.log(icon);
  
  return (
    <div className="flex items-center justify-between bg-green-300 p-4 uppercase">
      <p className="font-semibold uppercase">{name}</p>
      <img src={icon} alt="non ce img" />
    </div>
  );
};

export default SkillsIcons;
