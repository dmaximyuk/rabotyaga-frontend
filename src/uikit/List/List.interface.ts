import type { HTMLAttributes, ReactNode } from "react";

export interface ListItemModel {
  title: string;
  icon?: ReactNode;
  to: string;
  disablePropagation?: boolean;
}

export interface ListProps extends Omit<HTMLAttributes<HTMLElement>, ""> {
  items: ListItemModel[];
}
