"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Nav, NavInner, NavItem, Indicator } from "./Navigation.styles";

const ITEMS = [
  { label: "MYSTIC", href: "/projects/mystic" },
  { label: "LAPIZ", href: "/projects/lapiz" },
  { label: "RESEARCH", href: "/projects/research" },
  { label: "SAMPLE", href: "/projects/archive" },
];

export default function Navigation() {
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const [indicator, setIndicator] = useState({
    left: 0,
    width: 96,
    visible: false,
  });

  const getIndicatorWidth = () => {
    const w = window.innerWidth;
    if (w <= 560) return 72;
    if (w <= 860) return 92;
    return 112;
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
        {ITEMS.map((item, i) => (
          <NavItem
            as={Link}
            href={item.href}
            key={item.label}
            ref={(el: HTMLAnchorElement | null) => {
              itemRefs.current[i] = el;
            }}
            onMouseEnter={() => moveIndicator(i)}
          >
            {item.label}
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
