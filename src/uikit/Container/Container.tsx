import styles from "./Container.module.scss";

import { FC } from "react";

import { classNames } from "functions";

import { ContainerProps } from "./Container.interface";

export const Container: FC<ContainerProps> = ({ children, className, isDefault }) => {
  return (
    <div
      className={classNames({
        [styles.Container]: true,
        [styles.Container_default]: !!isDefault,
        [`${className}`]: !!className,
      })}
    >
      {children}
    </div>
  );
};
