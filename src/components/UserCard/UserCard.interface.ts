import type { HTMLAttributes } from "react";

export interface UserCardProps
  extends Omit<HTMLAttributes<HTMLElement>, "onClick"> {
  userId: number;
  isShort?: boolean;
  onClick?: (userId: number) => void;
}
