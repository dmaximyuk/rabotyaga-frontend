import { type FC } from "react";

import { Text } from "uikit";

import type { UnitIdentifierProps } from "./UnitIdentifier.interface";

export const UnitIdentifier: FC<UnitIdentifierProps> = () => {
  return <Text text="@id12345678" mode="description" />;
};
