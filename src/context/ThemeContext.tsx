"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { ThemeMode } from "@/styles/theme";

const ThemeContext = createContext<any>(null);

export function ThemeProviderContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      setMode(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", mode);
    document.documentElement.dataset.theme = mode;
  }, [mode]);

  return (
    <ThemeContext.Provider
      value={{
        mode,
        toggle: () => setMode(mode === "light" ? "dark" : "light"),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeMode() {
  return useContext(ThemeContext);
}
