import { type FC } from "react";
import { useUser } from "hooks";

import { Text } from "uikit";

import type { UnitNameProps } from "./UnitName.interface";

export const UnitName: FC<UnitNameProps> = (props) => {
  const user = useUser(props.userId);
  return <Text text={user.fullName} mode="title" />;
};
