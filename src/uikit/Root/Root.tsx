import "./Root.sass";

import { type FC, type ReactElement, Children, useMemo } from "react";

import { RootProps } from "./Root.interface";

export const Root: FC<RootProps> = (props) => {
  const views = useMemo(
    () => Children.toArray(props.children) as ReactElement[],
    [props.children],
  );

  const view = useMemo(
    () => views.filter((item) => item.props["data-view"] === props.activeView),
    [props.activeView, views],
  );

  return (
    <div className="Root">
      <div className="Root__container">{view}</div>
      <div className="Root__navigation">{props.bottomNavbar}</div>
    </div>
  );
};
