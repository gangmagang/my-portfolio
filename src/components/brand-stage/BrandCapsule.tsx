"use client";

import { useState } from "react";
import {
  CapsuleWrapper,
  Capsule,
  Slot,
  SlotItem,
  Hint,
} from "./BrandCapsule.styles";

import Design from "@/assets/svg/Design.svg";
import Visual from "@/assets/svg/Visual.svg";
import ThatFit from "@/assets/svg/ThatFit.svg";
import TheBrand from "@/assets/svg/TheBrand.svg";

const ITEMS = [Design, Visual, ThatFit, TheBrand];

export default function BrandCapsule() {
  const [index, setIndex] = useState(0);
  const [state, setState] = useState<"center" | "up" | "down">("center");

  const Current = ITEMS[index];
  const Next = ITEMS[(index + 1) % ITEMS.length];

  const handleClick = () => {
    if (state !== "center") return;

    // 1️⃣ 현재 텍스트 위로 올라감
    setState("up");

    setTimeout(() => {
      // 2️⃣ 다음 텍스트를 아래에서 준비
      setIndex((prev) => (prev + 1) % ITEMS.length);
      setState("down");

      requestAnimationFrame(() => {
        // 3️⃣ 아래에서 내려와 중앙 안착
        setState("center");
      });
    }, 250);
  };

  return (
    <CapsuleWrapper>
      <Capsule onClick={handleClick}>
        <Slot>
          <SlotItem $state={state}>
            <Current />
          </SlotItem>
        </Slot>

        <Hint>Tap to switch!</Hint>
      </Capsule>
    </CapsuleWrapper>
  );
}
