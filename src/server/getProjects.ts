import { createServerFn } from "@tanstack/react-start";

export const fetchProjects = createServerFn().handler(async () => {
  try {
    const response = await globalThis.fetch("https://portfolio-cdn.netlify.app/projects.json");

    if(!response.ok) throw new Error(`Failed to fetch projects: ${response.status}`);

    const projects = await response.json()
    return projects
  } catch(error) {
    console.error(`Error fetching projects: ${error}`)
    throw new Error("Failed to fetch projects");
  }
})
