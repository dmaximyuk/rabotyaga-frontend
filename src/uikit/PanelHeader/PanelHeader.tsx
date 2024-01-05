import "./PanelHeader.sass";

import { type FC } from "react";
import { backPage } from "elum-router/react";

import { Text } from "uikit";

import { IconArrowLeft } from "@tabler/icons-react";
import type { PageHeaderProps } from "./PanelHeader.interface";

export const PanelHeader: FC<PageHeaderProps> = ({
  title,
  withBack = false,
}) => {
  return (
    <header className="PanelHeader">
      {withBack && (
        <div className="PanelHeader__button-back" onClick={() => backPage()}>
          <IconArrowLeft />
        </div>
      )}

      <div>
        <Text tag="p" isBold text={title} />
      </div>
    </header>
  );
};
