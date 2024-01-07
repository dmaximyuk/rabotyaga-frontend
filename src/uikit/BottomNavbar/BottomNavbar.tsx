import "./BottomNavbar.sass";

import { type FC } from "react";
import { classNames } from "utils";
import { nextPage } from "elum-router/react";

import { Ripple } from "uikit";

import type { BottomNavbarProps } from "./BottomNavbar.interface";

export const BottomNavbar: FC<BottomNavbarProps> = ({ items, activeTab }) => {
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
