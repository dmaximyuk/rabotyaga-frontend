import type { HTMLAttributes, ReactNode } from "react";

export interface RootProps extends Omit<HTMLAttributes<HTMLElement>, ""> {
  activeView: string;
  bottomNavbar: ReactNode;
}
