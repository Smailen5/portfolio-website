/* eslint-disable react/prop-types */
const Social = ({ name, link }) => {
  return (
    <div className="flex items-center justify-center bg-blue-600 p-4">
      <a href={link} className="font-semibold uppercase text-white">
        {name}
      </a>
    </div>
  );
};

export default Social;
