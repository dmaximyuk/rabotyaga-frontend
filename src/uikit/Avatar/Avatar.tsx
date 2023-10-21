import "./Avatar.sass";

import { FC, useEffect, useState } from "react";

import type { AvatarProps } from "./Avatar.interface";
import { classNames } from "functions";

export const Avatar: FC<AvatarProps> = ({ src }) => {
  const [loadingStatus, setLoadingStatus] = useState<
    "loading" | "error" | undefined
  >("loading");

  useEffect(() => {
    console.log("Avatar loading status:", loadingStatus);
  }, [loadingStatus]);

  return (
    <div className="Avatar">
      <img
        className={classNames({
          Avatar__image: true,
          Avatar__image_error: loadingStatus === "error",
          Avatar__image_loading: loadingStatus === "loading",
        })}
        alt=""
        loading="lazy"
        src={src}
        onError={() => setLoadingStatus("error")}
        onLoad={() => setLoadingStatus(undefined)}
      />
      &#xea54;
    </div>
  );
};
