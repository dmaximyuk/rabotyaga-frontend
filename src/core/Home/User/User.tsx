import "./User.sass";

import { type FC } from "react";

import { Card, Container, Line, Panel, PanelHeader, Text } from "uikit";
import { UserCard } from "components";

import { IconChevronRight } from "@tabler/icons-react";

import { MenuPanels } from "types/routes";

const userNavigationCards = [
  { to: MenuPanels.Bank, title: "Баланс", text: "3.1 млн" },
  { to: MenuPanels.PremiumStore, title: "Токены", text: "193" },
  { to: MenuPanels.PremiumStore, title: "Статус", text: "Игрок" },
];

export const User: FC = () => {
  return (
    <Panel
      pageHeader={<PanelHeader title="home.title" subTitle="home.subtitle" />}
    >
      <UserCard userId={123} />
      <Container className="User__navigation" isDefault>
        {userNavigationCards.map((item) => {
          return (
            <Card className="User__cards" key={`card-${item.title}`}>
              <Line>
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
      </Container>
    </Panel>
  );
};
