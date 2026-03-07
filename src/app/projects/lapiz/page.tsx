import SubLayout from "@/components/subpage/SubLayout";
import SubHero from "@/components/subpage/SubHero";
import SubMetaCard from "@/components/subpage/SubMetaCard";
import { MetaSection } from "@/components/subpage/SubMetaSection.styles";
import SubHighlightSection from "@/components/subpage/SubHighlightSection";
import SubGallerySection from "@/components/subpage/SubGallerySection";

export default function MysticPage() {
  return (
    <SubLayout>
      <SubHero
        title="Lapiz Sensible"
        subtitle="Content Design | Visual System"
        image="/lapiz.png"
        darkImage="/lapiz_wh.png"
        projectLabel="Fashion Brand Project"
        heroSubTop="Eyewear Brand Identity"
        heroSubBottom="Visual Design"
        description={`감각적인 연필, Lapiz Sensible의 브랜드 톤은 최대한 유지하며
다양한 인플루언서들의 이미지를 자연스럽게 융화시키는 데 집중했습니다.
컬러는 인플루언서를 따르되, 스타일은 유지하는 방향으로 설계했습니다.`}
      />
      <MetaSection>
        <SubMetaCard
          title="ROLE"
          items={[
            "비주얼 톤 정리",
            "콘텐츠 비주얼 기획",
            "인스타그램 콘텐츠 디자인",
            "상세페이지 디자인",
            "쇼핑몰 배너 디자인",
          ]}
          footer="촬영 제외 디자인 작업 전반"
        />

        <SubMetaCard
          title="DELIVERABLES"
          items={[
            "인스타그램 콘텐츠",
            "쇼핑몰 배너",
            "제품 상세페이지",
            "면세점 집기 디자인",
          ]}
          footer=""
        />
      </MetaSection>
      <SubHighlightSection
        smallTitle="구조는 정리하고"
        bigTitle="감성은 자연스럽게"
        topDescription="인플루언서별 퍼스널 컬러와 촬영 환경이 다르기 때문에 컬러는 강제하지 않고, 조화시키는 방향으로 조정했습니다."
        bottomDescription="이미지의 컬러는 유지하면서도,간격과 대비를 조정해 시선이 제품으로 자연스럽게 이어지도록 신경썼습니다."
        image="/banner_1.png"
      />
      <SubGallerySection
        images={["/@INSTA_미즈노.png", "/INSTA_강지혜_main.png"]}
        title="브랜드와 인플루언서의 자연스러운 콜라보."
        description="다양한 이미지가 섞여도 하나의 브랜드처럼 보이도록 제품에 시선이 자연스럽게 모일 수 있도록 디자인하는데 신경썼습니다."
        links={[
          {
            label: "",
            href: "",
          },
          {
            label: "",
            href: "",
          },
          {
            label: "",
            href: "",
          },
        ]}
      />
    </SubLayout>
  );
}
