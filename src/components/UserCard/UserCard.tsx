import "./UserCard.sass";

import { type FC } from "react";
import { classNames } from "utils";

import { Text, UnitName } from "uikit";

import type { UserCardProps } from "./UserCard.interface";
import { UserAvatar } from "../UserAvatar/UserAvatar";

export const UserCard: FC<UserCardProps> = (props) => {
  return (
    <div
      className="UserCard"
      onClick={() => props.onClick && props.onClick(props.userId)}
    >
      <UserAvatar userId={props.userId} />
      <div
        className={classNames({
          UserCard__info: true,
          ["UserCard__info--default"]: true,
        })}
      >
        <UnitName userId={props.userId} isBold />
        <Text
          text="user.card.subtitle"
          values={{ level: "1", balance: "12 000.00 ₽" }}
          tag="span"
          isTransparent
        />
      </div>
    </div>
  );
};
