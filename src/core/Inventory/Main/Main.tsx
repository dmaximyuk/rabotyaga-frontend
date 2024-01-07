import "./Main.sass";

import { type FC } from "react";

import { Panel, PanelHeader, Text } from "uikit";

export const Main: FC = () => {
  return (
    <Panel
      pageHeader={
        <PanelHeader
          title="inventory.main.title"
          subtitle="inventory.main.subtitle"
        />
      }
    >
      <Text text="Main" tag={"p"} isBold />
    </Panel>
  );
};
