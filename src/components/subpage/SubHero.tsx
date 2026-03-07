"use client";

import Image from "next/image";
import { useThemeMode } from "@/context/ThemeContext";

import {
  HeroCard,
  HeroInner,
  LogoWrap,
  InfoWrap,
  ProjectLabel,
  HeroTitle,
  HeroSub,
  SubShape,
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
  image: string;
  darkImage?: string;

  projectLabel?: string;
  heroSubTop?: string;
  heroSubBottom?: string;
};

export default function SubHero({
  title,
  subtitle,
  description,
  image,
  darkImage,
  projectLabel = "Brand Application Project",
  heroSubTop,
  heroSubBottom,
}: Props) {
  const { mode } = useThemeMode();

  const logoSrc = mode === "dark" && darkImage ? darkImage : image;

  return (
    <>
      <HeroCard>
        <HeroInner>
          <LogoWrap>
            <Image
              src={logoSrc}
              alt={title}
              width={600}
              height={400}
              style={{
                width: "100%",
                height: "auto",
              }}
              priority
            />
          </LogoWrap>

          <InfoWrap>
            <ProjectLabel>{projectLabel}</ProjectLabel>

            <HeroTitle>{title}</HeroTitle>

            {(heroSubTop || heroSubBottom) && (
              <HeroSub>
                <SubShape />
                <div>
                  {heroSubTop}
                  {heroSubBottom && (
                    <>
                      <br />
                      {heroSubBottom}
                    </>
                  )}
                </div>
              </HeroSub>
            )}
          </InfoWrap>
        </HeroInner>
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
