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

  const handleClick = () => {
    if (state !== "center") return;

    // 1️⃣ 현재 텍스트 위로 이동
    setState("up");

    setTimeout(() => {
      // 2️⃣ 다음 텍스트로 교체 후 아래 위치에서 대기
      setIndex((prev) => (prev + 1) % ITEMS.length);
      setState("down");

      requestAnimationFrame(() => {
        // 3️⃣ 중앙으로 내려오며 안착
        setState("center");
      });
    }, 250);
  };

  const Current = ITEMS[index];

  return (
    <CapsuleWrapper>
      <Capsule onClick={handleClick}>
        <Slot>
          <SlotItem $state={state}>
            <Current className="brand-svg" />
          </SlotItem>
        </Slot>

        <Hint>Tap to switch!</Hint>
      </Capsule>
    </CapsuleWrapper>
  );
}
