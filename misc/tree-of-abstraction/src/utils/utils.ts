import { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";
import { Id, initialTreeState, ITreeState } from "../bridge";
import { treeAct } from "../services/main.service";
import { IEvent } from "./EventWrapper";

export const useSharedState = <T>(
  subject: BehaviorSubject<T>
): [T, (state: T) => void] => {
  const [value, setState] = useState<T>(subject.getValue());
  useEffect(() => {
    const sub = subject.subscribe((s) => setState(s));
    return () => sub.unsubscribe();
  }, [subject]);
  const newSetState = (state: T) => subject.next(state);
  return [value, newSetState];
};

export const setPartial = <T>(
  subject: BehaviorSubject<T>,
  partial: Partial<T>
) => {
  const prev = subject.getValue();
  subject.next({ ...prev, ...partial });
};

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

const generateId = (amount: number = 4, length: number = 4) =>
  new Array(amount)
    .fill(0)
    .map((a, i, b) => `${i && "-"}${getRandomNumbers(length)}`)
    .join("");

export const Utils = {
  generateId,
};

export const compose = (arr: Array<any>) => (
  state: ITreeState,
  event: IEvent
): ITreeState | false =>
  arr.reduce((acc, [shortcut, cb]) => {
    const result =
      event[0] === "keydown" &&
      event[1] === Id.Keyboard &&
      event[2] === shortcut &&
      cb(state, event);
    return result || acc;
  }, false as ITreeState | false);

export const sequence = (inputs: IEvent[]): ITreeState =>
  inputs.reduce((acc, input) => treeAct(acc)(input), initialTreeState);

export const getSequence = (initialState: ITreeState) => (
  inputs: IEvent[]
): ITreeState =>
  inputs.reduce((acc, input) => treeAct(acc)(input), initialState);
