import { useState } from "react";
import { Button } from "../atoms/button";
import { SelectFilter } from "../atoms/SelectFilter";

export const Filter = () => {
  const [selectedFilter,setSelectedFilter] = useState('Tutto')

  const handleSearch = ()=>{
    console.log("filtra progetti per:", selectedFilter)
  }
  return (
    <section className="w-full bg-red-500 flex items-center gap-4">
      <SelectFilter onSelectionChange={setSelectedFilter}/>
      <Button onClick={handleSearch}>Cerca</Button>
    </section>
  );
};
