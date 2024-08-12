/* eslint-disable react/jsx-no-undef */
import { createBrowserRouter } from "react-router-dom";
import Home from "../screen/Home";
import Contact from "../screen/Contact";
import Projects from "../screen/Projects";
import Error from "../screen/Error";

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
    children: {
      path: ":id",
      element: <SingleProject />,
    },
  },
  {
    path: "*",
    element: <Error />,
  },
]);
