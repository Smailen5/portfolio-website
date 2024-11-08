import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface LabelProps {
  children: string;
  labelID: string;
}

const Label = ({ children, labelID }: LabelProps) => {
  return (
    <div role="label" aria-labelledby={labelID} className="text-sm font-medium">
      {children}
    </div>
  );
};

Label.displayName = "label";

// --------------------------------------------------------------------------------->

interface OptionProps {
  children: string;
}

const Option = ({ children }: OptionProps) => {
  return (
    <div role="option" tabIndex={0}>
      {children}
    </div>
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
  if (open) className = "block";
  return (
    <div
      role="select"
      id={id}
      className={twMerge("hidden h-6 bg-white pl-2 text-left", className)}
    >
      {children}
    </div>
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
  const handleOpen = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <>
      <Label labelID={selectID}>{label}</Label>
      <button
        onClick={handleOpen}
        className={twMerge("flex flex-col gap-2 bg-white pl-2", className)}
      >
        clicca
      </button>
      <Select id={selectID} open={open}>
        {children}
      </Select>
    </>
  );
};

// --------------------------------------------------------------------------------->

export { Option, Select, Selection };
