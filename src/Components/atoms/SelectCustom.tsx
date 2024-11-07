import { twMerge } from "tailwind-merge";

interface LabelProps {
  htmlFor: string;
  children: string;
}

const Label = ({ htmlFor, children }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className="text-sm font-medium">
      {children}
    </label>
  );
};

// --------------------------------------------------------------------------------->

interface OptionProps {
  children: string;
}

const Option = ({ children }: OptionProps) => {
  return <option value={children}>{children}</option>;
};

// --------------------------------------------------------------------------------->

interface SelectProps {
  name: string;
  id: string;
  children: React.ReactNode;
}

const Select = ({ name, id, children }: SelectProps) => {
  return (
    <select name={name} id={id}>
      {children}
    </select>
  );
};

// --------------------------------------------------------------------------------->

interface SelectionProps {
  children: React.ReactNode;
  name: string;
  label: string;
  id?: string;
  className?:string;
}

const Selection = ({ children, id, name, label, className }: SelectionProps) => {
  const selectID = id || `select-${name}`;
  return (
    <div className={twMerge("flex flex-col gap-2", className)}>
      <Label htmlFor={selectID}>{label}</Label>
      <Select id={selectID} name={name}>
        {children}
      </Select>
    </div>
  );
};

// --------------------------------------------------------------------------------->

export { Label, Option, Select, Selection };
