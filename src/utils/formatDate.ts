import { format } from "date-fns";
import { intervalToDuration } from "date-fns";

interface FormatDateParams {
  dateFormat?: string;
  fallbackString?: string;
}

export const formatDate = (
  date: number | undefined,
  params?: FormatDateParams,
) => {
  if (date === 0 || !date || date.toString()?.length <= 1) {
    if (params?.fallbackString) {
      return params.fallbackString;
    }

    return "";
  }

  return format(
    new Date(date * 1000),
    params?.dateFormat || "HH:mm, dd.MM.yyyy",
  );
};

export const secondToTime = (sec: number): string => {
  const duration = intervalToDuration({ start: 0, end: sec * 1000 });

  return [duration.hours, duration.minutes, duration.seconds]
    .filter(Boolean)
    .map((num) => (num ? String(num).padStart(2, "0") : "00"))
    .join(":");
};
