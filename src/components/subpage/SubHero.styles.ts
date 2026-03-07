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
    aspect-ratio: 9 / 16;

    width: 88%;
    margin-left: auto;
    margin-right: auto;
  }

  ${mq.down("mobile")} {
    width: 100%;
  }
`;

export const HeroInner = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  align-items: center;

  height: 100%;
  padding: 80px;

  ${mq.down("laptop")} {
    padding: 60px;
  }

  ${mq.down("tablet")} {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 40px;

    justify-items: center;
    text-align: center;
  }
`;

/* 로고 영역 (핵심 수정) */
export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 60%;
  min-height: 160px;

  margin: 0 auto;

  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  ${mq.down("laptop")} {
    width: 220px;
    min-height: 140px;
  }

  ${mq.down("tablet")} {
    width: 60%;
    min-height: 120px;
    position: relative;
    top: 40px;
  }

  ${mq.down("mobile")} {
    width: 160px;
    height: 100px;
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;

  ${mq.down("tablet")} {
    align-items: center;
    text-align: center;
  }
`;

export const ProjectLabel = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.color.muted};

  ${mq.down("mobile")} {
    font-size: 12px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 56px;
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;

  color: ${({ theme }) => theme.color.text};

  margin: 8px 0 20px;

  ${mq.down("laptop")} {
    font-size: 42px;
  }

  ${mq.down("tablet")} {
    margin-bottom: 16px;
  }

  ${mq.down("mobile")} {
    font-size: 28px;
  }
`;

export const HeroSub = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  font-size: 24px;
  font-weight: 200;
  color: ${({ theme }) => theme.color.muted};

  ${mq.down("tablet")} {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
  }

  ${mq.down("mobile")} {
    font-size: 16px;
  }
`;

export const SubShape = styled.div`
  width: 2px;
  height: 52px;
  background: ${({ theme }) => theme.color.text};
  opacity: 0.4;
  position: relative;
  top: 1px;

  ${mq.down("tablet")} {
    width: 40px;
    height: 2px;
  }
`;

/* ===== 기존 섹션 스타일 ===== */

export const TitleRow = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: baseline;
  gap: 20px;
  flex-wrap: wrap;
  padding: 0 10px;

  ${mq.down("tablet")} {
    gap: 0px;
  }
`;

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
    line-height: 1;
  }

  ${mq.down("mobile")} {
    font-size: 32px;
  }
`;

export const SubTitle = styled.span`
  font-size: 32px;
  font-weight: 200;
  color: ${({ theme }) => theme.color.muted};

  ${mq.down("laptop")} {
    font-size: 24px;
  }

  ${mq.down("tablet")} {
    font-size: 22px;
    line-height: 1;
  }

  ${mq.down("mobile")} {
    font-size: 18px;
  }
`;

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

  ${mq.down("tablet")} {
    margin-bottom: 20px;
  }
`;
