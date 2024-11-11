import { Button } from "../atoms/button";
import { SelectFilter } from "../atoms/SelectFilter";
import { filterProjects } from "@/utils/filterProjects";

export const Filter = () => {
  const { setSelectedFilter, selectedFilter, numberFilteredProjects } =
    filterProjects();
  const handleSearch = () => {
    console.log("filtra progetti per:");
  };
  return (
    <section className="flex w-full items-center gap-4 bg-red-500">
      <SelectFilter onSelectionChange={setSelectedFilter} />
      <Button onClick={handleSearch}>Cerca</Button>
      <p>
        progetti con {selectedFilter} sono: {numberFilteredProjects}
      </p>
    </section>
  );
};
