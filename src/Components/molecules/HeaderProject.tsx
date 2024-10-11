import { LinkBlank } from "../atoms/LinkBlank";

export const HeaderProject = () => {
  return (
    <>
      <div className="space-y-4 text-left">
        <p>
          Questi progetti sono esercizi di Frontend Mentor, creati per affinare
          le competenze acquisite durante i miei studi, affrontando sfide di
          accessibilità e design.
        </p>
        <p>
          Puoi vedere il mio portfolio su{" "}
          <LinkBlank href="https://smailen5.github.io/Frontend-Mentor-Challenge/">
            Frontend Mentor
          </LinkBlank>
          . Mentre su{" "}
          <LinkBlank href="https://github.com/Smailen5?tab=repositories">
            GitHub
          </LinkBlank>{" "}
          trovi la raccolta completa, inclusi i progetti reali in uso.
        </p>
      </div>
    </>
  );
};
