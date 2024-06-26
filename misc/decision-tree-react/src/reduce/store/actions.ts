import { Id, TEvent } from "../../bridge";

export const getSelectAction = (id: Id): TEvent => ["select", id];
export const getRestoreAction = (query: string): TEvent => ["restore", query];
