import React from "react";
import styled from "styled-components";

function App() {
  return (
    <AppStyle>
      <p>hello</p>
    </AppStyle>
  );
}

const AppStyle = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 680px;
  background-color: #181b21;
  border-radius: 45px;
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
