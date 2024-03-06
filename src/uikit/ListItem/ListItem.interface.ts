import type { HTMLAttributes, ReactNode } from "react";

export interface ListItemProps extends Omit<HTMLAttributes<HTMLElement>, ""> {
  icon: ReactNode;
  title: string;
  disablePropagation?: boolean;
}
