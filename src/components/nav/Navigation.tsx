"use client";

import { useRef, useState } from "react";
import { Nav, NavInner, NavItem, Indicator } from "./Navigation.styles";

const ITEMS = ["MYSTIC", "LAPIZ", "RESEARCH", "ARCHIVE"];

export default function Navigation() {
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const [indicator, setIndicator] = useState({
    left: 0,
    width: 96,
    visible: false,
  });

  const getIndicatorWidth = () => {
    const w = window.innerWidth;
    if (w <= 560) return 72; // mobile
    if (w <= 860) return 92; // tablet
    return 112; // default
  };

  const moveIndicator = (index: number) => {
    const item = itemRefs.current[index];
    const nav = navRef.current;
    if (!item || !nav) return;

    const itemRect = item.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();

    const width = getIndicatorWidth();
    const centerX = itemRect.left - navRect.left + itemRect.width / 2;

    setIndicator({
      left: centerX - width / 2,
      width,
      visible: true,
    });
  };

  const resetIndicator = () => {
    setIndicator((prev) => ({ ...prev, visible: false }));
  };

  return (
    <Nav>
      <NavInner ref={navRef} onMouseLeave={resetIndicator}>
        {ITEMS.map((label, i) => (
          <NavItem
            key={label}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            onMouseEnter={() => moveIndicator(i)}
          >
            {label}
          </NavItem>
        ))}

        <Indicator
          style={{
            left: indicator.left,
            width: indicator.width,
            opacity: indicator.visible ? 1 : 0,
          }}
        />
      </NavInner>
    </Nav>
  );
}
