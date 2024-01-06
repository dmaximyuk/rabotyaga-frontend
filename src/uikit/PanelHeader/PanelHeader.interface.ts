import type { ReactNode } from "react";

export interface PageHeaderProps {
  title: string;
  subtitle: string;
  withBack?: boolean;
  before?: ReactNode;
}
