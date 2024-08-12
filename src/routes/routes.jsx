/* eslint-disable react/jsx-no-undef */


export const routes = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/contact",
        element: <Contact/>
    },
    {
        path: "/projects",
        element: <Projects/>,
        children: {
            path: ":id",
            element: <SingleProject/>
        }
    }
]