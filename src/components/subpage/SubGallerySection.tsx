"use client";

import Image from "next/image";
import {
  Section,
  ImageGrid,
  ImageCard,
  Title,
  LinkRow,
  ExternalLink,
} from "./SubGallerySection.styles";

import { Description } from "./SubHero.styles";
import { TextBlock } from "./SubHighlightSection.styles";

type LinkItem = {
  label: string;
  href: string;
};

type Props = {
  images: string[];
  title: string;
  description: string;
  links: LinkItem[];
};

export default function SubGallerySection({
  images,
  title,
  description,
  links,
}: Props) {
  return (
    <Section>
      <ImageGrid>
        {images.map((src, i) => (
          <ImageCard key={i}>
            <Image
              src={src}
              alt={`gallery-${i}`}
              fill
              style={{ objectFit: "cover" }}
            />
          </ImageCard>
        ))}
      </ImageGrid>

      <Title>{title}</Title>

      <TextBlock>
        <Description>{description}</Description>
      </TextBlock>

      <LinkRow>
        {links.map((link, i) => (
          <ExternalLink
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </ExternalLink>
        ))}
      </LinkRow>
    </Section>
  );
}
