import "./PanelHeader.sass";

import { type FC } from "react";

import { Text } from "uikit";

import type { PageHeaderProps } from "./PanelHeader.interface";

export const PanelHeader: FC<PageHeaderProps> = ({ title, subTitle }) => {
  return (
    <header className="PanelHeader">
      <Text mode="text" text={title} />
      <Text mode="description" text={subTitle} />
    </header>
  );
};
