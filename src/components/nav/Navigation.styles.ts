"use client";

import styled from "styled-components";
import { mq } from "@/styles/breakpoints";

/* NAV */
export const Nav = styled.nav`
  position: fixed;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;

  opacity: 0.6;
  transition: opacity 0.25s;

  &:hover {
    opacity: 1;
  }

  ${mq.down("tablet")} {
    left: 40px;
    bottom: 40px;
    transform: none;
  }
  ${mq.down("mobile")} {
    bottom: 22px;
    left: 16px;
  }
`;

/* NAV BODY */
export const NavInner = styled.div`
  position: relative;

  height: 60px;
  padding: 0 60px;

  display: flex;
  align-items: center;
  gap: 40px;

  background: ${({ theme }) => theme.color.cardBg};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.pill};
  box-shadow: ${({ theme }) => theme.shadow.card};

  ${mq.down("tablet")} {
    height: 48px;
    padding: 0 28px;
    gap: 22px;
  }

  ${mq.down("mobile")} {
    height: 36px;
    padding: 0 20px;
    gap: 16px;
  }
`;

/* NAV ITEM */
export const NavItem = styled.button`
  background: none;
  border: none;
  padding: 0;
  text-decoration: none;

  font-size: 26px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.muted};
  cursor: pointer;
  white-space: nowrap;

  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.color.text};
  }

  ${mq.down("tablet")} {
    font-size: 16px;
  }

  ${mq.down("mobile")} {
    font-size: 14px;
  }
`;

/* INDICATOR */
export const Indicator = styled.span`
  position: absolute;
  bottom: 0;

  height: 3px;
  background: ${({ theme }) => theme.color.text};
  border-radius: 2px;

  transition:
    left 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.15s ease;

  pointer-events: none;

  ${mq.down("tablet")} {
    height: 2px;
  }
`;
