import styles from "./Text.module.scss";

import { FC, createElement, useMemo } from "react";
import { useTranslation } from "i18nano";

import { classNames } from "functions";

import type { TextProps } from "./Text.interface";

export const Text: FC<TextProps> = ({ path, mode }) => {
  const t = useTranslation();

  const tag = useMemo(() => {
    switch (mode) {
      case "title":
      case "title-bold":
        return "h1";
      case "text":
      case "text-bold":
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
        [styles.Text]: true,
        [styles[`Text_mode-${mode}`]]: true,
      }),
    },
    t(path),
  );
};
