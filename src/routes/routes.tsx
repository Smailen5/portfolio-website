import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Homepage";
import Contact from "../pages/ContactPage";
import Projects from "../pages/ProjectPage";
import Error from "../pages/ErrorPage";
import { SingleProject } from "@/Components/organisms/SingleProject";

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
    element: <SingleProject />
  },
  {
    path: "*",
    element: <Error />,
  },
]);
