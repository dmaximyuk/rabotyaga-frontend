import "./UnitName.sass";

import { type FC } from "react";
import { useUser } from "hooks";

import { Text } from "uikit";

import type { UnitNameProps } from "./UnitName.interface";

export const UnitName: FC<UnitNameProps> = (props) => {
  const user = useUser(props.userId);
  return (
    <span className="UnitName">
      <Text
        text={user.fullName}
        tag={props.tagName || "h2"}
        isBold={props.isBold}
      />
      {props.visibleUserId && (
        <Text
          className="UnitName__uid"
          text={"@" + user.id.toString()}
          tag={props.tagName || "h2"}
          isBold={props.isBold}
          isTransparent
        />
      )}
      {props.after}
    </span>
  );
};
