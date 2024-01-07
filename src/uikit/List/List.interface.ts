import type { HTMLAttributes, ReactNode } from "react";

interface ListItem {
  title: string;
  icon?: ReactNode;
  to: string;
  disablePropagation?: boolean;
}

export interface ListProps extends Omit<HTMLAttributes<HTMLElement>, ""> {
  items: ListItem[];
}
