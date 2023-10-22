import "./Avatar.sass";

import { FC, useState } from "react";

import type { AvatarProps } from "./Avatar.interface";
import { classNames } from "functions";

export const Avatar: FC<AvatarProps> = ({ src }) => {
  const [loadingStatus, setLoadingStatus] = useState<
    "loading" | "error" | undefined
  >("loading");

  return (
    <div className="Avatar">
      <img
        className={classNames({
          Avatar__image: true,
          "Avatar__image--error": loadingStatus === "error",
          "Avatar__image--loading": loadingStatus === "loading",
        })}
        alt=""
        loading="lazy"
        src={src}
        onError={() => setLoadingStatus("error")}
        onLoad={() => setLoadingStatus(undefined)}
      />
    </div>
  );
};
