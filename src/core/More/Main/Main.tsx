import "./Main.sass";

import { type FC } from "react";

import {
  Container,
  Divider,
  Panel,
  PanelHeader,
  List,
  Text,
  Card,
} from "uikit";

import {
  IconBuildingBank,
  IconSettings,
  IconUsers,
  IconHelpCircle,
  IconShoppingCart,
  IconDice5,
  IconRun,
  IconBriefcase,
  IconStars,
  IconGift,
  IconTicket,
} from "@tabler/icons-react";

import type { MainProps } from "./Main.interface";

import { MenuPanels } from "types/routes";

const itemsTree = [
  [
    { to: MenuPanels.Bank, icon: <IconBuildingBank />, disable: true },
    { to: MenuPanels.Earnings, icon: <IconBriefcase />, disable: true },
  ],
  [
    { to: MenuPanels.Entertainment, icon: <IconDice5 />, disable: true },
    { to: MenuPanels.Quests, icon: <IconRun />, disable: true },
  ],
  [{ to: MenuPanels.Shop, icon: <IconShoppingCart />, disable: true }],
  [
    { to: MenuPanels.Help, icon: <IconHelpCircle />, disable: true },
    { to: MenuPanels.Community, icon: <IconUsers />, disable: true },
  ],
  [{ to: MenuPanels.Settings, icon: <IconSettings /> }],
];

export const Main: FC<MainProps> = () => {
  const bonusTimerEnable = true;

  return (
    <Panel
      pageHeader={
        <PanelHeader title="more.main.title" subtitle="more.main.subtitle" />
      }
    >
      <Container className="Menu__cards_grid" isDefault>
        <Card>
          <IconStars />
          <div>
            <Text
              text="more.main.cards.level"
              tag="p"
              values={{ level: "1" }}
              isBold
            />
            <Text
              text="more.main.cards.level-exp"
              values={{ from: "1", to: "100" }}
              tag="span"
              isTransparent
            />
          </div>
        </Card>
        <Card>
          <IconGift />
          <div>
            <Text text="more.main.cards.bonus" tag="p" isBold />
            <Text
              text={
                bonusTimerEnable
                  ? "more.main.cards.bonus-timer"
                  : "more.main.cards.bonus-available"
              }
              tag="span"
              values={{ h: "00", m: "01", s: "12" }}
              isTransparent
            />
          </div>
        </Card>
        <Card>
          <IconTicket />
          <div>
            <Text text="more.main.cards.promo-code" tag="p" isBold />
            <Text
              text="more.main.cards.promo-code-activation"
              tag="span"
              isTransparent
            />
          </div>
        </Card>
      </Container>
      <Divider />
      {itemsTree.map((items, index, array) => {
        return (
          <div key={`menu-list-item-${index}`}>
            <Container className="Menu__container-list">
              <List
                items={items.map((item) => {
                  return {
                    title: `more.main.items.${item.to}`,
                    to: item.to,
                    icon: item.icon,
                    disablePropagation: (item as any)?.disable || false,
                  };
                })}
              />
            </Container>
            {array.length - 1 !== index && <Divider />}
          </div>
        );
      })}
      <Container className="Menu__footer" isDefault>
        <Text text="Made with <3" tag="span" isTransparent />
      </Container>
    </Panel>
  );
};
