import { createContext, useContext, useEffect, useState } from "react";

type Project = {
  name: string;
  path: string;
  html_url: string;
  updated_at: string;
  image: string;
  technologies: string[];
};

// Definisce il tipo di contesto
interface AppContextType {
  useWindowWidth: () => number;
  projects: Project[];
  setProjects: (projects: Project[]) => void;
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
  const [projects, setProjects] = useState<Project[]>([]);
  return (
    <AppContext.Provider value={{ useWindowWidth, projects, setProjects }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useGlobalCOntext non puo essere usato senza AppProvider");
  }
  return context;
};

export { AppProvider, useGlobalContext, type Project };
