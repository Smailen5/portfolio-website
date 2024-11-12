import { Dispatch, SetStateAction } from "react";
import { Option, Selection } from "./SelectCustom";

export const SelectFilter = ({
  onSelectionChange,
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
