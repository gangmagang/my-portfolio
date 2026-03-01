"use client";

import {
  Card,
  TopLabel,
  BottomLabel,
  Content,
  Item,
} from "./SubMetaCard.styles";

type Props = {
  title: string;
  items: string[];
  footer?: string;
};

export default function SubMetaCard({ title, items, footer }: Props) {
  return (
    <Card>
      <TopLabel>{title}</TopLabel>

      <Content>
        {items.map((item, i) => (
          <Item key={i}>• {item}</Item>
        ))}
      </Content>

      {footer && <BottomLabel>{footer}</BottomLabel>}
    </Card>
  );
}
