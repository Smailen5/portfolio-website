import { ReactNode } from "react";
import { GoProjectRoadmap } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { useNavigate } from "@tanstack/react-router";
import { Button } from "./Button";

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
      onClick={() => navigate({to: `/${navigateTo}`, params: { navigateTo }})}
    >
      {navigateTo === "projects" && <GoProjectRoadmap />}
      {children}
      {navigateTo === "contact" && <MdOutlineEmail />}
    </Button>
  );
};
