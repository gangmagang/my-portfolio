// src/types/styled.d.ts
import "styled-components";
import type { theme } from "@/styles/theme";

type AppTheme = (typeof theme)[keyof typeof theme];

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}

export {};
