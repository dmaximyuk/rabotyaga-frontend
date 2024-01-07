import "./Menu.sass";

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

import type { MenuProps } from "./Menu.interface";

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

export const Menu: FC<MenuProps> = () => {
  return (
    <Panel
      pageHeader={<PanelHeader title="menu.title" subtitle="menu.subtitle" />}
    >
      <Container className="Menu__cards_grid" isDefault>
        <Card>
          <IconStars />
          <div>
            <Text text="1 Уровень" tag="p" isBold />
            <Text text="300 / 1000" tag="span" isTransparent />
          </div>
        </Card>
        <Card>
          <IconGift />
          <div>
            <Text text="Бонус" tag="p" isBold />
            <Text text="00:12:01" tag="span" isTransparent />
          </div>
        </Card>
        <Card>
          <IconTicket />
          <div>
            <Text text="Промо-код" tag="p" isBold />
            <Text text="Активация" tag="span" isTransparent />
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
                    title: `menu.items.${item.to}`,
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
