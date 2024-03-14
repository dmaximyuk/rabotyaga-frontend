import type { Platforms } from "@twa-dev/types";
import { Platform } from "store/models";

export function getPlatform(platform: Platforms): Platform {
  if (platform) {
    return platform === "macos" || platform === "ios"
      ? Platform.Apple
      : Platform.Android;
  } else if (
    navigator.userAgent.match(/iOS|iPhone OS|iPhone|iPod|iPad|Mac OS/i)
  ) {
    return Platform.Apple;
  }
  return Platform.Android;
}
