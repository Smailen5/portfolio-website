import { Dispatch, SetStateAction } from "react";
import { Button } from "../atoms/button";
import { SelectFilter } from "../atoms/SelectFilter";

export const Filter = ({setSelectedFilter}:{setSelectedFilter:Dispatch<SetStateAction<string>>}) => {
  

  const handleSearch = ()=>{
    console.log("filtra progetti per:")
  }
  return (
    <section className="w-full bg-red-500 flex items-center gap-4">
      <SelectFilter onSelectionChange={setSelectedFilter}/>
      <Button onClick={handleSearch}>Cerca</Button>
    </section>
  );
};
