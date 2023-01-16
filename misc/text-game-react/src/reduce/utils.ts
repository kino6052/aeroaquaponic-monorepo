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
