import "./UserCard.sass";

import { type FC } from "react";
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
      <div className="UserCard__info">
        <div className="UserCard__info__name">
          <UnitName userId={props.userId} />
          {props.isShort && renderUserId()}
        </div>

        {props.isShort ? (
          <Text
            text="users.card.short.level"
            tag="span"
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
