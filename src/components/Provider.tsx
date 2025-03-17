"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes"
import { Toaster } from "@/components/ui/sonner"

const AppProvider = ({ children }: { children: React.ReactNode }) => {

  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Toaster />
      </ThemeProvider>
    </SessionProvider>
  );

}

export default AppProvider;