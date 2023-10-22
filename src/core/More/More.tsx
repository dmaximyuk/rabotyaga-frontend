import { useRouter } from "elum-router/react";

import { View } from "uikit";
import { Menu } from "./Menu/Menu";
import { Settings } from "./Settings/Settings";
import { MenuPanels } from "../../types/routes";

export const More = () => {
  const activePanel = useRouter("panel");

  return (
    <View activePanel={activePanel}>
      <Menu data-panel={MenuPanels.Menu} />
      <Settings data-panel={MenuPanels.Settings} />
    </View>
  );
};
