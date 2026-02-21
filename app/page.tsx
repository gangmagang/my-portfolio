"use client";

import styled from "styled-components";
import { useThemeMode } from "@/context/ThemeContext";
import { mq, wrapMax } from "@/styles/breakpoints";

export default function Page() {
  const { mode, toggle } = useThemeMode();

  return (
    <Wrap>
      <Inner>
        <h1>Portfolio Base Ready</h1>
        <p>mode: {mode}</p>
        <button onClick={toggle}>Toggle Dark</button>
      </Inner>
    </Wrap>
  );
}

const Wrap = styled.main`
  min-height: 100vh;
`;

const Inner = styled.section`
  margin: 0 auto;
  max-width: ${wrapMax.wide}px;

  ${mq.down("laptop")} {
    max-width: ${wrapMax.mid}px;
  }

  ${mq.down("tablet")} {
    max-width: 100%;
  }
`;
