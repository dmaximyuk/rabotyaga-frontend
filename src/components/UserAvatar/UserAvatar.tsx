import "./UserAvatar.sass";

import { type FC, useMemo } from "react";
import { useUser } from "hooks";

import { Avatar } from "uikit";

import type { UserAvatarProps } from "./UserAvatar.interface";

export const UserAvatar: FC<UserAvatarProps> = (props) => {
  const user = useUser(props.userId);
  const size = props.size || 52;

  return useMemo(
    () => <Avatar src={user.photo} style={{ width: size, height: size }} />,
    [user.photo],
  );
};
