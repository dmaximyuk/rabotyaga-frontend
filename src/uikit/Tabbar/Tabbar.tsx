import styles from "./Tabbar.module.scss";

import { FC } from "react";
import { classNames } from "functions";
import { nextPage } from "@elum/router";

import { Ripple } from "uikit";

import type { TabbarProps } from "./Tabbar.interface";

export const Tabbar: FC<TabbarProps> = ({ items, activeTab }) => {
  return (
    <nav className={styles.Tabbar}>
      <ul className={styles.Tabbar__wrapper}>
        {items.map((item) => {
          return (
            <li
              className={classNames({
                [styles.Tabbar__item]: true,
                [styles.Tabbar__item_active]: activeTab === item.key,
              })}
              key={`nav-item-${item.key}`}
              onClick={() => nextPage({ view: item.key })}
            >
              {item.icon}
              <Ripple onClick={() => nextPage({ view: item.key })} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
