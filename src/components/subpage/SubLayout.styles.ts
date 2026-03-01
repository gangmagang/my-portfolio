"use client";

import styled from "styled-components";
import { mq } from "@/styles/breakpoints";

export const Page = styled.main`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.color.bg};
`;

export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  padding: 180px 80px 120px;

  ${mq.down("tablet")} {
    padding: 140px 40px 100px;
  }

  ${mq.down("mobile")} {
    padding: 120px 24px 80px;
  }
`;

export const Section = styled.section`
  margin-bottom: 160px;

  ${mq.down("tablet")} {
    margin-bottom: 120px;
  }

  ${mq.down("mobile")} {
    margin-bottom: 100px;
  }
`;
