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
        label="prova di label"
        name="opzioni"
        onSelectionChange={onSelectionChange}
      >
        <Option>Tutto</Option>
        {/* disabilita bottone html5 o rimuovilo */}
        <Option>HTML5</Option>
        <Option>CSS</Option>
        <Option>JavaScript</Option>
        <Option>TypeScript</Option>
        <Option>Tailwind</Option>
        <Option>React</Option>
        {/* <Option>Work in progress</Option> */}
      </Selection>
    </>
  );
};
