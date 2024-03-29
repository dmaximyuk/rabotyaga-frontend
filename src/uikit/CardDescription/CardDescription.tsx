import "./CardDescription.sass";

import { type FC } from "react";

import { Card, Text } from "uikit";

import { IconCustomChevronRight } from "assets";

import type { CardDescriptionProps } from "./CardDescription.interface";

export const CardDescription: FC<CardDescriptionProps> = (props) => {
  return (
    <Card className="CardDescription">
      {props.icon && <div className="CardDescription__icon">{props.icon}</div>}
      <div className="CardDescription__typography">
        <Text text={props.text} tag={"p"} isTransparent />
        <Text text={props.title} tag={"h2"} />
      </div>
      {props.showPropagation && (
        <IconCustomChevronRight className="CardDescription_chevron" />
      )}
    </Card>
  );
};
