import { useEffect, useState } from "react";
import { BehaviorSubject, Observable } from "rxjs";
import { skip } from "rxjs/operators";

export const useSharedState = <T>(
  subject: BehaviorSubject<T>
): [T, typeof useState] => {
  const [value, setState] = useState<T>(subject.getValue());
  useEffect(() => {
    const sub = subject.subscribe((s) => setState(s));
    return () => sub.unsubscribe();
  }, [subject]);
  const newSetState = (state: T) => subject.next(state);
  // @ts-ignore
  return [value, newSetState];
};

export const setPartial = <T>(
  subject: BehaviorSubject<T>,
  partial: Partial<T>
) => {
  const prev = subject.getValue();
  subject.next({ ...prev, ...partial });
};
