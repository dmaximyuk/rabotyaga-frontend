import { type TranslationValues } from "i18nano";
import type { CSSProperties } from "react";

type TextTags = "h1" | "h2" | "h3" | "p" | "span";

export interface TextProps {
  className?: string;
  text: string;
  tag: TextTags;
  values?: TranslationValues;
  style?: CSSProperties;

  isBold?: boolean;
  isTransparent?: boolean;
}
