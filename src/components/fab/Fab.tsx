"use client";

import { useRouter, usePathname } from "next/navigation";
import { FabWrap, FabButton } from "./Fab.styles";
import DarkModeIcon from "@/assets/svg/DarkMode.svg";
import HomeIcon from "@/assets/svg/Home.svg";
import { useThemeMode } from "@/context/ThemeContext";

export default function Fab() {
  const router = useRouter();
  const pathname = usePathname();
  const { toggle } = useThemeMode();

  const handleHome = () => {
    // ✅ 이미 메인 페이지면 최상단으로
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // ✅ 다른 페이지면 홈으로 이동
    router.push("/");
  };

  return (
    <FabWrap>
      {/* Dark Mode (위) */}
      <FabButton onClick={toggle} aria-label="Toggle theme" type="button">
        <DarkModeIcon />
      </FabButton>

      {/* Home (아래) */}
      <FabButton onClick={handleHome} aria-label="Go home" type="button">
        <HomeIcon />
      </FabButton>
    </FabWrap>
  );
}
