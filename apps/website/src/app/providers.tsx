"use client";

import { createContext, ReactNode } from "react";
import { Session } from "next-auth";
import { ThemeProvider } from "next-themes";

export const AppContext = createContext<{ session: Session | null }>({
  session: null,
});

export default function Providers({
  children,
  session,
}: {
  children: ReactNode;
  session: Session | null;
}) {
  return (
    <AppContext.Provider
      value={{
        session,
      }}
    >
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
}
