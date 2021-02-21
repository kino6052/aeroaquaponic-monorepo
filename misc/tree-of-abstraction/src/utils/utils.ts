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
