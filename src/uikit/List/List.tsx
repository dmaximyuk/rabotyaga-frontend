import "./List.sass";

import { type FC } from "react";
import { nextPage } from "elum-router/react";

import { Text } from "uikit";

import type { ListProps } from "./List.interface";

import { IconChevronRight } from "@tabler/icons-react";

export const List: FC<ListProps> = (props) => {
  return (
    <div className="List">
      {props.items.map((item) => {
        return (
          <div
            key={`list-item-${item.to}`}
            className="List__item"
            onClick={
              !item.disablePropagation
                ? () => nextPage({ panel: item.to })
                : undefined
            }
          >
            <div className="List__item__text">
              {item.icon}
              <Text text={item.title} tag="p" />
            </div>
            {!item.disablePropagation && (
              <div className="List__item__chevron">
                <IconChevronRight
                  width={14}
                  height={14}
                  strokeWidth={4}
                  color="var(--icon-color)"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
