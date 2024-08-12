/* eslint-disable react/jsx-no-undef */

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
