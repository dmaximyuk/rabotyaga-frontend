import { type TranslationValues } from "i18nano";

type TextTags = "h1" | "h2" | "h3" | "p" | "span";

export interface TextProps {
  className?: string;
  text: string;
  tag: TextTags;
  values?: TranslationValues;

  isBold?: boolean;
  isTransparent?: boolean;
}
