import type { HTMLAttributes } from "react";

export interface LineProps extends Omit<HTMLAttributes<HTMLElement>, ""> {
  justifyContent?: "space-between" | "flex-start";
  alignItems?: "center" | "flex-end" | "baseline";
  gap?: number | string;
}
