import { ReactNode } from "react";

export interface PageSwitchProps {
  children: ReactNode;
  activePage: string;
  tabbar?: ReactNode;
}
