import { LinkBlank } from "../atoms/LinkBlank";

export const HeaderProject = () => {
  return (
    <>
      <div className="space-y-4">
        <p>
          Questi progetti sono esercizi di Frontend Mentor, creati per affinare
          le competenze acquisite durante i miei studi, affrontando sfide di
          sviluppo front-end.
        </p>
        <p>
          Puoi vedere tutti i miei lavori migliori su{" "}
          {/* aggiungi link al file readme con tutti gli esercizi */}
          <LinkBlank href="https://smailen5.github.io/Frontend-Mentor-Challenge/">
            Frontend Mentor
          </LinkBlank>
          . Su {/* aggiungi link alle repository di github */}
          <LinkBlank href="https://github.com/Smailen5?tab=repositories">
            GitHub
          </LinkBlank>{" "}
          trovi anche una raccolta completa, inclusi i progetti reali in uso.
        </p>
      </div>
    </>
  );
};
