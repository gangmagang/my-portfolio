import "styled-components";
import type { theme } from "@/styles/theme";

declare module "styled-components" {
  export interface DefaultTheme extends (typeof theme)["light"] {}
}