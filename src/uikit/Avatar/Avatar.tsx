import styles from "./Avatar.module.scss";

import { FC } from "react";

import type { AvatarProps } from "./Avatar.interface";

export const Avatar: FC<AvatarProps> = ({ src }) => {
  return <div className={styles.Avatar} style={{ backgroundImage: `url(${src})` }} />;
};
