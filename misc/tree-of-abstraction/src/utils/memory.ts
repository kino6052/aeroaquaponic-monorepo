export const scoreFunction = (score: number) => 1 / ((score || 1) ** 0.9 + 1);

export let randomNumber = { value: Math.random() };
