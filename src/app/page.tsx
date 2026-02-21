"use client";

import BrandCapsule from "@/components/brand-stage/BrandCapsule";
import Hero from "@/components/hero/Hero";
import ThemeToggleDev from "@/components/dev/ThemeToggleDev";

export default function Page() {
  return (
    <>
      <BrandCapsule />
      <Spacer />
      <Hero />
      <ThemeToggleDev />
    </>
  );
}

const Spacer = () => <div style={{ height: "100vh" }} />;
