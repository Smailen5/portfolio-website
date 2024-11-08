import { Option, Selection } from "./SelectCustom";

export const SelectFilter = () => {
  return (
    <>
      {/* <div className="flex flex-col"> */}
        <Selection label="prova di label" name="opzioni">
          <Option>Html 5 </Option>
          <Option>CSS 3</Option>
          <Option>JavaScript</Option>
          <Option>TypeScript</Option>
          <Option>Tailwind CSS</Option>
          <Option>React</Option>
        </Selection>
      {/* </div> */}
    </>
  );
};
