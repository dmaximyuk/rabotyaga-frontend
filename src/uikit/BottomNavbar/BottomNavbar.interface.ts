import type { ReactNode } from "react";

export type BottomNavbarItemsModel = Array<{ key: string; icon: ReactNode }>;

export interface BottomNavbarProps {
  items: BottomNavbarItemsModel;
  activeTab: string;
}
