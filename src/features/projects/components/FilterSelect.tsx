import { Dispatch, SetStateAction } from "react";
import { Option, Selection } from "@components/atoms/SelectCustom";

// Componente per filtrare i progetti per tecnologia
export const FilterSelect = ({
  onSelectionChange, // Funzione per gestire il cambio di selezione
}: {
  onSelectionChange: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <>
      <Selection
        label="Seleziona una tecnologia"
        name="tecnologia"
        onSelectionChange={onSelectionChange}
      >
        <Option>Tutto</Option>
        <Option>CSS</Option>
        <Option>JavaScript</Option>
        <Option>TypeScript</Option>
        <Option>Tailwind</Option>
        <Option>React</Option>
      </Selection>
    </>
  );
};
