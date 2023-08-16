import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; // Import the i18n initialization file
import { Auth0Provider } from "@auth0/auth0-react"; // Import the Auth0Provider

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <I18nextProvider i18n={i18n}>
    <Auth0Provider
      domain="dev-li3l55h7lohos8c1.us.auth0.com"
      clientId="iGNPevUw5pZwvXCKDGctTY6gWwRf0B4i"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Auth0Provider>
  </I18nextProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
