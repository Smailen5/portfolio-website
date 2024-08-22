import { Button } from "@nextui-org/react";
import PropTypes from "prop-types";

const Social = ({ name, link }) => {
  return (
    <Button
      size="lg"
      className="flex items-center justify-center rounded-md bg-blue-600 p-4 shadow-md shadow-blue-500"
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold uppercase text-white"
      >
        {name}
      </a>
    </Button>
  );
};

Social.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Social;
