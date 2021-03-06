import React from "react";
import ReactDOM from "react-dom";
import Routes from "./main/Routes";
import Providers from "./main/Providers";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <Routes />
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
