import { Dispatch, SetStateAction } from "react";
import { SelectFilter } from "../atoms/SelectFilter";

interface FilterProps {
  setSelectedFilter: Dispatch<SetStateAction<string>>;
  number: number;
}

export const Filter = ({
  setSelectedFilter,
  number,
}: FilterProps) => {
  return (
    <section className="flex w-full flex-col items-start gap-4">
      <SelectFilter onSelectionChange={setSelectedFilter} />
      <p>
        progetti visualizzati: {number}
      </p>
    </section>
  );
};
