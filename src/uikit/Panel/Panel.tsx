import "./Panel.sass";

import { type FC } from "react";
import { classNames } from "utils";

import { PageProps } from "./Panel.interface";

export const Panel: FC<PageProps> = ({
  className = "",
  children,
  pageHeader,
}) => {
  return (
    <>
      {pageHeader}
      <div
        className={classNames({
          Panel: true,
          [className]: !!className,
        })}
      >
        <div className="Panel__wrapper">{children}</div>
      </div>
    </>
  );
};
