import { Theme as _Theme } from "theme";

declare global {
  /** Global theme for our app. We can use it without importing */
  export type Theme = _Theme;
}

export {};
