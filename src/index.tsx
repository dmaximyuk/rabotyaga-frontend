import "./styles/main.scss";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TranslationProvider } from "i18nano";
import { Router } from "elum-router/react";

import { App } from "core";

import { ru } from "localization";

const translations = {
  ru: async () => ru,
};

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <TranslationProvider translations={translations} language="ru">
      <Router branch="main">
        <App />
      </Router>
    </TranslationProvider>
  </StrictMode>,
);
