import "./BottomNavbar.sass";

import { type FC, useCallback } from "react";
import { throttle } from "lodash";
import { classNames } from "utils";
import { nextPage } from "elum-router/react";

import { Ripple } from "uikit";

import type { BottomNavbarProps } from "./BottomNavbar.interface";

export const BottomNavbar: FC<BottomNavbarProps> = ({ items, activeTab }) => {
  const throttledSwitch = useCallback(
    throttle((value) => nextPage({ view: value }), 250),
    [],
  );

  return (
    <nav className="BottomNavbar">
      <ul className="BottomNavbar__wrapper">
        {items.map((item) => {
          return (
            <li
              className={classNames({
                BottomNavbar__item: true,
                BottomNavbar__item_active: activeTab === item.key,
              })}
              key={`nav-item-${item.key}`}
              onClick={() => throttledSwitch(item.key)}
            >
              {item.icon}
              <Ripple />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
