export const templateParser = (str: string, vars: Record<string, unknown>) =>
  str.replaceAll(/{{(\w+)}}/g, (_, match: string) => String(vars[match] || ""));

export const processItem = (strings: string[], fn: (s: string) => string) =>
  strings.reduce((acc, v) => acc + fn(v), "");
export const makePrimaryHeading = (s: string) => `<h2>${s}</h2>`;
export const makeSecondaryHeading = (s: string) => `<h3>${s}</h3>`;
export const makeParagraph = (s: string) => `<p>${s}</p>`;
export const makeDiv = (s: string) => `<div>${s}</div>`;
export const makeBold = (s: string) => `<b>${s}</b>`;
export const makeItalic = (s: string) => `<i>${s}</i>`;
export const makeListItem = (s: string) => `<li>${s}</li>`;
export const makeList = (s: string, options?: string[]) =>
  `<ul>${s}${options?.map((v) => makeListItem(v)).join("") ?? ""}</ul>`;

const getRandomNumbers = (length: number) => {
  const value = Array.from(
    Math.round(Math.random() * Math.pow(10, length)).toString()
  ).reverse();
  return new Array(length)
    .fill("0")
    .map((v, i) => value[i] || v)
    .reverse()
    .join("");
};

export const lowerCaseIncludes = (a: string, b: string) =>
  a.toLowerCase().includes(b.toLowerCase());

export const lowerCaseEquals = (a: string, b: string) =>
  a.toLowerCase() === b.toLowerCase();

export const listOr = <T>(list: T[], or: T[]) =>
  list.length !== 0 ? list : or;

export const filterWithFallback = <T>(
  list: T[],
  predicate: (v: T, i: number) => boolean,
  fallback?: T[]
) => {
  const result = list.filter(predicate);
  const fb = fallback || list;
  return result.length === 0 ? fb : result;
};

export class Utils {
  static generateId = (amount: number = 4, length: number = 4) =>
    new Array(amount)
      .fill(0)
      .map((a, i, b) => `${i && "-"}${getRandomNumbers(length)}`)
      .join("");
}

export const updateIntervals = (
  update: { i: number; value: number },
  nums: { value: number; interval: number }[]
) => {
  const DEFAULT_INTERVAL = 100;
  return nums.reduce((nums, _, i) => {
    const { value, interval = DEFAULT_INTERVAL } = nums[i];
    const sum = value + (i === update.i ? update.value : 0);
    const remainder = sum % interval;

    const whole = Math.floor(sum / interval);

    const hasItem = !!nums[update.i];
    if (!hasItem) return nums;

    const preSlice = nums.slice(0, i);
    const postSlice = nums.slice(i + 2);

    if (whole === 0)
      return [
        ...preSlice,
        {
          value: sum,
          interval,
        },
        ...nums.slice(i + 1),
      ];

    return [
      ...preSlice,
      {
        value: remainder,
        interval,
      },
      {
        value: (nums[i + 1]?.value || 0) + whole,
        interval: nums[i + 1]?.interval || DEFAULT_INTERVAL,
      },
      ...postSlice,
    ].filter((v) => !!v);
  }, nums);
};

export const zip = <T1, T2>(a1: T1[], a2: T2[]) =>
  a1.map((_, i) => [a1[i], a2[i]]);
