import "./Text.sass";

import { type FC, createElement, useMemo } from "react";
import { useTranslation } from "i18nano";

import { classNames } from "functions";

import type { TextProps } from "./Text.interface";

export const Text: FC<TextProps> = ({
  className,
  text,
  mode,
  isDescription = false,
  values,
}) => {
  const t = useTranslation();

  const tag = useMemo(() => {
    switch (mode) {
      case "title":
      case "title-bold":
        return "h1";
      case "text":
      case "text-bold":
      case "text-bold-transparent":
        return "p";
      case "description":
      case "description-bold":
        return "span";
    }
  }, [mode]);

  return createElement(
    tag,
    {
      className: classNames({
        Text: true,
        [`Text_mode--${mode}`]: true,
        [`Text--description`]: isDescription,
        [`${className}`]: !!className,
      }),
    },
    t(text, values) || text,
  );
};
