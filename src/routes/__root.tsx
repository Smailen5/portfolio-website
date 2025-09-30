//src/routes/__root.tsx
/// <reference types="vite/client" />

import { AppProvider } from "@shared/utils/context";
import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const Route = createRootRoute({
  head: ()=> ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      },
      {
        title: "Smailen Vargas | Frontend Developer",
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <AppProvider>
      <RootDocument>
        <Outlet />
      </RootDocument>
    </AppProvider>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
