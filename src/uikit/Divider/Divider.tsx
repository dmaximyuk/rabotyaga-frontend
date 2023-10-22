import "./Divider.sass";

import { type FC } from "react";

import type { DividerProps } from "./Divider.interface";

export const Divider: FC<DividerProps> = () => {
  return <hr className="Divider" />;
};
