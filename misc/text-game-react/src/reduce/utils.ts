export const templateParser = (str: string, vars: Record<string, string>) =>
  str.replaceAll(/{{(\w+)}}/g, (_, match: string) => vars[match]);
