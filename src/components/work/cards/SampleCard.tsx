"use client";

import BaseCard from "./BaseCard";
import styled from "styled-components";
import { mq } from "@/styles/breakpoints";
import { Title, Desc } from "./text";

const Card = styled(BaseCard)`
  text-align: center;
  padding: 20px;
  align-items: center;
  ${mq.down("tablet")} {
    text-align: left;
    align-items: flex-start;
    padding: 40px;
  }
`;

export default function SampleCard() {
  return (
    <Card>
      <Title>SAMPLE ARCHIVE</Title>
      <Desc>
        시도와 실험을 기록하는
        <br />
        개인 작업 아카이브
      </Desc>
    </Card>
  );
}
