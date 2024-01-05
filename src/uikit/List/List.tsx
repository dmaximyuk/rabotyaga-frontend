import "./List.sass";

import { type FC } from "react";
import { nextPage } from "elum-router/react";

import { Text } from "uikit";

import type { ListProps } from "./List.interface";

export const List: FC<ListProps> = (props) => {
  return (
    <div className="List">
      {props.items.map((item) => {
        return (
          <div
            key={`list-item-${item.to}`}
            className="List__item"
            onClick={() => nextPage({ panel: item.to })}
          >
            {item.icon}
            <Text text={item.title} tag="p" />
          </div>
        );
      })}
    </div>
  );
};
