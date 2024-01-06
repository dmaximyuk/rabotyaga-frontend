import "./PanelHeader.sass";

import { type FC } from "react";
import { backPage } from "elum-router/react";

import { Text } from "uikit";

import { IconArrowLeft } from "@tabler/icons-react";
import type { PageHeaderProps } from "./PanelHeader.interface";

export const PanelHeader: FC<PageHeaderProps> = ({
  title,
  subtitle,
  withBack = false,
  before,
}) => {
  return (
    <header className="PanelHeader">
      {withBack && !before && (
        <div className="PanelHeader__icon--before" onClick={() => backPage()}>
          <IconArrowLeft />
        </div>
      )}

      {!withBack && before && (
        <div className="PanelHeader__icon--before">{before}</div>
      )}

      <div>
        <Text tag="p" text={title} />
        <Text tag="span" isTransparent text={subtitle} />
      </div>
    </header>
  );
};
