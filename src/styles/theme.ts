// src/styles/theme.ts

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
      card: "60px",
      pill: "999px",
    },

    shadow: {
      card: "0 7px 7px rgba(0,0,0,.15)",
      hover: "0 3px 5px rgba(0,0,0,.1)",
    },

    opacity: {
      glass: 0.9,
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
  },
} as const;

export type ThemeMode = keyof typeof theme;

// 🔥 여기 핵심 수정
export type AppTheme = typeof theme.light;
