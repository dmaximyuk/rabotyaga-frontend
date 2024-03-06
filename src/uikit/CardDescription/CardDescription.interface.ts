import type { HTMLAttributes, ReactNode } from "react";

export interface CardDescriptionProps
  extends Omit<HTMLAttributes<HTMLElement>, ""> {
  icon?: ReactNode;
  showPropagation?: boolean;
  title: string;
  text: string;
}
