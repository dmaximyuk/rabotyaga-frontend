import "./styles/main.scss";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router } from "elum-router/react";
import { TranslationProvider } from "i18nano";

import bridge from "@vkontakte/vk-bridge";

import { App } from "core";

import { ru } from "translations";

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

bridge.send("VKWebAppInit");

bridge.send("VKWebAppGetConfig").then((e) => {
  const getTheme = (scheme: string): "dark" | "light" => {
    switch (scheme) {
      case "vkcom_dark":
      case "space_gray":
      case "dark":
        return "dark";
      case "vkcom_light":
      case "client_light":
      default:
        return "light";
    }
  };

  console.log(getTheme(e.scheme ?? e.appearance));
});
