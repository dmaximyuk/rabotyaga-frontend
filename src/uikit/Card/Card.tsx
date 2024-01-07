import "./Card.sass";

import { type FC } from "react";

import type { CardProps } from "./Card.interface";
import { classNames } from "utils";

export const Card: FC<CardProps> = (props) => {
  return (
    <div
      className={classNames({
        Card: true,
        [`${props.className}`]: !!props.className,
      })}
    >
      {props.children}
    </div>
  );
};
