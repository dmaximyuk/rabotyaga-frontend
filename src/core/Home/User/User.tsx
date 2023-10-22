import "./User.sass";

import { type FC } from "react";

import { Panel, PanelHeader } from "uikit";
import { UserCard } from "components";

export const User: FC = () => {
  return (
    <Panel
      pageHeader={<PanelHeader title="home.title" subTitle="home.subtitle" />}
    >
      <UserCard userId={123} />
    </Panel>
  );
};
