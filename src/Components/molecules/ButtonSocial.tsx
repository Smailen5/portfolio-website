import { Button } from "@nextui-org/react";
// import PropTypes from "prop-types";

type ButtonSocialType = {
  name: string;
  link: string;
};

const ButtonSocial: React.FC<ButtonSocialType> = ({ name, link }) => {
  const handleNavigation = () => {
    setTimeout(() => {
      window.open(link, "_blank", "noopener noreferrer");
    }, 500);
  };

  return (
    <Button
      size="lg"
      className="flex items-center justify-center rounded-md bg-blue-600 p-4 shadow-md shadow-blue-500"
      onClick={handleNavigation}
    >
      <span className="font-semibold uppercase text-white">{name}</span>
    </Button>
  );
};

// ButtonSocial.propTypes = {
//   name: PropTypes.string.isRequired,
//   link: PropTypes.string.isRequired,
// };

export default ButtonSocial;
