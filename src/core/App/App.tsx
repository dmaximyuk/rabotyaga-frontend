import { type FC, useEffect } from "react";
import { useRouter } from "elum-router/react";

import { BottomNavbar, Root } from "uikit";
import { Events, Home, More } from "core";

import { IconDots, IconHome, IconSpeakerphone } from "@tabler/icons-react";

import { Views } from "store/models";

export const App: FC = () => {
  const view = useRouter("view");

  const views = [
    {
      icon: <IconHome />,
      key: Views.Home,
      child() {
        return <Home key={`app-view-${this.key}`} data-view={this.key} />;
      },
    },
    {
      icon: <IconSpeakerphone />,
      key: Views.Events,
      child() {
        return <Events key={`app-view-${this.key}`} data-view={this.key} />;
      },
    },
    {
      icon: <IconDots />,
      key: Views.More,
      child() {
        return <More key={`app-view-${this.key}`} data-view={this.key} />;
      },
    },
  ];

  useEffect(() => {
    console.log(view);
  }, [view]);

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
