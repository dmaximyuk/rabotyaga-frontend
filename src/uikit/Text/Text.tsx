import "./Text.sass";

import { type FC, createElement } from "react";
import { useTranslation } from "i18nano";

import { classNames } from "utils";

import type { TextProps } from "./Text.interface";

export const Text: FC<TextProps> = ({
  className,
  text,
  tag,
  values,

  isBold = false,
  isTransparent = false,
}) => {
  const t = useTranslation();

  return createElement(
    tag,
    {
      className: classNames({
        Text: true,
        [`Text_mode--${tag}`]: true,
        [`Text--bold`]: isBold,
        [`Text--transparent`]: isTransparent,
        [`${className}`]: !!className,
      }),
    },
    t(text, values) || text,
  );
};
