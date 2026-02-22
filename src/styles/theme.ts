// src/styles/theme.ts
import { mq } from "./breakpoints";

export const theme = {
  light: {
    color: {
      bg: "#ffffff",
      text: "#111111",
      muted: "rgba(0,0,0,.55)",
      stroke: "rgba(0,0,0,.12)",
      cardBg: "#ffffff",
      border: "rgba(0,0,0,.1)",
    },

    radius: {
      card: "clamp(28px, 1vw, 48px)",
      pill: "999px",
    },

    shadow: {
      card: "0 7px 7px rgba(0,0,0,.15)",
      hover: "0 3px 5px rgba(0,0,0,.1)",
    },

    opacity: {
      glass: 0.9,
    },
    motion: {
      fast: "0.2s",
      normal: "0.3s",
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      hoverScale: 0.97,
    },
  },

  dark: {
    color: {
      bg: "#0b0b0b",
      text: "#ffffff",
      muted: "rgba(255,255,255,.6)",
      stroke: "rgba(255,255,255,.18)",
      cardBg: "rgba(255,255,255,.06)",
      border: "rgba(255,255,255,.12)",
    },

    radius: {
      card: "60px",
      pill: "999px",
    },

    shadow: {
      card: "0 7px 7px rgba(0,0,0,.35)",
      hover: "0 3px 5px rgba(0,0,0,.25)",
    },

    opacity: {
      glass: 0.9,
    },
    motion: {
      fast: "0.2s",
      normal: "0.3s",
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      hoverScale: 0.97,
    },
  },
};

// 🔥 핵심: 여기서만 구조 타입 추출
export type ThemeMode = keyof typeof theme;
export type AppTheme = {
  color: {
    bg: string;
    text: string;
    muted: string;
    stroke: string;
    cardBg: string;
    border: string;
  };
  radius: {
    card: string;
    pill: string;
  };
  shadow: {
    card: string;
    hover: string;
  };
  opacity: {
    glass: number;
  };
  motion: {
    fast: string;
    normal: string;
    easing: string;
    hoverScale: number;
  };
};
