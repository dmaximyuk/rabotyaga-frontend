import type { ReactNode } from "react";

export interface PanelProps extends React.HTMLProps<HTMLDivElement> {
  panelHeader: ReactNode;
  panelWrapperClassName?: string;
}
