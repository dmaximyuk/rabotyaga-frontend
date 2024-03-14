import { type FC, useEffect } from "react";
import { useRouter } from "elum-router/react";

import { BottomNavbar, Root } from "uikit";
import { Events, Home, More } from "core";

import { IconDots, IconHome, IconBriefcase } from "@tabler/icons-react";

import { Views } from "store/models";
import { AppearanceProvider } from "components";

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
      icon: <IconBriefcase />,
      key: Views.Earnings,
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
    let initData: any = {} as any;
    const params = new URLSearchParams(window.location.hash.slice(1));

    for (const key of params.keys()) {
      const dataFields = decodeURIComponent(params.get("tgWebAppData")!);

      if (dataFields) {
        new URLSearchParams(dataFields).forEach((key, value) => {
          try {
            initData[key] = JSON.parse(value);
          } catch {
            initData[key] = value;
          }
        });
      }
    }
  }, []);

  return (
    <AppearanceProvider>
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
    </AppearanceProvider>
  );
};
