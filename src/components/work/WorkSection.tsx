"use client";

import styled from "styled-components";
import { mq } from "@/styles/breakpoints";
import WorkLayout from "./WorkLayout";

export default function WorkSection() {
  return (
    <Section id="work">
      <WorkLayout />
    </Section>
  );
}

const Section = styled.section`
  padding: 160px 30px;

  ${mq.down("tablet")} {
    padding: 120px 20px;
  }
`;
