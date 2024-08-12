/* eslint-disable react/jsx-no-undef */
import { createBrowserRouter } from "react-router-dom";
import Home from "../screen/HomeScreen";
import Contact from "../screen/ContactScreen";
import Projects from "../screen/ProjectsScreen";
import Error from "../screen/ErrorScreen";

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
