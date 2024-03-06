import "./Settings.sass";

import { type FC } from "react";

import { Panel, PanelHeader, Placeholder } from "uikit";

import type { SettingsProps } from "./Settings.interface";

export const Settings: FC<SettingsProps> = () => {
  return (
    <Panel
      panelHeader={
        <PanelHeader
          title="settings.title"
          subtitle="settings.subtitle"
          withBack
        />
      }
    >
      <Placeholder />
    </Panel>
  );
};
