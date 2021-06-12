import { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";
import { IAct, Id, initialState, IState as IState } from "../bridge";
import { act } from "../services/main.service";
import { Shortcut } from "../services/shortcuts.service";
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

export const compose = <T>(
  arr: Array<[Shortcut, (state: T, event: IEvent) => T | false]>
) => (state: T, event: IEvent): T | false =>
  arr.reduce((acc, [shortcut, cb]) => {
    const result =
      event[0] === "keydown" &&
      event[1] === Id.Keyboard &&
      event[2] === shortcut &&
      cb(state, event);
    return acc || result;
  }, false as T | false);

export const genericSequence = <T>(act: IAct<T>, initialState: T) => (
  inputs: IEvent[]
): T => {
  return inputs.reduce((acc, input) => act(acc)(input), initialState);
};
