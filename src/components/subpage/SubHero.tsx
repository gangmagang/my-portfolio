"use client";

import Image from "next/image";
import {
  HeroCard,
  TitleRow,
  Title,
  SubTitle,
  Description,
  Divider,
} from "./SubHero.styles";

type Props = {
  title: string;
  subtitle: string;
  description: string;
};

export default function SubHero({ title, subtitle, description }: Props) {
  return (
    <>
      <HeroCard>
        <Image
          src="/Photo_main.png"
          alt="hero visual"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </HeroCard>

      <TitleRow>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </TitleRow>
      <Divider />
      <Description>{description}</Description>
    </>
  );
}
