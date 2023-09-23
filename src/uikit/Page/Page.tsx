import styles from "./Page.module.scss";

import { FC } from "react";
import { classNames } from "functions";

import { PageProps } from "./Page.interface";

export const Page: FC<PageProps> = ({
  className = "",
  children,
  pageHeader,
}) => {
  return (
    <>
      {pageHeader}
      <section
        className={classNames({
          [styles.Page]: true,
          [className]: !!className,
        })}
      >
        <div>123</div>
        {children}
      </section>
    </>
  );
};
