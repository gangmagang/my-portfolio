"use client";

import styled from "styled-components";
import { mq } from "@/styles/breakpoints";

export const Section = styled.section`
  margin-top: 280px;
  text-align: center;

  ${mq.down("tablet")} {
    margin-top: 220px;
  }
`;

/* 상단 타이틀 그룹 */
export const TitleWrap = styled.div`
  margin-bottom: 60px;
`;

export const SmallTitle = styled.div`
  font-size: 62px;
  font-weight: 500;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.text};

  ${mq.down("laptop")} {
    font-size: 48px;
  }

  ${mq.down("tablet")} {
    font-size: 36px;
  }

  ${mq.down("mobile")} {
    font-size: 28px;
  }
`;

export const BigTitle = styled.div`
  font-size: 82px;
  font-weight: 900;
  line-height: 1.1;
  margin-top: 8px;

  color: ${({ theme }) => theme.color.text};

  ${mq.down("laptop")} {
    font-size: 64px;
  }

  ${mq.down("tablet")} {
    font-size: 46px;
  }

  ${mq.down("mobile")} {
    font-size: 34px;
  }
`;

/* 이미지 카드 */
export const ImageCard = styled.div`
  width: 80%;
  margin: 180px auto 160px;

  aspect-ratio: 16 / 9;

  border-radius: ${({ theme }) => theme.radius.card};
  overflow: hidden;

  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.cardBg};
  box-shadow: ${({ theme }) => theme.shadow.card};

  position: relative;

  ${mq.down("tablet")} {
    width: 100%;
    margin: 160px auto 140px;
    aspect-ratio: 4 / 3; /* 모바일에서 조금 더 길게 */
  }
`;

export const TextBlock = styled.div`
  width: 60%;
  margin: 0 auto;

  ${mq.down("tablet")} {
    width: 80%;
  }

  ${mq.down("mobile")} {
    width: 100%;
  }
`;
