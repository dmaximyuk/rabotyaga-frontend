import { type TranslationValues } from "i18nano";

type TextMode =
  | "title"
  | "title-bold"
  | "text"
  | "text-bold"
  | "text-bold-transparent"
  | "description"
  | "description-bold";

export interface TextProps {
  className?: string;
  text: string;
  mode: TextMode;
  isDescription?: boolean;
  values?: TranslationValues;
}
