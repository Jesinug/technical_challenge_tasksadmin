import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MuiThemeProvider } from "@material-ui/core";

import "bootswatch/dist/cyborg/bootstrap.min.css";
import "./index.css";
import { oasisTheme } from "./theme/oasis";

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={oasisTheme()}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
