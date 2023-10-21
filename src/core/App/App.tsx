import { type FC } from "react";
import { useRouter } from "elum-router/react";

import { Home } from "core";
import { Root, BottomNavbar } from "uikit";

import { IconHome, IconArchive, IconDots } from "@tabler/icons-react";

export const App: FC = () => {
  const view = useRouter("view");

  const views = [
    {
      icon: <IconHome />,
      key: "user",
      child() {
        return <Home data-view={this.key} />;
      },
    },
    {
      icon: <IconArchive />,
      key: "inventory",
      child() {
        return <Home data-view={this.key} />;
      },
    },
    {
      icon: <IconDots />,
      key: "more",
      child() {
        return <Home data-view={this.key} />;
      },
    },
  ];

  return (
    <Root
      activeView={view}
      bottomNavbar={
        <BottomNavbar
          activeTab={view}
          items={views.map((item) => {
            return {
              key: item.key,
              icon: item.icon,
            };
          })}
        />
      }
    >
      {views.map((item) => item.child())}
    </Root>
  );
};
