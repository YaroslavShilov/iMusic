import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from "styled-components";
import { Normalize } from "styled-normalize";
import { BrowserRouter } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
    body {
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;

        font-family: 'Montserrat', sans-serif;
        
        background: linear-gradient(143deg, #CFCFCF, #868686);
    }
    
    body *,
    body *:before,
    body *:after {
        box-sizing: border-box;
    }

    ul,
    li {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    
    p {
        margin: 0;
        padding: 0;
    }

    a,
    button {
        text-decoration: none;
        outline: none;
        transition: all 0.5s ease-in-out;
        &:hover {
            outline: none;
        }

        &:active {
            outline: none;
        }
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }
`;

const theme: DefaultTheme = {
  text: {
    title: {
      color: "#ffffff",
    },
    desc: {
      color: "#ADAFB3",
      fz: "14px",
    },
  },
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Normalize />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
