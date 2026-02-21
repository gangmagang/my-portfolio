"use client";

import styled from "styled-components";
import { mq } from "@/styles/breakpoints";

/* =========================
   GRID
========================= */

export const Grid = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 32px;

  ${mq.down("laptop")} {
    gap: 20px;
  }

  ${mq.down("tablet")} {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

/* =========================
   LEFT / RIGHT COLUMN
========================= */

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  /* 🔥 오른쪽 Research 높이에 종속 */
  height: 100%;

  ${mq.down("laptop")} {
    gap: 20px;
  }

  ${mq.down("tablet")} {
    height: auto;
    gap: 16px;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  /* 🔥 이 컬럼이 전체 높이를 결정 */
  align-self: stretch;

  ${mq.down("laptop")} {
    gap: 20px;
  }

  ${mq.down("tablet")} {
    gap: 16px;
  }
`;

/* =========================
   LEFT CARDS (반반 분할)
========================= */

export const Half = styled.div`
  flex: 1; /* 🔥 Left 안에서 정확히 반반 */

  ${mq.down("tablet")} {
    flex: unset;
  }
`;

/* =========================
   RIGHT CARDS
========================= */

/* 🔥 이게 기준 높이 (Grid 전체 높이 결정) */
export const ResearchWrap = styled.div`
  flex: 1; /* ← 중요: Right 컬럼 높이의 기준 */
  min-height: 460px;

  display: flex;

  ${mq.down("tablet")} {
    flex: unset;
    min-height: auto;
  }
`;

/* 🔥 데스크탑만 정사각형 */
export const SampleWrap = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;

  display: flex;

  ${mq.down("tablet")} {
    aspect-ratio: auto;
  }
`;
