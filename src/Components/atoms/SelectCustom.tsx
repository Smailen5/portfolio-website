import React from "react";
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
  onClick?: () => void;
}

const Option = ({ children, onClick }: OptionProps) => {
  return (
    <li
      role="option"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick && onClick()}
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
  onSelectionChange: (value: string) => void;
}

const Selection = ({
  children,
  id,
  name,
  label,
  className,
  onSelectionChange,
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

  const handleOptionClick = (value: string) => {
    setTestoBottone(value);
    onSelectionChange(value);
    setOpen(false);
  };

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
          {/* Codice di chatGPT */}
          {React.Children.map(children, (child) =>
            React.isValidElement<OptionProps>(child) && child.type === Option
              ? React.cloneElement(child, {
                  onClick: () => handleOptionClick(child.props.children),
                })
              : child,
          )}
        </Select>
      </div>
    </>
  );
};

// --------------------------------------------------------------------------------->

export { Option, Select, Selection };
