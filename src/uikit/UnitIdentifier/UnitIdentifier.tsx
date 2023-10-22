import { type FC } from "react";
import { useUser } from "hooks";

import { Text } from "uikit";

import type { UnitIdentifierProps } from "./UnitIdentifier.interface";

export const UnitIdentifier: FC<UnitIdentifierProps> = (props) => {
  const user = useUser(props.userId);
  return <Text text={`@${user.id}`} mode="description" />;
};
