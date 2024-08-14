/* eslint-disable react/prop-types */
const Social = ({ name, link }) => {
  return (
    <div className="flex items-center justify-center rounded-md bg-blue-600 p-4 shadow-md shadow-blue-500">
      <a href={link} target="_blank" rel="noopener noreferrer" className="font-semibold uppercase text-white">
        {name}
      </a>
    </div>
  );
};

export default Social;
