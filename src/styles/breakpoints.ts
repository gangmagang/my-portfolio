export const bp = {
  desktop: 1440,
  laptop: 1200,
  tablet: 860,
  mobile: 560,
} as const;

export const mq = {
  down: (key: keyof typeof bp) => `@media (max-width: ${bp[key]}px)`,
  up: (key: keyof typeof bp) => `@media (min-width: ${bp[key]}px)`,
} as const;

export const wrapMax = {
  wide: 1200,
  mid: 860,
} as const;
