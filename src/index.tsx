import React from "react";
import ReactDOM from "react-dom";
import App from "@/App";
import GlobalStyle from "@/styles/GlobalStyle";
import store from "@/store/index";
import { Provider } from "react-redux";

ReactDOM.render(
  <>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </>,
  document.getElementById("index")
);
