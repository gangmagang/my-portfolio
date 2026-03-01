"use client";

import styled from "styled-components";
import { mq } from "@/styles/breakpoints";

export const Inner = styled.div`
  max-width: 1440px;
  margin: 0 auto;

  padding: 0 60px;

  ${mq.down("tablet")} {
    padding: 0 40px;
  }

  ${mq.down("mobile")} {
    padding: 0 20px;
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
