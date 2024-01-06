import "./Menu.sass";

import { type FC } from "react";

import { Container, Divider, Panel, PanelHeader, List } from "uikit";
import { UserCard } from "components";

import {
  IconBuildingBank,
  IconSettings,
  IconUsers,
  IconHelpCircle,
  IconShoppingCart,
  IconDice5,
  IconRun,
  IconGift,
  IconBriefcase,
  IconTicket,
  IconBellRinging,
} from "@tabler/icons-react";

import type { MenuProps } from "./Menu.interface";
import { MenuPanels } from "types/routes";

const itemsTree = [
  [
    { to: MenuPanels.Present, icon: <IconGift /> },
    { to: MenuPanels.Bonus, icon: <IconTicket /> },
  ],
  [
    { to: MenuPanels.Bank, icon: <IconBuildingBank /> },
    { to: MenuPanels.Earnings, icon: <IconBriefcase /> },
  ],
  // { to: MenuPanels.Job, icon: <IconBriefcase /> },
  // { to: MenuPanels.Business, icon: <IconHomeStats /> },
  // { to: MenuPanels.Mining, icon: <IconCurrencyBitcoin /> },
  // { to: MenuPanels.Investments, icon: <IconChartLine /> },
  [
    { to: MenuPanels.Entertainment, icon: <IconDice5 /> },
    { to: MenuPanels.Quests, icon: <IconRun /> },
  ],
  [
    { to: MenuPanels.Shop, icon: <IconShoppingCart /> },
    // { to: MenuPanels.PremiumStore, icon: <IconDiamond /> },
    // { to: MenuPanels.Market, icon: <IconBuildingStore /> },
    // { to: MenuPanels.Auction, icon: <IconGavel /> },
  ],
  [
    { to: MenuPanels.Help, icon: <IconHelpCircle /> },
    { to: MenuPanels.Community, icon: <IconUsers /> },
  ],
  [{ to: MenuPanels.Settings, icon: <IconSettings /> }],
];

export const Menu: FC<MenuProps> = () => {
  return (
    <Panel
      pageHeader={
        <PanelHeader
          title="menu.title"
          subtitle="menu.subtitle"
          before={<IconBellRinging />}
        />
      }
    >
      <Container className="Menu__container-user">
        <UserCard
          userId={123}
          isShort
          onClick={(userId) => console.log(userId)}
        />
      </Container>
      <Divider />
      {itemsTree.map((items, index, array) => {
        return (
          <div key={`menu-list-item-${index}`}>
            <Container className="Menu__container-list">
              <List
                items={items.map(({ to, icon }) => {
                  return {
                    title: `menu.items.${to}`,
                    to,
                    icon,
                  };
                })}
              />
            </Container>
            {array.length - 1 !== index && <Divider />}
          </div>
        );
      })}
    </Panel>
  );
};
