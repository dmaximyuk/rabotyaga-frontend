import "./ListItem.sass";

import { type FC } from "react";

import type { ListItemProps } from "./ListItem.interface";
import { Text } from "../Text/Text";
import { IconChevronRight } from "@tabler/icons-react";

export const ListItem: FC<ListItemProps> = (props) => {
  return (
    <div className="List__item" onClick={props.onClick}>
      <div className="List__item__text">
        {props.icon}
        <Text text={props.title} tag="p" />
      </div>
      {!props.disablePropagation && (
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
};
