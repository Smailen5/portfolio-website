import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface LabelProps {
  children: string;
  labelID: string;
}

const Label = ({ children, labelID }: LabelProps) => {
  return (
    <div aria-labelledby={labelID} className="text-sm font-medium">
      {children}
    </div>
  );
};

Label.displayName = "label";

// --------------------------------------------------------------------------------->

interface OptionProps {
  children: string;
}
let variabile: string;

const Option = ({ children }: OptionProps) => {
  const onClick = () => {
    variabile = children;
  };

  return (
    <li
      role="option"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      className="cursor-pointer p-2 hover:bg-gray-200"
    >
      {children}
    </li>
  );
};

Option.displayName = "option";

// --------------------------------------------------------------------------------->

interface SelectProps {
  id: string;
  children: React.ReactNode;
  open: boolean;
  className?: string;
}

const Select = ({ id, children, open, className }: SelectProps) => {
  return (
    <ul
      role="listbox"
      id={id}
      aria-hidden={!open}
      className={twMerge(
        "absolute top-full z-10 min-w-max whitespace-nowrap rounded-md bg-gray-300 text-left",
        open ? "block" : "hidden",
        className,
      )}
    >
      {children}
    </ul>
  );
};

Select.displayName = "select";

// --------------------------------------------------------------------------------->

interface SelectionProps {
  children: React.ReactNode;
  name: string;
  label: string;
  id?: string;
  className?: string;
}

const Selection = ({
  children,
  id,
  name,
  label,
  className,
}: SelectionProps) => {
  const selectID = id || `select-${name}`;
  const [open, setOpen] = useState(false);
  const [testoBottone, setTestoBottone] = useState<string>("Tutto");
  const selectionRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => setOpen((prev) => !prev);

  // Chiude il menu quando si clicca fuori
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        selectionRef.current &&
        !selectionRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Cambia il testo del bottone con l'opzione selezionata
  useEffect(() => {
    // la variabile viene creata ma non inizializzata
    if (variabile === undefined) return;
    setTestoBottone(variabile);
    setOpen(false);
  }, [variabile]);

  console.log(testoBottone);
  return (
    <>
      <div className="relative flex flex-col gap-2" ref={selectionRef}>
        <Label labelID={selectID}>{label}</Label>
        <button
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={selectID}
          onClick={handleOpen}
          className={twMerge("flex flex-col gap-2 bg-white px-2", className)}
        >
          Selezionato: {testoBottone}
        </button>
        <Select id={selectID} open={open}>
          {children}
        </Select>
      </div>
    </>
  );
};

// --------------------------------------------------------------------------------->

export { Option, Select, Selection };
