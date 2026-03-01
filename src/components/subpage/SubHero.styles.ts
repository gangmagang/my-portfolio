"use client";

import styled from "styled-components";
import { mq } from "@/styles/breakpoints";

/* 카드 */
export const HeroCard = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;

  margin-top: 120px;

  border-radius: ${({ theme }) => theme.radius.card};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.cardBg};
  box-shadow: ${({ theme }) => theme.shadow.card};

  overflow: hidden;

  ${mq.down("tablet")} {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    margin-top: 60px;
    aspect-ratio: 16 / 14;
  }
`;

/* 타이틀 줄 */
export const TitleRow = styled.div`
  margin-top: 180px;

  display: flex;
  align-items: baseline;
  gap: 20px;
  flex-wrap: wrap;
  padding: 0 10px;
`;

/* 메인 타이틀 */
export const Title = styled.h1`
  font-size: 56px;
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;

  color: ${({ theme }) => theme.color.text};

  ${mq.down("laptop")} {
    font-size: 42px;
  }
  ${mq.down("tablet")} {
    width: 100%;
    font-size: 40px;
    margin-bottom: 0;
  }
  ${mq.down("mobile")} {
    font-size: 32px;
  }
`;

/* 서브 타이틀 */
export const SubTitle = styled.span`
  font-size: 32px;
  font-weight: 200;
  color: ${({ theme }) => theme.color.muted};

  ${mq.down("laptop")} {
    font-size: 24px;
  }
  ${mq.down("tablet")} {
    font-size: 22px;
  }
  ${mq.down("mobile")} {
    font-size: 18px;
  }
`;

/* 설명 */
export const Description = styled.p`
  font-size: 26px;
  font-weight: 400;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.muted};
  padding: 0 10px;
  word-break: keep-all;
  ${mq.down("laptop")} {
    font-size: 22px;
  }
  ${mq.down("tablet")} {
    font-size: 20px;
  }
  ${mq.down("mobile")} {
    font-size: 16px;
  }
`;

export const Divider = styled.div`
  margin-top: 24px;
  margin-bottom: 60px;

  width: 100%;

  height: 1px;
  background: ${({ theme }) => theme.color.border};

  opacity: 0.6;
`;
