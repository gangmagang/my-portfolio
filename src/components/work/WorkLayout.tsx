"use client";

import {
  Grid,
  Left,
  Right,
  Half,
  ResearchWrap,
  SampleWrap,
} from "./Work.styles";

import MysticCard from "./cards/MysticCard";
import LapizCard from "./cards/LapizCard";
import ResearchCard from "./cards/ResearchCard";
import SampleCard from "./cards/SampleCard";

export default function WorkLayout() {
  return (
    <Grid>
      <Left>
        <Half>
          <MysticCard />
        </Half>
        <Half>
          <LapizCard />
        </Half>
      </Left>

      <Right>
        <ResearchWrap>
          <ResearchCard />
        </ResearchWrap>
        <SampleWrap>
          <SampleCard />
        </SampleWrap>
      </Right>
    </Grid>
  );
}
