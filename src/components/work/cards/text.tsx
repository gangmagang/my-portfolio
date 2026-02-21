"use client";

import styled from "styled-components";
import { mq } from "@/styles/breakpoints";

export const Title = styled.h3`
  margin: 0;
  font-size: 52px;
  font-weight: 400;
  line-height: 1.25;
  text-transform: uppercase;

  ${mq.down("laptop")} {
    font-size: 42px;
  }
  ${mq.down("tablet")} {
    font-size: 32px;
  }
`;

export const Meta = styled.p`
  margin: 10px 0 0 0;
  font-size: 22px;
  font-weight: 200;
  color: ${({ theme }) => theme.color.muted};

  ${mq.down("laptop")} {
    font-size: 18px;
  }
  ${mq.down("tablet")} {
    font-size: 12px;
  }
`;

export const Desc = styled.p`
  margin: 28px 0 30px 0;
  font-size: 26px;
  line-height: 1.6;
  font-weight: 400;

  ${mq.down("laptop")} {
    font-size: 20px;
  }
  ${mq.down("tablet")} {
    font-size: 16px;
  }
`;

export const Tools = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 200;
  color: ${({ theme }) => theme.color.muted};
`;
