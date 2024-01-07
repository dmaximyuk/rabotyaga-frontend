import { useRouter } from "elum-router/react";

import { View } from "uikit";

import { Main } from "./Main/Main";

export const Inventory = () => {
  const activePanel = useRouter("panel");

  return (
    <View activePanel={activePanel}>
      <Main data-panel="default" />
    </View>
  );
};
