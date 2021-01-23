import { BehaviorSubject, combineLatest, of } from "rxjs";
import { delay, filter, map, switchMap, tap } from "rxjs/operators";
import { Service } from "./service";
import { InitSubject } from "./init.service";

export const Field001Id = "one";
export const Button001Id = "one-button";

interface Service {}

export class FieldService {
  // State
  private ValueSubject = new BehaviorSubject("");
  private ErrorSubject = new BehaviorSubject("");
  private IsTouchedSubject = new BehaviorSubject(false);
  private IsDisabledSubject = new BehaviorSubject(false);

  private static instance: FieldService | undefined = undefined;

  static getInstance = () => {
    if (!FieldService.instance) FieldService.instance = new FieldService();
    return FieldService.instance;
  };

  constructor() {}

  getValue = () => this.ValueSubject.getValue();

  setValue = (value: string) => this.ValueSubject.next(value);
}
