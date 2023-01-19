import { updateIntervals } from "../utils";

enum ETime {
  Second,
  Minute,
  Hour,
  Day,
  Month,
  Year,
}

const dayOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

export class TimeHelper {
  private hasDayPassed = false;

  constructor(
    private year: number = 2020,
    private month: number = 0,
    private day: number = 0,
    private hour: number = 0,
    private minute: number = 0,
    private second: number = 0,
    private dow: typeof dayOfWeek[number] = "Monday"
  ) {}

  private updateFromIntervals(intervals: ReturnType<typeof updateIntervals>) {
    this.year = intervals[ETime.Year].value || this.year;
    this.month = intervals[ETime.Month].value || this.month;
    this.day = intervals[ETime.Day].value || this.day;
    this.hour = intervals[ETime.Hour].value || this.hour;
    this.minute = intervals[ETime.Minute].value || this.minute;
    this.second = intervals[ETime.Second].value || this.second;
  }

  getDaysInMonth(monthIndex: number) {
    if ((monthIndex + 1) % 2 === 0) return 30;
    if (monthIndex === 1) return 28; // February
    return 31;
  }

  getIsDayPassed(increment: { i: number; value: number }) {
    if (increment.i <= 2) {
      const intervals = [
        {
          value: this.second,
          interval: 60,
        },
        { value: this.minute, interval: 60 },
        { value: this.hour, interval: 24 },
      ];
      const result = updateIntervals(increment, intervals);
      const value = result[3]?.value;
      return value > 0;
    }
    if (increment.value > 0) return true;
    return false;
  }

  calculateDOW(increment: { i: number; value: number }) {
    const currentDow = this.dow;
    if (increment.i < 4) {
      const intervals = [
        {
          value: this.second,
          interval: 60,
        },
        { value: this.minute, interval: 60 },
        { value: this.hour, interval: 24 },
        { value: this.day, interval: 7 },
      ];
      const result = updateIntervals(increment, intervals);
      const i = result.slice(-1)[0].value;
      return dayOfWeek[i];
    }
    return currentDow;
  }

  update(increment: { i: number; value: number }) {
    const intervals = [
      {
        value: this.second,
        interval: 60,
      },
      { value: this.minute, interval: 60 },
      { value: this.hour, interval: 24 },
      { value: this.day, interval: this.getDaysInMonth(this.month) },
      { value: this.month, interval: 12 },
      { value: this.year, interval: 1000 },
    ];
    const result = updateIntervals(increment, intervals);
    this.dow = this.calculateDOW(increment);
    this.updateFromIntervals(result);
  }

  getFullDate() {
    const { year, month, day, hour, minute, second, dow } = this;
    return { year, month, day, hour, minute, second, dow };
  }
}
