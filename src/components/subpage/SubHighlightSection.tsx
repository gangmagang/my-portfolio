"use client";

import Image from "next/image";
import {
  Section,
  TitleWrap,
  SmallTitle,
  BigTitle,
  ImageCard,
  TextBlock,
} from "./SubHighlightSection.styles";
import { Description } from "./SubHero.styles";

type Props = {
  smallTitle: string;
  bigTitle: string;
  topDescription: string;
  bottomDescription: string;
  image: string;
};

export default function SubHighlightSection({
  smallTitle,
  bigTitle,
  topDescription,
  bottomDescription,
  image,
}: Props) {
  return (
    <Section>
      <TitleWrap>
        <SmallTitle>{smallTitle}</SmallTitle>
        <BigTitle>{bigTitle}</BigTitle>
      </TitleWrap>

      <TextBlock>
        <Description>{topDescription}</Description>
      </TextBlock>

      <ImageCard>
        <Image
          src={image}
          alt="highlight visual"
          fill
          style={{ objectFit: "cover" }}
        />
      </ImageCard>

      <TextBlock>
        <Description>{bottomDescription}</Description>
      </TextBlock>
    </Section>
  );
}
