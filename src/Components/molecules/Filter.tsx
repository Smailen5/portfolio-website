import { Dispatch, SetStateAction } from "react";
import { Button } from "../atoms/button";
import { SelectFilter } from "../atoms/SelectFilter";

interface FilterProps {
  selectedFilter:string;
  setSelectedFilter:Dispatch<SetStateAction<string>>;
  number:number;
}

export const Filter = ({selectedFilter, setSelectedFilter, number}:FilterProps) => {

  const handleSearch = () => {
    console.log("filtra progetti per:", selectedFilter);
  };

  return (
    <section className="flex w-full items-center gap-4 bg-red-500">
      <SelectFilter onSelectionChange={setSelectedFilter} />
      <Button onClick={handleSearch}>Cerca</Button>
      <p>
        progetti con {selectedFilter} sono: {number}
      </p>
    </section>
  );
};
