import type { ReactNode } from "react";

export interface PageProps extends React.HTMLProps<HTMLDivElement> {
  pageHeader: ReactNode;
}
