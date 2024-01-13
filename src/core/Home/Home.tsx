import { type FC } from "react";
import { useRouter } from "elum-router/react";

import { View } from "uikit";

import { Main } from "./Main/Main";

import { Panels } from "store/models";

export const Home: FC = () => {
  const activePanel = useRouter("panel");

  return (
    <View activePanel={activePanel}>
      <Main data-panel={Panels.Default} />
    </View>
  );
};
