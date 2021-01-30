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

type Constructor<T> = new (...args: any[]) => T;

export const generateSingleton = <I>(clazz: Constructor<I>) => {
  const singleton = class {
    private static instance: I | undefined = undefined;

    static resetInstance = () => {
      singleton.instance = undefined;
    };

    static getInstance = () => {
      if (!singleton.instance) singleton.instance = new clazz();
      return singleton.instance;
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
