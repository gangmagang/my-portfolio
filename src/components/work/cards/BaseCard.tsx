"use client";

import styled from "styled-components";
import { mq } from "@/styles/breakpoints";

const BaseCard = styled.article`
  width: 100%;
  height: 100%;

  padding: 60px;

  border-radius: ${({ theme }) => theme.radius.card};
  background: ${({ theme }) => theme.color.cardBg};
  border: 1px solid ${({ theme }) => theme.color.border};
  box-shadow: ${({ theme }) => theme.shadow.card};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  transition: 0.25s ease;

  &:hover {
    transform: scale(0.99);
    box-shadow: ${({ theme }) => theme.shadow.hover};
  }

  ${mq.down("tablet")} {
    padding: 40px;
  }
`;

export default BaseCard;
