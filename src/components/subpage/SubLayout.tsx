"use client";

import { Inner } from "./SubLayout.styles";

export default function SubLayout({ children }: { children: React.ReactNode }) {
  return <Inner>{children}</Inner>;
}
