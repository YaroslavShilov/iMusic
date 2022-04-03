import React from "react";
import styled from "styled-components";
import { Header } from "./Header";
import { Section } from "./components/Section";
import SimpleBar from "simplebar-react";
import "simplebar/src/simplebar.css";

export const Main = () => {
  return (
    <MainStyle>
      <Header />

      <Content>
        <Section title="Section title" subtitle="Section subtitle" />
        <Section title="Section title" subtitle="Section subtitle" />
        <Section title="Section title" subtitle="Section subtitle" />
      </Content>
    </MainStyle>
  );
};

const MainStyle = styled.main`
  grid-area: main;
  background: linear-gradient(to bottom, #32267b 0%, #23283d 200px, #23283d);
`;

const Content = styled(SimpleBar)`
  max-height: 530px;
  padding: 18px 30px 18px;

  .simplebar-scrollbar:before {
    background-color: #fff;
    border-radius: 3px;
    opacity: 0.4;
  }
`;
