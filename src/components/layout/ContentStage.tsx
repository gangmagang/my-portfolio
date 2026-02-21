"use client";

import styled from "styled-components";

export default function ContentStage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Stage>
      <Backdrop />
      <Content>{children}</Content>
    </Stage>
  );
}

/* 전체 스테이지 */
const Stage = styled.div`
  position: relative;
  z-index: 10;
  margin-top: 100vh; /* BrandCapsule 아래에서 시작 */
`;

/* 뒤를 가리는 레이어 */
const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;

  background: ${({ theme }) =>
    theme.color.bg === "#0b0b0b"
      ? "rgba(11,11,11,0.6)"
      : "rgba(255,255,255,0.6)"};

  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;

/* 실제 컨텐츠 */
const Content = styled.div`
  position: relative;
  z-index: 1;
`;
