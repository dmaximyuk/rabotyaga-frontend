import type { HTMLAttributes } from "react";

export interface TextTruncateProps
  extends Omit<HTMLAttributes<HTMLElement>, ""> {
  text: string;
  linesToShow: number;
}
