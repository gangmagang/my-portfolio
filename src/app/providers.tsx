"use client";

import React from "react";
import { ThemeProvider } from "styled-components";
import { ThemeProviderBridge, useThemeMode } from "@/context/ThemeContext";
import { theme } from "@/styles/theme";
import GlobalStyle from "@/styles/globalStyle";

function InnerProviders({ children }: { children: React.ReactNode }) {
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
    <ThemeProviderBridge>
      <InnerProviders>{children}</InnerProviders>
    </ThemeProviderBridge>
  );
}
