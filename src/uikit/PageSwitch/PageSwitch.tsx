import { Children, FC, useMemo } from "react";

import type { PageSwitchProps } from "./PageSwitch.interface";

export const PageSwitch: FC<PageSwitchProps> = ({
  children,
  activePage,
  tabbar,
}) => {
  const page = useMemo(() => {
    return Children.toArray(children).filter((item) => {
      return (item as any).props["data-page"] === activePage;
    });
  }, [activePage]);

  return (
    <>
      {page}
      {tabbar}
    </>
  );
};
