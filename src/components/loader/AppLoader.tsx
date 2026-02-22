"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import { useThemeMode } from "@/context/ThemeContext";

export default function AppLoader() {
  const { ready } = useThemeMode();
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (!ready) return;

    // 폰트까지 기다리면 “처음 CSS 이상한 느낌” 더 잘 가려짐
    const waitFonts =
      typeof document !== "undefined" && "fonts" in document
        ? // @ts-ignore
          document.fonts.ready
        : Promise.resolve();

    waitFonts.then(() => {
      requestAnimationFrame(() => setHide(true));
    });
  }, [ready]);

  // 로딩 중 스크롤 막기(선택이지만 추천)
  useEffect(() => {
    if (!hide) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [hide]);

  return (
    <Wrap data-hide={hide}>
      <Dots aria-label="Loading">
        <span />
        <span />
        <span />
      </Dots>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: fixed;
  inset: 0;
  z-index: 99999;

  /* ✅ 무조건 불투명 배경 (뒤 절대 안 보이게) */
  background: ${({ theme }) => theme.color.bg};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: opacity 0.35s ease;
  opacity: 1;
  pointer-events: all;

  &[data-hide="true"] {
    opacity: 0;
    pointer-events: none;
  }
`;

const Dots = styled.div`
  padding: 20px 40px;
  border-radius: 999px;

  border: 1px solid ${({ theme }) => theme.color.border};
  box-shadow: ${({ theme }) => theme.shadow.card};
  background: ${({ theme }) => theme.color.cardBg};

  display: flex;
  align-items: center;
  gap: 8px;

  span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.text};
    animation: blink 1.2s infinite ease-in-out both;
    opacity: 0.2;
  }

  span:nth-child(2) {
    animation-delay: 0.15s;
  }
  span:nth-child(3) {
    animation-delay: 0.3s;
  }

  @keyframes blink {
    0%,
    80%,
    100% {
      opacity: 0.2;
      transform: translateY(0);
    }
    40% {
      opacity: 1;
      transform: translateY(-2px);
    }
  }
`;
