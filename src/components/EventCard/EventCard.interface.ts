import type { HTMLAttributes } from "react";
import type { EventNewsModel } from "store/models";

export interface EventCardProps extends Omit<HTMLAttributes<HTMLElement>, ""> {
  event: EventNewsModel;
}
