import "./Placeholder.sass";

import { type FC } from "react";

import type { PlaceholderProps } from "./Placeholder.interface";
import { Text } from "../Text/Text";

export const Placeholder: FC<PlaceholderProps> = () => {
  return (
    <div className="Placeholder">
      <Text text={"test"} tag="h2" isBold />
      <Text text={"test"} tag="span" isBold />
    </div>
  );
};
