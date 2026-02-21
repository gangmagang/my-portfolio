"use client";

import BaseCard from "./BaseCard";
import { Title, Meta, Desc, Tools } from "./text";

export default function LapizCard() {
  return (
    <BaseCard>
      <Title>lapiz sensible</Title>
      <Meta>Brand Rebranding | Visual Direction</Meta>
      <Desc>
        브랜드 무드를 유지하면서
        <br />
        인플루언서 이미지를 활용한 콘텐츠 제작
      </Desc>
      <Tools>Tools | Photoshop · Illustrator · After Effects</Tools>
    </BaseCard>
  );
}
