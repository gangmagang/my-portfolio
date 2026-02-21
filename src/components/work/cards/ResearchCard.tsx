"use client";

import BaseCard from "./BaseCard";
import styled from "styled-components";
import { mq } from "@/styles/breakpoints";
import { Title, Meta, Desc, Tools } from "./text";

const Card = styled(BaseCard)`
  text-align: center;
  align-items: center;
  padding: 0;
  ${mq.down("tablet")} {
    text-align: left;
    align-items: flex-start;
    min-height: auto;
    padding: 40px;
  }
`;

export default function ResearchCard() {
  return (
    <Card>
      <Title>RESEARCH FACTORY</Title>
      <Meta>UI Design & Publishing</Meta>
      <Desc>
        구조와 구현을 함께 고려한
        <br />웹 서비스 UI 디자인과 퍼블리싱
      </Desc>
      <Tools>Tools | Photoshop · Illustrator · Figma · CSS · React</Tools>
    </Card>
  );
}
