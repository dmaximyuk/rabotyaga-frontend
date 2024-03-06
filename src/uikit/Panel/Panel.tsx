import "./Panel.sass";

import { type FC } from "react";
import { classNames } from "utils";

import type { PanelProps } from "./Panel.interface";

export const Panel: FC<PanelProps> = ({
  className = "",
  panelWrapperClassName = "",
  children,
  panelHeader,
}) => {
  return (
    <div
      className={classNames({
        Panel: true,
        [className]: !!className,
      })}
    >
      {panelHeader}
      <div
        className={classNames({
          Panel__wrapper: true,
          [panelWrapperClassName]: !!panelWrapperClassName,
        })}
      >
        {children}
      </div>
    </div>
  );
};
