/* eslint-disable react/prop-types */
const Social = ({ name, link }) => {
  return (
    <div className="flex items-center justify-center bg-green-300 p-4">
      <a href={link} className="font-semibold uppercase">
        {name}
      </a>
    </div>
  );
};

export default Social;
