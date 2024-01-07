import "./Container.sass";

import { type FC } from "react";

import { classNames } from "utils";

import { ContainerProps } from "./Container.interface";

export const Container: FC<ContainerProps> = ({
  children,
  className,
  isDefault,
}) => {
  return (
    <div
      className={classNames({
        Container: true,
        "Container--default": !!isDefault,
        [`${className}`]: !!className,
      })}
    >
      {children}
    </div>
  );
};
