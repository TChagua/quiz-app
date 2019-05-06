import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    background: #F3F1F1;

    * {
      box-sizing: border-box;
  }
`;
ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
