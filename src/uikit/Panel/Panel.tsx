import "./Panel.sass";

import { type FC } from "react";
import { classNames } from "functions";

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
        {children}
      </div>
    </>
  );
};
