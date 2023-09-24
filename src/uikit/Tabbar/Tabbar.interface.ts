import type { ReactNode } from "react";

export type TabbarItemsModel = Array<{ key: string; icon: ReactNode }>;

export interface TabbarProps {
  items: TabbarItemsModel;
  activeTab: string;
}
