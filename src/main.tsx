import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App data-bs-theme="dark"/>
  </React.StrictMode>
);
