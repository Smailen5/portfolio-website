export const fetchProjects = async () => {
  try {
    const response = await fetch(
      "https://portfolio-cdn.netlify.app/projects.json",
    );

    if (!response.ok) throw new Error(`Richiesta fallita: ${response.status}`);

    const projects = await response.json();
    return projects;
  } catch (error) {
    console.error("Errore durante il fetch dei progetti: ", error);
    throw new Error("Errore durante il fetch dei progetti");
  }
};
