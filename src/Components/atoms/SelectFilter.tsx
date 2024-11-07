import { Label, Option, Select, Selection } from "./SelectCustom";

export const SelectFilter = () => {
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor="tech">Filtra per tecnologia</label>
        <select name="tech" id="tech" className="rounded-md bg-green-500">
          <option value="" disabled>
            --Seleziona una opzione
          </option>
          <option value="html" className="">
            html
          </option>
          <option value="css">css</option>
          <option value="javascript">javascript</option>
          <option value="typescript">typescript</option>
          <option value="react" disabled>
            react
          </option>
        </select>
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
