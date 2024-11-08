import { Option, Selection } from "./SelectCustom";

export const SelectFilter = () => {
  return (
    <>
      <div className="flex flex-col">
        <Selection label="prova di label" name="opzioni">
          <Option>prova </Option>
          <Option>prova 2</Option>
          <Option>prova 3</Option>
          <Option>prova 4</Option>
        </Selection>
      </div>
    </>
  );
};
