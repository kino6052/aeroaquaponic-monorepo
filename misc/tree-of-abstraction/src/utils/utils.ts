import { uniqueId } from "lodash";
import { useEffect, useState } from "react";
import { BehaviorSubject, Subject } from "rxjs";

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
  const value = Array.from(Math.round(Math.random()*(Math.pow(10, length))).toString()).reverse();
  return new Array(length).fill('0').map((v, i) => value[i] || v).reverse().join('');
}  

const generateId = (amount: number = 4, length: number = 4) => new Array(amount).fill(0).map((a, i, b) => `${i && '-'}${getRandomNumbers(length)}`).join('')

export const Utils = {
  generateId
}
