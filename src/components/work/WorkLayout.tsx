"use client";

import Link from "next/link";
import styled from "styled-components";

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
          <CardLink href="/projects/mystic">
            <MysticCard />
          </CardLink>
        </Half>

        <Half>
          <CardLink href="/projects/lapiz">
            <LapizCard />
          </CardLink>
        </Half>
      </Left>

      <Right>
        <ResearchWrap>
          <CardLink href="/projects/research">
            <ResearchCard />
          </CardLink>
        </ResearchWrap>

        <SampleWrap>
          <CardLink href="/projects/archive">
            <SampleCard />
          </CardLink>
        </SampleWrap>
      </Right>
    </Grid>
  );
}

/* 🔥 Link wrapper */
const CardLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
`;
