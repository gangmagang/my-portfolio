"use client";

import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import GlobalStyle from "@/styles/globalStyle";
import { ThemeProviderContext, useThemeMode } from "@/context/ThemeContext";

function ThemeBridge({ children }: { children: React.ReactNode }) {
  const { mode } = useThemeMode();
  return (
    <ThemeProvider theme={theme[mode]}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProviderContext>
      <ThemeBridge>{children}</ThemeBridge>
    </ThemeProviderContext>
  );
}
