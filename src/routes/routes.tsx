import { SingleProject } from "@features/projects/components/SingleProject";
import Contact from "@/pages/ContactPage";
import Error from "@/pages/ErrorPage";
import Home from "@/pages/Homepage";
import Projects from "@/pages/ProjectPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/projects",
    element: <Projects />,
    // children: {
    //   path: ":id",
    //   element: <SingleProject />,
    // },
  },
  {
    path: "/projects/:nome",
    element: <SingleProject />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);
