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
      <UserAvatar size={60} userId={props.userId} />
      <div
        className={classNames({
          UserCard__info: true,
          ["UserCard__info--default"]: true,
        })}
      >
        <UnitName userId={props.userId} isBold visibleUserId />
        <Text
          text="user.card.subtitle"
          values={{ level: "1", exp: "0 / 100 exp" }}
          tag="p"
          isTransparent
        />
      </div>
    </div>
  );
};
