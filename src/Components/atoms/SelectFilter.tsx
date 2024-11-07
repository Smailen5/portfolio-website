import { Label, Option, Select } from "./SelectCustom";

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
        <Label htmlFor="prova">prova</Label>
        <Select name="prova" id="prova">
          <Option>prova di selezione</Option>
          <Option>prova di selezione 2</Option>
          <Option>prova di selezione 3</Option>
        </Select>

        
      </div>
    </>
  );
};
