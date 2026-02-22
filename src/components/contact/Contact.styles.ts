"use client";

import styled from "styled-components";
import { mq } from "@/styles/breakpoints";

/* SECTION */
export const Section = styled.section`
  padding: 0 30px 160px;

  ${mq.down("tablet")} {
    padding: 120px 20px;
  }
`;

/* WRAP */
export const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;

  display: flex;
  align-items: center;

  ${mq.down("tablet")} {
    flex-direction: column;
  }
`;

/* IMAGE */
export const ImageWrap = styled.div`
  position: relative;
  width: 55%;
  aspect-ratio: 1 / 1.5;

  ${mq.down("tablet")} {
    width: 65%;
  }
`;

/* CARD WRAP */
export const CardWrap = styled.div`
  width: 50%;
  position: absolute;
  right: 0;

  transform-style: preserve-3d;
  transition: transform 0.25s ease-out;

  ${mq.down("tablet")} {
    position: relative;
    width: 80%;
    transform: none !important;
  }
`;

/* CARD */
export const Card = styled.div`
  padding: 60px 70px;

  border-radius: ${({ theme }) => theme.radius.card};
  background: ${({ theme }) => theme.color.cardBg};
  border: 1px solid ${({ theme }) => theme.color.border};
  box-shadow: ${({ theme }) => theme.shadow.card};

  will-change: transform;
  margin-top: 80px;
  ${mq.down("tablet")} {
    padding: 40px 50px;
  }
`;

/* TEXT */
export const Title = styled.h3`
  font-size: 26px;
  margin: 0 0 4px 0;
  font-weight: 300;
  opacity: 0.7;

  ${mq.down("laptop")} {
    font-size: 20px;
  }
  ${mq.down("tablet")} {
  }
  ${mq.down("mobile")} {
  }
`;

export const Name = styled.p`
  font-size: 52px;
  margin: 0 0 32px 0;
  font-weight: 500;
  ${mq.down("laptop")} {
    font-size: 36px;
  }
  ${mq.down("tablet")} {
  }
  ${mq.down("mobile")} {
    font-size: 22px;
  }
`;

export const Info = styled.p`
  font-size: 28px;
  margin: 12px 0;
  font-weight: 200;
  opacity: 0.7;
  ${mq.down("laptop")} {
    font-size: 22px;
  }
  ${mq.down("tablet")} {
  }
  ${mq.down("mobile")} {
    font-size: 18px;
  }
`;
