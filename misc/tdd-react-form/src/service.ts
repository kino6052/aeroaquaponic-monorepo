import React from "react";
import { Subject } from "rxjs";
import { filter } from "rxjs/operators";
import { InitSubject } from "./init.service";

export interface IInput {
  value: string;
  error?: string;
  isTouched: boolean;
  id: string;
  isDisabled?: boolean;
}

export type EventType = "click" | "change" | "focus";
export type Id = string;
export type IEvent = [EventType, Id, string | undefined];
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

  static unboxInputEvent = (
    e: React.ChangeEvent<HTMLInputElement>
  ): string | undefined => e?.target?.value;

  static OnChangeSubject = () =>
    Service.EventSubject.pipe(
      filter(([type]) => type === "change")
    ) as Subject<IEvent>;

  static OnClickSubject = () =>
    Service.EventSubject.pipe(
      filter(([type]) => type === "click")
    ) as Subject<IEvent>;

  static OnFocusSubject = () =>
    Service.EventSubject.pipe(
      filter(([type]) => type === "focus")
    ) as Subject<IEvent>;
}
