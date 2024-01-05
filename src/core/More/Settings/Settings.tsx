import "./Settings.sass";

import { type FC } from "react";

import { Panel, PanelHeader } from "uikit";

import type { SettingsProps } from "./Settings.interface";

export const Settings: FC<SettingsProps> = () => {
  return (
    <Panel
      pageHeader={
        <PanelHeader
          title="settings.title"
          subtitle="settings.subtitle"
          withBack
        />
      }
    >
      Test
    </Panel>
  );
};
