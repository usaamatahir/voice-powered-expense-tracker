import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TransactionProvider } from "./context/context";
import { SpeechProvider } from "@speechly/react-client";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <SpeechProvider
      appId="2798133c-0459-411f-89cd-9e48e964ad52"
      language="en-US"
    >
      <TransactionProvider>
        <App />
      </TransactionProvider>
    </SpeechProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
