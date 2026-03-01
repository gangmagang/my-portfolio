"use client";

import styled from "styled-components";
import { mq } from "@/styles/breakpoints";

export const Section = styled.section`
  margin-top: 200px;
  text-align: center;

  ${mq.down("tablet")} {
    margin-top: 140px;
  }
`;

export const ImageGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
  margin-bottom: 180px;

  ${mq.down("laptop")} {
    gap: 48px;
  }

  ${mq.down("tablet")} {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`;

export const ImageCard = styled.div`
  width: 380px;
  aspect-ratio: 9 / 16;

  border-radius: ${({ theme }) => theme.radius.card};
  overflow: hidden;

  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.cardBg};
  box-shadow: ${({ theme }) => theme.shadow.card};

  position: relative;

  ${mq.down("tablet")} {
    width: 60%;
  }

  ${mq.down("mobile")} {
    width: 100%;
  }
`;

export const Title = styled.h3`
  font-size: 42px;
  font-weight: 700;
  margin: 0 auto 62px;
  width: 55%;
  word-break: keep-all;

  color: ${({ theme }) => theme.color.text};

  ${mq.down("tablet")} {
    font-size: 32px;
  }

  ${mq.down("mobile")} {
    font-size: 24px;
  }
`;

export const LinkRow = styled.div`
  margin: 160px 0;

  display: flex;
  justify-content: center;
  gap: 60px;

  ${mq.down("tablet")} {
    flex-direction: column;
    gap: 60px;
  }
`;

export const ExternalLink = styled.a`
  font-size: 20px;
  font-weight: 400;

  color: ${({ theme }) => theme.color.muted};
  text-decoration: none;

  transition: 0.2s;

  &:hover {
    opacity: 0.6;
  }
`;
