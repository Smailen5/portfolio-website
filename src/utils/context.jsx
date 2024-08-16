import { createContext, useContext } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value="contenuto da context">
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = ()=>{
    return useContext(AppContext)
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
export { AppProvider, useGlobalContext };
