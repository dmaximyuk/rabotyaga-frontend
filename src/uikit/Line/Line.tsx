import "./Line.sass";

import { type FC } from "react";

import type { LineProps } from "./Line.interface";
import { classNames } from "utils";

export const Line: FC<LineProps> = (props) => {
  return (
    <div
      className={classNames({
        Line: true,
        [`${props.className}`]: !!props.className,
      })}
    >
      {props.children}
    </div>
  );
};
