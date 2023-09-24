import { FC } from "react";
import { useRouter } from "@elum/router";

import { User } from "core";
import { PageSwitch, Tabbar } from "uikit";

import { IconHome, IconArchive, IconDots } from "@tabler/icons-react";

export const App: FC = () => {
  const view = useRouter("view");

  const pages = [
    {
      icon: <IconHome />,
      key: "user",
      child: <User data-page="user" />,
    },
    {
      icon: <IconArchive />,
      key: "inventory",
      child: <User data-page="inventory" />,
    },
    {
      icon: <IconDots />,
      key: "more",
      child: <User data-page="more" />,
    },
  ];

  return (
    <PageSwitch
      activePage={view}
      tabbar={
        <Tabbar
          activeTab={view}
          items={pages.map((tab) => {
            return {
              key: tab.key,
              icon: tab.icon,
            };
          })}
        />
      }
    >
      {pages.map((page) => page.child)}
    </PageSwitch>
  );
};
