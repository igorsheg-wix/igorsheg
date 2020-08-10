import React, { ReactNode } from "react";
import styled, { CSSObject, keyframes, css } from "styled-components";

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

type JustifyValues =
  | "center"
  | "space-around"
  | "space-between"
  | "flex-start"
  | "flex-end";

type AlignValues =
  | "stretch"
  | "center"
  | "baseline"
  | "flex-start"
  | "flex-end";

type Props = {
  column?: boolean;
  shrink?: boolean;
  align?: AlignValues;
  justify?: JustifyValues;
  auto?: boolean;
  className?: string;
  children?: ReactNode;
  grid?: boolean;
  style?: CSSObject;
  faded?: boolean;
};

const Flex = (props: Props) => {
  const { children, ...restProps } = props;
  return <Container {...restProps}>{children}</Container>;
};

const Container = styled.div<Props>`
  width: 100%;
  max-width: ${(p) => (p.grid ? "1140px" : "auto")};
  display: flex;
  flex: ${({ auto }) => (auto ? "1 1 auto" : "initial")};
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  flex-shrink: ${({ shrink }) => (shrink ? 1 : "initial")};
  min-height: 0;
  min-width: 0;
  ${(p) =>
    p.faded &&
    css`
      animation: ${fadeIn} 250ms ease-in-out;
    `}
`;

export default Flex;
