import { Dispatch, SetStateAction } from "react";
import { SelectFilter } from "@/features/projects/components/FilterSelect";

interface FilterProps {
  setSelectedFilter: Dispatch<SetStateAction<string>>;
  number: number;
}

export const Filter = ({ setSelectedFilter, number }: FilterProps) => {
  return (
    <section className="flex w-full flex-col items-start gap-8 rounded-md bg-secondary p-2 text-secondary-foreground md:flex-row md:items-end md:justify-between md:gap-0">
      <SelectFilter onSelectionChange={setSelectedFilter} />
      <p>Progetti visualizzati: <span className="font-semibold">{number}</span></p>
    </section>
  );
};
