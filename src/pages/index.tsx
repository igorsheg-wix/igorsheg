import React from "react";
import Grid from "@components/Grid";
import { PAGE_CONTENT, CONTACT_POINTS } from "@static/data";
import ContactCards from "@components/ContactCards";
import Padder from "@components/Padder";
import styled from "styled-components";
import Fade from "@components/Fade";

const App = () => {
  return (
    <Grid>
      <Fade children={<Title>{PAGE_CONTENT.title}</Title>} />
      <Padder y={18} />

      <Fade children={<Subtitle>{PAGE_CONTENT.subtitle}</Subtitle>} />
      <Padder y={48} />

      <ContactCards items={CONTACT_POINTS} />
    </Grid>
  );
};

const Title = styled.h1`
  font-size: 66px;
  @media (max-width: 768px) {
    font-size: 48px;
  }
`;
const Subtitle = styled.p`
  font-size: 20px;
  line-height: 30px;
`;

export default App;
