import { Section, Inner, HelloText, SubText, MainTitle } from "./Hero.styles";

export default function Hero() {
  return (
    <Section>
      <Inner>
        <HelloText>Hello!</HelloText>

        <SubText>
          <p>Designer Yoo Sunghyun</p>
          <p>Visuals that respect the brand’s mood.</p>
        </SubText>

        <MainTitle>
          브랜드 이미지를 존중하는
          <br />
          자연스러운 디자인을 만듭니다.
        </MainTitle>
      </Inner>
    </Section>
  );
}
