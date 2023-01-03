export const templateParser = (str: string, vars: Record<string, string>) =>
  str.replaceAll(/{{(\w+)}}/g, (_, match: string) => vars[match]);

export const processItem = (strings: string[], fn: (s: string) => string) =>
  strings.reduce((acc, v) => acc + fn(v), "");
export const makeHeader = (s: string) => `<h2>${s}</h2>`;
export const makeParagraph = (s: string) => `<p>${s}</p>`;
export const makeListItem = (s: string) => `<li>${s}</li>`;
export const makeList = (s: string, options?: string[]) =>
  `<ul>${s}${options?.map((v) => makeListItem(v)).join("") ?? ""}</ul>`;
