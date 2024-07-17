import {
  addHours,
  addMilliseconds,
  addMinutes,
  addSeconds,
  getHours as getHoursFns,
  getMinutes as getMinutesFns,
  startOfDay,
  startOfWeek,
} from "date-fns";
import {
  format,
  formatInTimeZone,
  getTimezoneOffset,
  utcToZonedTime,
} from "date-fns-tz";

export const getDefaultTimeZoneBrowser = () =>
  Intl.DateTimeFormat().resolvedOptions().timeZone;

// ✅ You can use a Quick one-liner hack
// const ms = 54000000;
// console.log(new Date(ms).toISOString().slice(11, 19)); // 👉️ 15:00:00

// ------------------------------------------------

// ✅ Or create a reusable function
function padTo2Digits(num: any) {
  return num.toString().padStart(2, "0");
}

export function convertMsToTime(milliseconds: any) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;

  // 👇️ If you don't want to roll hours over, e.g. 24 to 00
  // 👇️ comment (or remove) the line below
  // commenting next line gets you `24:00:00` instead of `00:00:00`
  // or `36:15:31` instead of `12:15:31`, etc.
  hours = hours % 24;

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
    seconds,
  )}`;
}

export function convertSecondsToHMS(
  seconds: number,
  // @ts-expect-error
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type?: "short" | "long",
): string {
  const duration = {
    hours: Math.floor(seconds / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
  };

  // Custom format string
  const customFormat = [
    duration.hours > 0 ? `${duration.hours}h` : "",
    duration.minutes > 0 ? `${duration.minutes}m` : "",
    duration.seconds > 0 ? `${duration.seconds}s` : "",
  ]
    .filter(Boolean)
    .join(" : ");

  return customFormat;
}

// ========== DATE FNS ==========

export const isToday = (date: Date, timeZone?: string): boolean => {
  if (timeZone === undefined) {
    return format(date, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd");
  }

  return (
    formatInTimeZone(date, timeZone, "yyyy-MM-dd") ===
    formatInTimeZone(new Date(), timeZone, "yyyy-MM-dd")
  );
};

export const isSameDay = (
  date1: Date,
  date2: Date,
  timeZone?: string,
): boolean => {
  if (timeZone === undefined) {
    return format(date1, "yyyy-MM-dd") === format(date2, "yyyy-MM-dd");
  }

  return (
    formatInTimeZone(date1, timeZone, "yyyy-MM-dd") ===
    formatInTimeZone(date2, timeZone, "yyyy-MM-dd")
  );
};

export const getHours = (date: Date, timezone?: string): number => {
  if (timezone === undefined) {
    return getHoursFns(date);
  }

  return +formatInTimeZone(date, timezone, "H");
};

export const getMinutes = (date: Date, timezone?: string): number => {
  if (timezone === undefined) {
    return getMinutesFns(date);
  }

  return +formatInTimeZone(date, timezone, "m");
};

export const switchDateToTimezone = (date: Date, timezone: string) => {
  const day = startOfDay(utcToZonedTime(date, timezone));
  const browserTimezone = getTimezoneOffset(getDefaultTimeZoneBrowser(), day);
  const dateTimezone = getTimezoneOffset(timezone, day);
  const milliseconds = dateTimezone - browserTimezone;
  return addMilliseconds(day, -milliseconds);
};

export const setHoursMinutes = (
  date: Date,
  options: { hour: number; minutes: number },
  timezone: string,
) => {
  const newDate = switchDateToTimezone(date, timezone);
  return addMinutes(addHours(newDate, options.hour), options.minutes);
};

export const setHoursMinutesSeconds = (
  date: Date,
  options: { hour: number; minutes: number; seconds: number },
  timezone: string,
) => {
  const newDate = switchDateToTimezone(date, timezone);

  return addSeconds(
    addMinutes(addHours(newDate, options.hour), options.minutes),
    options.seconds,
  );
};

export const getMaxHour = (
  _from: Date,
  _to: Date,
  { set }: { set: "FROM" | "TO" },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _timezone: string,
) => {
  const max = 23;
  if (set === "TO") {
    return max;
  }
  return max;
};

export const transformHour = (hour?: string | number) => {
  if (hour == null) {
    return 0;
  }

  const h = +hour;
  if (h < 0) {
    return 0;
  } else if (h > 23) {
    return 23;
  }

  return h;
};

export const transformMinutes = (minutes?: string | number) => {
  if (minutes == null) {
    return 0;
  }

  const m = +minutes;
  if (m < 0) {
    return 0;
  } else if (m > 59) {
    return 59;
  }
  return m;
};

export const date = (
  date: string | number,
  timezone: string,
  dateFormat?: string,
) => {
  try {
    return format(
      utcToZonedTime(date, timezone),
      !dateFormat ? "dd-MM-yyyy à HH:mm:ss" : dateFormat,
    );
  } catch (err) {
    return "-";
  }
};

const units: any = {
  fr: {
    second: { s: "Seconde", p: "Secondes" },
    minute: { s: "Minute", p: "Minutes" },
    hour: { s: "Heure", p: "Heures" },
    day: { s: "Jour", p: "Jours" },
    month: { s: "Mois", p: "Mois" },
    year: { s: "Année", p: "Années" },
    prefix: "",
    suffix: "Il y'a",
  },
  en: {
    second: { s: "Second", p: "Seconds" },
    minute: { s: "Minute", p: "Minutes" },
    hour: { s: "Hour", p: "Hours" },
    day: { s: "Day", p: "Days" },
    month: { s: "Month", p: "Months" },
    year: { s: "Year", p: "Years" },
    prefix: "ago",
    suffix: "",
  },
  ar: {
    second: { s: "ثانية", p: "ثانية" },
    minute: { s: "دقيقة", p: "دقائق" },
    hour: { s: "ساعة", p: "ساعات" },
    day: { s: "يوم", p: "يوم" },
    month: { s: "شهر", p: "أشهر" },
    year: { s: "سنة", p: "سنوات" },
    prefix: "",
    suffix: "",
  },
};

export function diffDate(
  previous: Date,
  lang: string,
): { time: number; unit: string; text: string } {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const { second, minute, hour, day, month, year, suffix, prefix } =
    units[lang];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const elapsed = new Date() - previous;

  if (elapsed < msPerMinute) {
    const time = Math.round(elapsed / 1000);
    const unit = time > 1 ? second.p : second.s;
    return { time, unit, text: `${suffix} ${time} ${unit} ${prefix} ` };
  }
  if (elapsed < msPerHour) {
    const time = Math.round(elapsed / msPerMinute);
    const unit = time > 1 ? minute.p : minute.s;
    return { time, unit, text: `${suffix} ${time} ${unit} ${prefix} ` };
  }
  if (elapsed < msPerDay) {
    const time = Math.round(elapsed / msPerHour);
    const unit = time > 1 ? hour.p : hour.s;
    return { time, unit, text: `${suffix} ${time} ${unit} ${prefix} ` };
  }
  if (elapsed < msPerMonth) {
    const time = Math.round(elapsed / msPerDay);
    const unit = time > 1 ? day.p : day.s;
    return { time, unit, text: `${suffix} ${time} ${unit} ${prefix} ` };
  }
  if (elapsed < msPerYear) {
    const time = Math.round(elapsed / msPerMonth);
    const unit = time > 1 ? month.p : month.s;
    return { time, unit, text: `${suffix} ${time} ${unit} ${prefix} ` };
  }
  const time = Math.round(elapsed / msPerYear);
  const unit = time > 1 ? year.p : year.s;
  return { time, unit, text: `${suffix} ${time} ${unit}${prefix} ` };
}

export function getSaturdayDateWithTimezone(timezone: string): Date {
  // Get the current date in UTC
  const today: Date = new Date();

  // Convert current UTC date to the desired timezone
  const todayInTimezone: Date = utcToZonedTime(today, timezone);

  // Get the date of the current week's Saturday
  const saturdayDate: Date = startOfWeek(todayInTimezone);

  // Set the time to 00:00
  saturdayDate.setHours(0, 0, 0, 0);

  // Return the date of Saturday with time set to 00:00 in the specified timezone
  return saturdayDate;
}
