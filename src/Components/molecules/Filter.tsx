import { Dispatch, SetStateAction } from "react";
import { Button } from "../atoms/button";
import { SelectFilter } from "../atoms/SelectFilter";

export const Filter = ({
  setSelectedFilter,
  selectedFilter, numberProjects
}: {
  setSelectedFilter: Dispatch<SetStateAction<string>>, selectedFilter:string, numberProjects:number;
}) => {
  const handleSearch = () => {
    console.log("filtra progetti per:");
  };
  return (
    <section className="flex w-full items-center gap-4 bg-red-500">
      <SelectFilter onSelectionChange={setSelectedFilter} />
      <Button onClick={handleSearch}>Cerca</Button>
      <p>progetti con {selectedFilter} sono: {numberProjects}</p>
    </section>
  );
};
