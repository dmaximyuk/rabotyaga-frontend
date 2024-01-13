import type { ReactNode } from "react";
import { Views } from "store/models";

export type BottomNavbarItemsModel = Array<{ key: Views; icon: ReactNode }>;

export interface BottomNavbarProps {
  items: BottomNavbarItemsModel;
  activeTab: string;
}
