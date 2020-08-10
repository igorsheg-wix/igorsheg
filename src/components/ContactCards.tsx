import React from "react";
import Flex from "@components/Flex";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";
import { transparentize } from "polished";

const CARD_SIZE = 66;

const config = {
  mass: 0.1,
  tension: 500,
  friction: 40,
};

interface ContactCard {
  label: string;
  url: string;
  icon: any;
}

interface ContactCardsProps {
  items: ContactCard[];
}
const ContactCards = ({ items }: ContactCardsProps) => {
  const transitions = useTransition(items, (item) => item.label, {
    trail: 35,
    config,
    from: { opacity: 0, transform: `translateY(${CARD_SIZE + 6}px)` },
    enter: { opacity: 1, transform: `translateY(0)` },
  });

  return (
    <MainWrap>
      {transitions.map(({ item, props, key }, index) => (
        <Card key={key} item={items[index]} style={props} />
      ))}
    </MainWrap>
  );
};

const Card = ({ item, style }: { item: ContactCard; style: any }) => {
  const Icon = item.icon;

  return (
    <Wrap key={item.label}>
      <StyledCard style={style} href={item.url}>
        <Icon size={24} />
      </StyledCard>
    </Wrap>
  );
};

const MainWrap = styled.div`
  display: flex;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const Wrap = styled(Flex)`
  overflow: hidden;
  height: ${CARD_SIZE}px;
  width: auto;
  &:not(:last-child) {
    margin: 0 ${CARD_SIZE / 3}px 0 0;
  }

  @media (max-width: 768px) {
    &:not(:last-child) {
      margin: 0;
    }
  }
`;

const StyledCard = styled(animated.a)`
  @media (max-width: 768px) {
    width: ${CARD_SIZE}px;
    min-width: ${CARD_SIZE}px;
    height: ${CARD_SIZE}px;
    min-height: ${CARD_SIZE}px;
    border-radius: ${CARD_SIZE / 3}px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${CARD_SIZE / 3}px;
  width: ${CARD_SIZE}px;
  min-width: ${CARD_SIZE}px;
  height: ${CARD_SIZE}px;
  min-height: ${CARD_SIZE}px;
  box-shadow: inset 0 0 0 1px ${(p) => transparentize(0.7, p.theme.$D80)};
  color: ${(p) => p.theme.$D80};
  background: ${(p) => p.theme.$D10};
  transition: background 240ms cubic-bezier(0.19, 1, 0.22, 1);

  svg {
    stroke: currentColor;
    stroke-width: 1.5px;
  }

  &:hover {
    background: ${(p) => p.theme.$D80};
    color: ${(p) => p.theme.$D10};
  }
`;

export default ContactCards;
