import { TEvent } from "../interfaces";

export const getChangeAction = (input: string): TEvent => ["change", input];
export const getEnterAction = (): TEvent => ["enter", ""];
export const getSuggestAction = (): TEvent => ["suggest", ""];
