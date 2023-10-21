import { useRouter } from "elum-router/react";

import { View } from "uikit";
import { User } from "./User/User";

export const Home = () => {
  const activePanel = useRouter("panel");

  return (
    <View activePanel={activePanel}>
      <User data-panel="default" />
      <User data-panel="test1" />
      <User data-panel="test2" />
    </View>
  );
};
