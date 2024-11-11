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
      className="m-1 cursor-pointer rounded-md p-2 pr-10 hover:bg-secondary hover:font-semibold hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:font-semibold focus-visible:text-secondary-foreground"
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
        "absolute top-full z-10 min-w-max overflow-hidden whitespace-nowrap rounded-md bg-popover text-left text-popover-foreground",
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
          className={twMerge(
            "flex flex-col gap-2 rounded-md border-1 border-input bg-background px-2 text-foreground",
            className,
          )}
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
