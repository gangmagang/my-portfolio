"use client";

import styled from "styled-components";
import { mq } from "@/styles/breakpoints";

export const FabWrap = styled.div`
  position: fixed;
  right: 60px;
  bottom: 60px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  z-index: 9999;

  ${mq.down("tablet")} {
    right: 40px;
    bottom: 40px;
    gap: 16px;
  }

  ${mq.down("mobile")} {
    gap: 12px;
  }
`;

export const FabButton = styled.button`
  width: 60px;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.color.cardBg};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 50%;

  box-shadow: ${({ theme }) => theme.shadow.card};
  backdrop-filter: blur(8px);

  cursor: pointer;
  transition: 0.25s;

  svg {
    width: 28px;
    height: 28px;
    fill: ${({ theme }) => theme.color.text};
    transition: 0.2s;
  }

  &:hover {
    transform: scale(0.95);
  }

  ${mq.down("tablet")} {
    width: 48px;
    height: 48px;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  ${mq.down("mobile")} {
    width: 36px;
    height: 36px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
