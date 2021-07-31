export const scoreFunction = (score: number) => 1 / ((score || 1) ** 0.9 + 1);

export const randomNumber: { [key: string]: number } = {};
