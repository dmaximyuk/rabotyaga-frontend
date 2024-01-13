import "./Grid.sass";

import { type FC } from "react";

import type { GridProps } from "./Grid.interface";

export const Grid: FC<GridProps> = (props) => {
  return <div className="Grid">{props.children}</div>;
};
