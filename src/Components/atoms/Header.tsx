import React from "react";
import { twMerge } from "tailwind-merge";

interface HeaderProps {
  children: string;
  titleID?: string;
  className?: string;
  type?: "h1" | "h2" | "h3" | "h4";
}

export const Header = ({ children, titleID, className, type="h1" }: HeaderProps) => {
    // Un po to much, ma sono stanco quindi va bene
    let textSize
    switch (type) {
        case "h1": textSize ="text-3xl lg:text-4xl" 
            break;
        case "h2": textSize ="text-2xl lg:text-3xl";
            break;
        case "h3": textSize ="text-xl lg:text-2xl";
            break;
        case "h4": textSize ="text-lg lg:text-xl";
            break;
        default: textSize ="text-sm lg:text-lg"
            break;
    }
  return (
    <header>
      {React.createElement(
        type,
        {
          id: titleID || children,
          className: twMerge(`text-center ${textSize} font-semibold`, className),
        },
        children,
      )}
    </header>
  );
};
