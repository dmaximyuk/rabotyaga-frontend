import styles from "./User.module.scss";

import { FC } from "react";

import {
  Container,
  Page,
  PageHeader,
  UnitIdentifier,
  UnitName,
  Avatar,
} from "uikit";

export const User: FC = () => {
  return (
    <Page
      pageHeader={<PageHeader title="home.title" subTitle="home.subtitle" />}
    >
      <Container className={styles.User__information} isDefault>
        <Avatar src="https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863" />
        <div>
          <UnitName id={123456} />
          <UnitIdentifier id={123456} />
        </div>
      </Container>
    </Page>
  );
};
