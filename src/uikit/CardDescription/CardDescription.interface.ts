import type { HTMLAttributes, ReactNode } from "react";
import type { TranslationValues } from "i18nano";

export interface CardDescriptionProps
  extends Omit<HTMLAttributes<HTMLElement>, ""> {
  icon?: ReactNode;
  showPropagation?: boolean;
  title: string;
  text: string;
  textValues?: TranslationValues;
}
