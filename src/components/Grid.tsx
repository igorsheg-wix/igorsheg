import React, { FC } from "react";
import styled from "styled-components";
import Flex from "@components/Flex";

interface GridProps {}

const Grid: FC<GridProps> = ({ children }) => {
  return (
    <Layout column justify="center" align="center">
      <Content column>{children}</Content>
    </Layout>
  );
};

const Layout = styled(Flex)<GridProps>`
  position: relative;
  margin: 0;
  overflow: auto;
  height: 100vh;
  width: 100vw;
`;
const Content = styled(Flex)<GridProps>`
  max-width: 960px;
  padding: 0 30px;
  position: relative;
  margin-left: calc(100vw - 100%);
`;

export default Grid;
