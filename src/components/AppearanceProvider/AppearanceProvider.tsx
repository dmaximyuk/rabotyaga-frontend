import {
  bridgeExpand,
  bridgeRequestTheme,
  bridgeSetHeaderColor,
  EventThemeChanged,
  EventViewportChanged,
  listener,
} from "@apiteam/twa-bridge/react";
import { Platforms } from "@twa-dev/types";
import { FC, createContext, useEffect, ReactNode } from "react";

import { Platform } from "store/models";
import { hexToRgb } from "utils";

export const AppearanceContext = createContext(undefined);

export const AppearanceProvider: FC<{
  theme?: Platform;
  platform?: Platforms;
  colorScheme?: any;
  children: ReactNode;
}> = ({
  children,
  theme: themeProp,
  platform: platformProp,
  colorScheme: colorSchemeProp,
}) => {
  // useEffect(() => {
  //   bridgeExpand();
  // }, []);

  useEffect(() => {
    const onChange = (data?: { theme_params: Record<string, string> }) => {
      const hash = window.location.hash.slice(1);
      const params = new URLSearchParams(hash);
      const colors = JSON.parse(params.get("tgWebAppThemeParams") ?? "");

      if (!data?.theme_params) {
        data = { theme_params: colors };
      }

      const str = Object.entries(data.theme_params).reduce((acc, curr) => {
        return acc + `--tg-theme-${curr[0].split("_").join("-")}:${curr[1]}; `;
      }, "");

      document.documentElement.setAttribute("style", str);

      bridgeSetHeaderColor({
        color: data.theme_params["header_bg_color"],
      });
    };

    listener.on(EventThemeChanged, onChange);
    bridgeRequestTheme();

    onChange();
    return () => {
      listener.off(EventThemeChanged, onChange);
    };
  }, []);

  useEffect(() => {
    // document.body.style.setProperty("--safe-area-tabbar", `34px`);
    // document.body.style.setProperty(
    //   "--safe_area_inset_bottom",
    //   `calc(100vh - ${window.innerHeight}px)`,
    // );

    const onChange = (data: {
      is_expanded: boolean;
      is_state_stable: boolean;
      height: number;
      width?: number;
    }) => {
      // console.log(window.innerHeight, data.height);
      // if (data.is_expanded && data.is_state_stable) {
      //   document.body.style.setProperty(
      //     "--safe_area_inset_bottom",
      //     `calc(100vh - ${data.height}px)`,
      //   );
      // }
    };

    listener.on(EventViewportChanged, onChange);

    return () => {
      listener.off(EventViewportChanged, onChange);
    };
  }, []);

  return (
    <AppearanceContext.Provider value={undefined}>
      {children}
    </AppearanceContext.Provider>
  );
};
