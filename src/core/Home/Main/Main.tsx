import "./Main.sass";

import { type FC } from "react";

import { Card, Container, Line, Panel, PanelHeader, Text } from "uikit";
import { UserCard } from "components";

import { IconChevronRight } from "@tabler/icons-react";

import { Panels } from "store/models";

const userNavigationCards = [
  { to: Panels.Bank, title: "Баланс", text: "3.1 млн" },
  { to: Panels.PremiumStore, title: "Токены", text: "193" },
  { to: Panels.PremiumStore, title: "Статус", text: "Игрок" },
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
                  <IconChevronRight
                    width={14}
                    height={14}
                    strokeWidth={4}
                    color="var(--icon-color)"
                  />
                </Line>
                <Text text={item.title} tag="span" isTransparent />
              </Card>
            );
          })}
        </Card>
      </Container>
      {/*<Divider />*/}
      <Container className="User__navigation" isDefault></Container>
    </Panel>
  );
};
