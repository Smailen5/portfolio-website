import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Homepage";
import Contact from "../pages/ContactScreen";
import Projects from "../pages/ProjectsScreen";
import Error from "../pages/ErrorScreen";

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
    path: "*",
    element: <Error />,
  },
]);
