"use client";

import BrandCapsule from "@/components/brand-stage/BrandCapsule";
import Hero from "@/components/hero/Hero";
import WorkSection from "@/components/work/WorkSection";
import ContentStage from "@/components/layout/ContentStage";
import ContactSection from "@/components/contact/ContactSection";

export default function Page() {
  return (
    <>
      <BrandCapsule />
      <ContentStage>
        <Hero />
        <WorkSection />
        <ContactSection />
      </ContentStage>
    </>
  );
}
