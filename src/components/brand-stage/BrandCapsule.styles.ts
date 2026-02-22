import styled, { css } from "styled-components";
import { mq } from "@/styles/breakpoints";

export const CapsuleWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Capsule = styled.button`
  position: relative;
  width: 660px;
  height: 260px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.cardBg};

  box-shadow:
    inset 0 8px 16px rgba(0, 0, 0, 0.12),
    inset 0 -4px 8px rgba(255, 255, 255, 0.05);

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${mq.down("laptop")} {
    width: 560px;
    height: 220px;
  }
  ${mq.down("tablet")} {
    width: 420px;
    height: 200px;
  }
  ${mq.down("mobile")} {
    width: 80%;
    height: 160px;
  }
`;

export const Slot = styled.div`
  position: relative;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
`;

export const SlotItem = styled.div<{ $state: "center" | "up" | "down" }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $state }) =>
    $state === "center" &&
    css`
      transform: translateY(0);
      transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    `}

  ${({ $state }) =>
    $state === "up" &&
    css`
      transform: translateY(-36px);
      transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    `}

  ${({ $state }) =>
    $state === "down" &&
    css`
      transform: translateY(36px);
      transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    `}

  svg {
    height: 120px;
    width: auto;
    display: block;
    ${mq.down("laptop")} {
      height: 105px;
    }
    ${mq.down("tablet")} {
      height: 82px;
    }
  }
`;

export const Hint = styled.div`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  color: ${({ theme }) => theme.color.muted};
`;
