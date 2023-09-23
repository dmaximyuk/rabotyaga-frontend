import { FC, useEffect } from "react";

import { useTranslation } from "i18nano";

import { Page, PageHeader } from "uikit";

export const Home: FC = () => {
  const t = useTranslation();

  return (
    <Page
      pageHeader={<PageHeader title="home.title" subTitle="home.subtitle" />}
    >
      {t("app.name")}
    </Page>
  );
};
