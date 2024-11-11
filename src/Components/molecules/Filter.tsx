import { Dispatch, SetStateAction } from "react";
import { SelectFilter } from "../atoms/SelectFilter";

interface FilterProps {
  selectedFilter: string;
  setSelectedFilter: Dispatch<SetStateAction<string>>;
  number: number;
}

export const Filter = ({
  selectedFilter,
  setSelectedFilter,
  number,
}: FilterProps) => {
  return (
    <section className="flex w-full items-center gap-4 bg-red-500">
      <SelectFilter onSelectionChange={setSelectedFilter} />
      <p>
        progetti con {selectedFilter} sono: {number}
      </p>
    </section>
  );
};
