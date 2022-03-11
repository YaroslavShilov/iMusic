import React from "react";
import styled from "styled-components";
import { Header } from "./Header";

export const Main = () => {
  return (
    <MainStyle>
      <Header />
      <div>main</div>
    </MainStyle>
  );
};

const MainStyle = styled.main`
  grid-area: main;
`;
