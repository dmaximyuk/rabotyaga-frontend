import type { HTMLAttributes } from "react";
import type { EventNewsModel } from "types/models";

export interface EventCardProps extends Omit<HTMLAttributes<HTMLElement>, ""> {
  event: EventNewsModel;
}
