"use client";

import styled from "styled-components";
import { mq } from "@/styles/breakpoints";

export const Card = styled.div`
  position: relative;
  padding: 48px 40px;

  border-radius: ${({ theme }) => theme.radius.card};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.cardBg};
  box-shadow: ${({ theme }) => theme.shadow.card};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  min-height: 260px;

  ${mq.down("tablet")} {
    padding: 36px 28px;
  }
`;

/* 작은 상단 텍스트 */
export const TopLabel = styled.div`
  font-size: 22px;
  font-weight: 200;

  color: ${({ theme }) => theme.color.muted};
  opacity: 0.6; /* muted보다 더 연하게 */

  letter-spacing: 0.08em;
  ${mq.down("laptop")} {
    font-size: 18px;
  }
  ${mq.down("mobile")} {
    font-size: 12px;
  }
`;

/* 가운데 리스트 */
export const Content = styled.div`
  margin: 28px 0;

  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
`;

/* 큰 글씨 */
export const Item = styled.div`
  font-size: 26px;
  font-weight: 400;

  color: ${({ theme }) => theme.color.muted};

  line-height: 1;
  ${mq.down("laptop")} {
    font-size: 22px;
  }

  ${mq.down("tablet")} {
    font-size: 22px;
  }
  ${mq.down("mobile")} {
    font-size: 18px;
  }
`;

/* 하단 작은 텍스트 */
export const BottomLabel = styled.div`
  font-size: 22px;
  font-weight: 200;

  color: ${({ theme }) => theme.color.muted};
  opacity: 0.6;

  margin-top: 12px;
  ${mq.down("laptop")} {
    font-size: 18px;
    margin-top: 8px;
  }
  ${mq.down("mobile")} {
    font-size: 12px;
  }
`;
