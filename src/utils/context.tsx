import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

// Definisce il tipo di contesto
interface AppContextType {
  useWindowWidth: () => number;
}

// Crea il contesto e fornisce un valore predefinito
const AppContext = createContext<AppContextType | undefined>(undefined);

// Controlla larghezza schermo e ne ritorna il valore
const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
};

type AppProviderType = {
  children: React.ReactNode;
};

const AppProvider: React.FC<AppProviderType> = ({ children }) => {
  return (
    <AppContext.Provider value={{ useWindowWidth }}>
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
