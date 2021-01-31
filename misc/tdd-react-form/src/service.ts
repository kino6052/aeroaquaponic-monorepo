import React from "react";
import { Subject } from "rxjs";
import { filter } from "rxjs/operators";
import { EventSubject, IEvent } from "./EventWrapper";

export interface IInput {
  value: string;
  error?: string;
  isTouched: boolean;
  id: string;
  isDisabled?: boolean;
}

export const SubmitId = "submit";

export const generateSingleton = <R extends new (...args: any) => any>(
  clazz: R,
  deps: ConstructorParameters<R>
) => {
  const singleton = class {
    private static instance: InstanceType<R> | undefined = undefined;

    static resetInstance = () => {
      singleton.instance = undefined;
    };

    static getInstance = (): InstanceType<R> => {
      if (!singleton.instance) {
        const instance = new clazz(...deps);
        singleton.instance = instance;
        return instance;
      } else {
        return singleton.instance;
      }
    };
  };
  return singleton;
};

export class Service {
  static EventSubject = new Subject<IEvent>();

  static InitSubject = new Subject();

  static unboxInputEvent = (
    e: React.ChangeEvent<HTMLInputElement>
  ): string | undefined => e?.target?.value;

  static OnChangeSubject = () =>
    EventSubject.pipe(filter(([type]) => type === "change")) as Subject<IEvent>;

  static OnClickSubject = () =>
    EventSubject.pipe(filter(([type]) => type === "click")) as Subject<IEvent>;

  static OnFocusSubject = () =>
    EventSubject.pipe(filter(([type]) => type === "focus")) as Subject<IEvent>;
}
