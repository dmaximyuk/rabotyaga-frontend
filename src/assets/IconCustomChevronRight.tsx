import type { FC } from "react";

import { IconChevronRight } from "@tabler/icons-react";

export const IconCustomChevronRight: FC<{ className?: string }> = (props) => {
  return (
    <IconChevronRight
      className={props.className}
      width={14}
      height={14}
      strokeWidth={4}
      color="var(--icon-color)"
    />
  );
};
