import { FC } from "react";

import { Text } from "uikit";

import type { UnitNameProps } from "./UnitName.interface";

export const UnitName: FC<UnitNameProps> = () => {
  return <Text text="Dmitry Maximyuk" mode="text" />;
};
