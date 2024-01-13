import "./Text.sass";

import { type FC, createElement, useMemo } from "react";
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

  const formattedText = useMemo(() => {
    let txt = t(text, values) || text;

    // symbol change
    txt = txt.replaceAll("=>", "→");
    txt = txt.replaceAll("$interpunct", "·");

    return txt;
  }, [text, values]);

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
    formattedText,
  );
};
