export type ThemeMode = "light" | "dark";

const base = {
  radius: {
    card: "60px",
    pill: "999px",
  },
  shadow: {
    card: "0 7px 7px rgba(0,0,0,.15)",
    hover: "0 3px 5px rgba(0,0,0,.1)",
  },
  opacity: {
    idle: 0.6,
    hover: 1,
  },
} as const;

export const theme = {
  light: {
    ...base,
    color: {
      bg: "#ffffff",
      text: "#111111",
      muted: "rgba(0,0,0,.55)",
      stroke: "rgba(0,0,0,.12)",
      cardBg: "#ffffff",
      border: "rgba(0,0,0,.1)",
    },
  },
  dark: {
    ...base,
    color: {
      bg: "#0b0c0f",
      text: "#f2f2f2",
      muted: "rgba(255,255,255,.6)",
      stroke: "rgba(255,255,255,.16)",
      cardBg: "rgba(255,255,255,.06)",
      border: "rgba(255,255,255,.12)",
    },
  },
} as const;

export type AppTheme = (typeof theme)[keyof typeof theme];
