import { useContext } from "react";
import { AppContext } from "@/shared/utils/context";

export const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useGlobalCOntext non puo essere usato senza AppProvider");
  }
  return context;
};
