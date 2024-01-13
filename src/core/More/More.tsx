import { type FC } from "react";
import { useRouter } from "elum-router/react";

import { View } from "uikit";

import { Main } from "./Main/Main";
import { Settings } from "./Settings/Settings";

import { Panels } from "store/models";

export const More: FC = () => {
  const activePanel = useRouter("panel");

  return (
    <View activePanel={activePanel}>
      <Main data-panel={Panels.Default} />
      <Settings data-panel={Panels.Settings} />
    </View>
  );
};
