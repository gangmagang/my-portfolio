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
        title="MYSTIC BLOOD"
        subtitle="Brand Application | Visual Direction"
        image="/Mystic_logo.png"
        projectLabel="Brand Application Project"
        heroSubTop="Premium Car Care"
        heroSubBottom="Brand Identity"
        description={`Mystic Blood는 고가 세차용품 브랜드의 정체성을 보다 명확히 드러내기 위해 진행한 리브랜딩 프로젝트입니다.
기존 브랜드 톤을 해치지 않는 선에서 톤앤매너를 재정리하고, 표현의 밀도를 조정해 절제된 프리미엄 무드를 구축했습니다.
제품 썸네일부터 상세페이지, 카탈로그, 브랜드몰까지 다양한 컨텐츠에 동일한 톤앤매너가 유지되도록 확장했습니다.`}
      />
      <MetaSection>
        <SubMetaCard
          title="ROLE"
          items={[
            "브랜드 톤앤매너 정리",
            "브랜드 비주얼 디자인",
            "상세페이지 및 카탈로그 디자인",
            "쿠팡 브랜드몰 디자인",
            "라벨 캐릭터 리디자인 등",
          ]}
          footer="촬영 제외 디자인 작업 전반"
        />

        <SubMetaCard
          title="DELIVERABLES"
          items={[
            "브랜드 카탈로그",
            "상세페이지 및 제품 썸네일",
            "브랜드몰 비주얼",
            "SNS 포스터",
            "일부 제품 시연 영상",
          ]}
          footer="이외 촬영물 기획, 콘텐츠 전략"
        />
      </MetaSection>
      <SubHighlightSection
        smallTitle="과시가 아닌"
        bigTitle="밀도와 깊이로"
        topDescription="어두운 배경 위에 은은한 광원을 더해 공간감을 만들었습니다. 표현의 질감은 뉴모피즘과 그라디언트로 표현해 깊이감과 톤을 살리고 자연스러운 컬러 포인트만 남겨 브랜드의 톤을 유지했습니다."
        bottomDescription="상세페이지, 카탈로그, 브랜드몰까지 동일한 비주얼 기준을 유지하기 위해 타이포스타일과 컬러 밀도를 통일해 매체가 달라도 브랜드 톤이 흔들리지 않도록 신경썼습니다."
        image="/Mystic-sub_0.png"
      />
      <SubGallerySection
        images={["/Mystic-sub_1.png", "/Mystic-sub_2.png"]}
        title="밀도와 깊이를 통해 브랜드의 중심을 재정비했습니다."
        description="깊이감과 질감 표현이 과시 분위기를 해치지 않도록 최대한 자연스럽고 은은하게 사용해 브랜드가 가진 강한 인상이 자연스럽게 유지되도록 균형을 맞췄습니다."
        links={[
          {
            label: "Official Product Page",
            href: "https://mysticblood.co.kr/product/mystic-haeundae-perfume-quick-detailer/113/category/42/display/1/",
          },
          {
            label: "Brand Web Zine",
            href: "https://www.figma.com/proto/C2gAjAYgkYptPbk3dhKDq1/Mystic-Blood-Brand-Identity?node-id=287-516&starting-point-node-id=1%3A2&t=VakETtSvSyQV2XYf-1",
          },
          {
            label: "Coupang Brand Mall",
            href: "https://shop.coupang.com/mysticblood?source=brandstore_sdp_atf_topbadge&pid=8665496498&viid=93218063905&platform=p&brandId=0&btcEnableForce=false",
          },
        ]}
      />
    </SubLayout>
  );
}
