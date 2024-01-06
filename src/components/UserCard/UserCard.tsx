import "./UserCard.sass";

import { type FC } from "react";
import { classNames } from "functions";
import { useUserLevel } from "hooks";

import { Text, UnitIdentifier, UnitName } from "uikit";

import type { UserCardProps } from "./UserCard.interface";
import { UserAvatar } from "../UserAvatar/UserAvatar";

export const UserCard: FC<UserCardProps> = (props) => {
  const level = useUserLevel(props.userId);

  function renderUserId() {
    return <UnitIdentifier userId={props.userId} />;
  }

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
        <div className="UserCard__info__name">
          <UnitName isBold userId={props.userId} />
          {props.isShort && renderUserId()}
        </div>

        {props.isShort ? (
          <Text
            text="users.card.level.short"
            tag="p"
            values={{
              level: level.level.toString(),
              percentage: level.percentage,
            }}
            isTransparent
          />
        ) : (
          renderUserId()
        )}
      </div>
    </div>
  );
};
