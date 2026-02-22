"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  Section,
  Wrap,
  ImageWrap,
  CardWrap,
  Card,
  Title,
  Name,
  Info,
} from "./Contact.styles";

export default function ContactSection() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    // 마우스 위치 (0~1)
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // 중심 기준 -1 ~ 1
    const offsetX = x - 0.5;
    const offsetY = y - 0.5;

    const rotateX = offsetY * -10; // 위아래
    const rotateY = offsetX * 12; // 좌우

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateZ(12px)
    `;
  };

  const handleLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateZ(0)
    `;
  };

  return (
    <Section id="contact">
      <Wrap>
        <ImageWrap>
          <Image
            src="/Photo_main.png"
            alt="profile"
            fill
            priority
            style={{ objectFit: "contain" }}
          />
        </ImageWrap>

        <CardWrap
          ref={cardRef}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
        >
          <Card>
            <Title>CONTACT</Title>
            <Name>Yoo Sung Hyun</Name>
            <Info>T. 010-2768-6839</Info>
            <Info>M. bonho96@naver.com</Info>
          </Card>
        </CardWrap>
      </Wrap>
    </Section>
  );
}
