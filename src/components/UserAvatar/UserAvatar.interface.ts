import type { HTMLAttributes } from "react";

export interface UserAvatarProps extends Omit<HTMLAttributes<HTMLElement>, ""> {
  userId: number;
  size?: number;
}
