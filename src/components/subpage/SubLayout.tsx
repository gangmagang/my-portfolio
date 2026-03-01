"use client";

import { Page, Inner } from "./SubLayout.styles";

export default function SubLayout({ children }: { children: React.ReactNode }) {
  return (
    <Page>
      <Inner>{children}</Inner>
    </Page>
  );
}
