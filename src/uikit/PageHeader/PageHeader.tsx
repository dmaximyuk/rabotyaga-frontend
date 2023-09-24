import styles from "./PageHeader.module.scss";

import { FC } from "react";

import { Text } from "uikit";

import type { PageHeaderProps } from "./PageHeader.interface";

export const PageHeader: FC<PageHeaderProps> = ({ title, subTitle }) => {
  return (
    <header className={styles.PageHeader}>
      <Text mode="text" text={title} />
      <Text mode="description" text={subTitle} />
    </header>
  );
};
