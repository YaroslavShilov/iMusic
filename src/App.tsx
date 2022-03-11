import React from "react";
import styled from "styled-components";
import { Aside } from "./common/Aside";
import { Footer } from "./common/Footer";
import { Main } from "./common/Main";

function App() {
  return (
    <AppStyle>
      <Content>
        <Aside />
        <Main />
        <Footer />
      </Content>
    </AppStyle>
  );
}

const AppStyle = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Content = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 1fr 106px;
  grid-template-columns: 265px 1fr;
  grid-template-areas: "aside main" "aside footer";
  width: 100%;
  max-width: 1200px;
  height: 680px;
  background-color: #181b21;
  border-radius: 3px;
  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.55);
  overflow: hidden;

  &:after,
  &:before {
    content: "";
    position: absolute;

    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  &:before {
    top: -60px;
    right: -60px;
    box-shadow: 0 0 230px 80px rgba(255, 255, 255, 0.7);
  }

  &:after {
    bottom: -60px;
    left: -20px;
    box-shadow: 0 0 220px 70px rgba(255, 255, 255, 0.75);
  }
`;

export default App;
