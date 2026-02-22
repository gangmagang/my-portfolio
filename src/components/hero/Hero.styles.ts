import styled from "styled-components";
import { mq } from "@/styles/breakpoints";

export const Section = styled.section`
  position: relative;
  z-index: 10;

  min-height: 100vh;

  padding: 160px 30px 120px;
  ${mq.down("tablet")} {
    padding: 160px 20px;
  }
`;

export const Inner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  ${mq.down("laptop")} {
    max-width: 860px;
  }

  ${mq.down("tablet")} {
    padding: 0 24px;
  }
`;

export const SubText = styled.div`
  margin-bottom: 120px;
  line-height: 1.2;

  p:first-child {
    font-size: 20px;
    opacity: 0.6;
    font-weight: 300;
    margin-bottom: 0;
    ${mq.down("laptop")} {
      font-size: 18px;
    }
    ${mq.down("tablet")} {
      font-size: 16px;
    }
    ${mq.down("mobile")} {
      font-size: 10px;
    }
  }

  p:last-child {
    font-size: 28px;
    font-weight: 600;
    margin-top: 12px;
    ${mq.down("laptop")} {
      font-size: 26px;
    }
    ${mq.down("tablet")} {
      font-size: 20px;
    }
    ${mq.down("mobile")} {
      font-size: 14px;
    }
  }
`;

export const HelloText = styled.h2`
  font-family: "SUIT";
  font-weight: 900;
  font-size: 130px;
  line-height: 1;

  color: transparent;
  -webkit-text-stroke: 2px #c3c9f7;

  margin-bottom: 115px;

  ${mq.down("laptop")} {
    font-size: 110px;
  }

  ${mq.down("tablet")} {
    font-size: 92px;
  }
`;

export const MainTitle = styled.h1`
  font-size: 62px;
  font-weight: 800;
  line-height: 1.4;
  letter-spacing: -0.5px;

  ${mq.down("laptop")} {
    font-size: 52px;
  }

  ${mq.down("tablet")} {
    font-size: 36px;
  }
  ${mq.down("mobile")} {
    font-size: 22px;
  }
`;
