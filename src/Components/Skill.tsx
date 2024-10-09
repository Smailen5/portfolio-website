import PropTypes from "prop-types";

const Skills = ({ name, icon }) => {
  return (
    <div className="flex items-center justify-between rounded-md bg-white p-4 uppercase shadow-md shadow-slate-400">
      <p className="font-semibold uppercase">{name}</p>
      <img src={icon} alt={name + " icon"} />
    </div>
  );
};

Skills.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default Skills;
