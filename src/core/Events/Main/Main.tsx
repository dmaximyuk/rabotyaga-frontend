import "./Main.sass";

import { type FC } from "react";
import { formatNumber } from "utils";

import { Grid, Panel, PanelHeader } from "uikit";
import { EventCard } from "components";

import { EventNewsModel, NewsEventsModel } from "store/models";

const newsArray: EventNewsModel[] = [
  {
    type: NewsEventsModel.Update,
    title: `Обновление от 14.02.2024`,
    text: "Важные обновления! Исправление критических моментов в работе пользовательского флоу.",
    createdAt: Date.now(),
  },
  {
    type: NewsEventsModel.PromoCode,
    title: `Промо-код на ${formatNumber(3000, true)}`,
    text: "Активировать промо-код можно в разделе: «Еще» => «Промо-код», и помните, количество активаций ограничено!",
    promoActivatedCount: 351,
    promoActiveCount: 1000,
    promoCode: "JADC21W",
    createdAt: Date.now(),
    expiredAt: Date.now(),
  },
];

export const Main: FC = () => {
  return (
    <Panel
      panelHeader={
        <PanelHeader
          title="events.main.title"
          subtitle="events.main.subtitle"
        />
      }
    >
      <Grid>
        {newsArray.map((item) => {
          return <EventCard event={item} />;
        })}
      </Grid>
    </Panel>
  );
};
