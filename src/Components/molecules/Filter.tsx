import { Button } from "../atoms/button";
import { SelectFilter } from "../atoms/SelectFilter";

export const Filter = () => {
  return (
    <section className="w-full bg-red-500 flex items-center gap-4">
      <SelectFilter />
      <Button>Cerca</Button>
    </section>
  );
};
