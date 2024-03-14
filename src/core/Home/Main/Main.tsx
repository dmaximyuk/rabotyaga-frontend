import "./Main.sass";

import { type FC } from "react";

import {
  Card,
  Container,
  Line,
  Panel,
  PanelHeader,
  Text,
  CardDescription,
} from "uikit";
import { UserCard } from "components";

import { Icon2fa } from "@tabler/icons-react";

import { Panels } from "store/models";
import { IconCustomChevronRight } from "assets";
import { secondToTime } from "utils";

const userNavigationCards = [
  { to: Panels.Bank, title: "Баланс", text: "3.1 млн" },
  { to: Panels.PremiumStore, title: "Токены", text: "193" },
  { to: Panels.PremiumStore, title: "Статус", text: "Игрок" },
];

const dataMoreInfo = [
  {
    icon: <Icon2fa />,
    title: "home.main.actions.quests.title",
    text: "home.main.actions.quests.level.1",
  },
  {
    icon: <Icon2fa />,
    title: "home.main.actions.daily.title",
    text: "home.main.actions.title",
  },
  {
    icon: <Icon2fa />,
    title: "home.main.actions.bonus.title",
    text: "home.main.actions.bonus.timer",
    textValues: {
      date: secondToTime(5524),
    },
  },
];

export const Main: FC = () => {
  return (
    <Panel
      panelWrapperClassName="Home__main--remove-padding"
      panelHeader={
        <PanelHeader title="home.main.title" subtitle="home.main.subtitle" />
      }
    >
      <Container isDefault className="Home__main__user-card">
        <Card>
          <UserCard userId={123} />
        </Card>
        <Card>
          {userNavigationCards.map((item) => {
            return (
              <Card className="User__cards" key={`card-${item.title}`}>
                <Line justifyContent="space-between">
                  <Text text={item.text} tag="p" isBold />
                  <IconCustomChevronRight />
                </Line>
                <Text text={item.title} tag="span" isTransparent />
              </Card>
            );
          })}
        </Card>
      </Container>
      <Container isDefault>
        <Text
          style={{ marginLeft: 12, marginBottom: 12, marginTop: 24 }}
          text={"home.main.actions.title"}
          tag={"p"}
        />
        <div style={{ gap: 12, display: "flex", flexDirection: "column" }}>
          {dataMoreInfo.map((item) => (
            <CardDescription {...item} showPropagation />
          ))}
        </div>
      </Container>
      <Container className="User__navigation" isDefault></Container>
    </Panel>
  );
};
