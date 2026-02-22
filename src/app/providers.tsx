"use client";

import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeProviderBridge, useThemeMode } from "@/context/ThemeContext";
import { theme } from "@/styles/theme";
import GlobalStyle from "@/styles/globalStyle";

const MIN_SHOW = 500; // ✅ 로더 최소 표시 시간(ms)
const FADE_MS = 350; // ✅ layout.tsx의 transition 시간과 맞추기

function InnerProviders({ children }: { children: React.ReactNode }) {
  const { mode, ready } = useThemeMode();

  useEffect(() => {
    if (!ready) return;

    const start = performance.now();

    const boot = async () => {
      try {
        // @ts-ignore
        if (document.fonts?.ready) await document.fonts.ready;
      } catch {}

      const elapsed = performance.now() - start;
      const wait = Math.max(0, MIN_SHOW - elapsed);

      window.setTimeout(() => {
        // 1) 로더 페이드아웃 시작
        const loader = document.getElementById("__boot_loader");
        if (loader) loader.style.opacity = "0";

        // 2) 페이드아웃 끝나면 preload 제거 => body 페이드 인
        window.setTimeout(() => {
          document.documentElement.classList.remove("preload");
        }, FADE_MS);
      }, wait);
    };

    boot();
  }, [ready, mode]);

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
