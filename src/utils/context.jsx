/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const getScrollPosition = (value) => {
    setScrollPosition(value);
  };

  const deleteScrollPosition = () => {
    setScrollPosition(0);
  };

  return (
    <AppContext.Provider
      value={{ scrollPosition, getScrollPosition, deleteScrollPosition }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { AppProvider, useGlobalContext };
