"use client";

import styled from "styled-components";
import { mq } from "@/styles/breakpoints";

export const MetaSection = styled.section`
  margin-top: 180px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  ${mq.down("tablet")} {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;
