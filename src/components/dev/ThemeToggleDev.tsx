"use client";

import styled from "styled-components";
import { useThemeMode } from "@/context/ThemeContext";

export default function ThemeToggleDev() {
  const { mode, toggle } = useThemeMode();

  return (
    <Button onClick={toggle}>{mode === "dark" ? "🌙 DARK" : "☀️ LIGHT"}</Button>
  );
}

const Button = styled.button`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 2000;

  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.color.border};

  background: ${({ theme }) => theme.color.cardBg};
  color: ${({ theme }) => theme.color.text};

  font-size: 12px;
  font-weight: 600;

  cursor: pointer;
  opacity: 0.6;

  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;
