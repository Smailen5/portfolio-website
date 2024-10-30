import { ReactNode } from "react";
import { GoProjectRoadmap } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Button } from "./button";

interface ButtonActionProps {
  navigateTo: "contact" | "projects";
  buttonClass?: string;
  children: ReactNode;
}

export const ButtonAction = ({
  navigateTo,
  buttonClass,
  children,
}: ButtonActionProps) => {
  const navigate = useNavigate();
  return (
    <Button
      className={`gap-2 ${buttonClass}`}
      size="lg"
      variant={navigateTo === "projects" ? "secondary" : undefined}
      onClick={() => navigate(`/${navigateTo}`)}
    >
      {navigateTo === "projects" && <GoProjectRoadmap />}
      {children}
      {navigateTo === "contact" && <MdOutlineEmail />}
    </Button>
  );
};
