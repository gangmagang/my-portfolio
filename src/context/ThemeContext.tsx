"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type ThemeMode = "light" | "dark";

type ThemeContextValue = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProviderBridge({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const saved = window.localStorage.getItem("themeMode") as ThemeMode | null;
    if (saved === "light" || saved === "dark") setMode(saved);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("themeMode", mode);
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  const toggle = () => setMode((prev) => (prev === "light" ? "dark" : "light"));

  const value = useMemo(() => ({ mode, setMode, toggle }), [mode]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useThemeMode() {
  const ctx = useContext(ThemeContext);
  if (!ctx)
    throw new Error("useThemeMode must be used within ThemeProviderBridge");
  return ctx;
}
