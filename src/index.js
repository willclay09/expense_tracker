import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";
import { Provider } from "./context/context";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <SpeechProvider appId="fd4b995f-e700-4233-9bff-395ce028b8d0" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
