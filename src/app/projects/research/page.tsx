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
        title="Research Factory"
        subtitle="UI Structure | Front-end Implementation"
        image="/RFactory.png"
        projectLabel="Web Platform Project"
        heroSubTop="UX/UI Design"
        heroSubBottom="Brand Identity"
        description={`의료 종사자를 위한 논문 정리, 일러스트레이터 연결 플랫폼으로, 연구 자료를 효율적으로 탐색하고 이해할 수 있도록 설계된 웹 서비스입니다.
기존 와이어프레임 구조를 기반으로 UI를 정리, 디자인하고 React와 TypeScript, styled-components를 활용해 프론트엔드 퍼블리싱을 진행했습니다.`}
      />
      <MetaSection>
        <SubMetaCard
          title="ROLE"
          items={[
            "UI 구조 구체화",
            "HTML · CSS 퍼블리싱",
            "React / Next.js 기반 구현",
            "간단한 JS 인터랙션 적용",
          ]}
          footer="와이어프레임은 기존에 제작돼있었음"
        />

        <SubMetaCard
          title="DELIVERABLES"
          items={[
            "웹사이트 UI 디자인",
            "페이지 레이아웃 시스템",
            "React 기반 화면 구현",
            "HTML, CSS 작성",
            "카드뉴스 콘텐츠",
          ]}
          footer="이외 PPT 제작, 유튜브 간단 편집 등"
        />
      </MetaSection>
      <SubHighlightSection
        smallTitle="디자인과 구현을"
        bigTitle="함께 설계"
        topDescription="기존 구조를 분석한 뒤, 정보 위계를 재배치했습니다.
사용자 흐름에 맞게 섹션을 정리하고, UI 밀도를 조정했습니다.
불필요한 시각 요소는 제거하고 기능 중심으로 재구성했습니다."
        bottomDescription="React와 Next.js 환경에서 styled-components 기반으로 화면을 구현했습니다.
컴포넌트 단위로 분리해 유지보수가 편리하도록 신경썼으며
간단한 JavaScript 인터랙션으로 사용성을 보완했습니다."
        image="/RF_01.png"
      />
      <SubGallerySection
        images={["/RF_02.png", "/RF_03.png"]}
        title="디자인을 구현까지 연결하는 방식을 택했습니다."
        description="디자인 단계에서 설정한 간격과 위계가 실제 코드에서도 유지되도록 신경 썼으며
시각과 구조가 분리되지 않도록 구현 과정에서 반복적으로 조정했습니다."
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
