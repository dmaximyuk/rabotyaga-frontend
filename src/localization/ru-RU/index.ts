import { default as app } from "./app.json";
import { default as home } from "./home.json";
import { default as menu } from "./menu.json";
import { default as settings } from "./settings.json";
import { default as users } from "./users.json";

export const ru = {
  ...app,
  ...home,
  ...menu,
  ...settings,
  ...users,
};
