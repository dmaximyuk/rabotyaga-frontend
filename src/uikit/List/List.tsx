import "./List.sass";

import { type FC, useCallback } from "react";
import { nextPage } from "elum-router/react";
import { throttle } from "lodash";

import { ListItem } from "uikit";

import type { ListProps, ListItemModel } from "./List.interface";

const List: FC<ListProps> = (props) => {
  const throttledNextPage = useCallback(
    throttle(
      (value: string | undefined | false) =>
        value && nextPage({ panel: value.toString() }),
      250,
    ),
    [],
  );

  return (
    <div className="List">
      {props.items.map((item) => {
        return (
          <ListItem
            key={`list-item-${item.to}`}
            icon={item.icon}
            title={item.title}
            disablePropagation={item.disablePropagation}
            onClick={() =>
              throttledNextPage(!item.disablePropagation && item.to)
            }
          />
        );
      })}
    </div>
  );
};

export { List, ListItemModel };
