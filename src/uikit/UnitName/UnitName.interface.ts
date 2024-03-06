import type { ReactNode } from "react";

export interface UnitNameProps {
  userId: number;
  isBold?: boolean;
  tagName?: "h1" | "h2" | "p" | "span";
  after?: ReactNode;
  visibleUserId?: boolean;
}
