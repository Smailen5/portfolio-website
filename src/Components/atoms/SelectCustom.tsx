interface LabelProps {
  htmlFor: string;
  children: string;
}

const Label = ({ htmlFor, children }: LabelProps) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};

interface OptionProps {
  children: string;
}

const Option = ({ children }: OptionProps) => {
  return <option value={children}>{children}</option>;
};

interface SelectionProps {
  name: string;
  id: string;
  children: React.ReactNode;
}

const Select = ({ name, id, children }: SelectionProps) => {
  return (
    <select name={name} id={id}>
      {children}
    </select>
  );
};

interface SelectionProps {
  children: string;
  id: string;
  name: string;
}

const Selection = ({ children, id, name }: SelectionProps) => {
  return (
    <div>
      <Label htmlFor={id}>{children}</Label>
      <Select name={name} id={id}>
        {children}
      </Select>
    </div>
  );
};

export { Label, Option, Select, Selection };
