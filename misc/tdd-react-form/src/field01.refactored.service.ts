import { BehaviorSubject } from "rxjs";
import { Service } from "./service";

export const Field001Id = "one";
export const Button001Id = "one-button";

export class FieldService {
  // State
  private ValueSubject = new BehaviorSubject("");
  private ErrorSubject = new BehaviorSubject("");
  private IsTouchedSubject = new BehaviorSubject(false);
  private IsDisabledSubject = new BehaviorSubject(false);

  private static instance: FieldService | undefined = undefined;

  static resetInstance = () => {
    FieldService.instance = new FieldService();
  };

  static getInstance = () => {
    if (!FieldService.instance) FieldService.instance = new FieldService();
    return FieldService.instance;
  };

  constructor() {}

  getValue = () => this.ValueSubject.getValue();

  setValue = (value: string) => {
    this.ValueSubject.next(FieldService.formatPhone(value));
    this.IsTouchedSubject.next(true);
  };

  static formatPhone = (s: string = "") => {
    const r = s.replace(/\D/g, "");
    const m = r.match(/^(\d{1,3})(\d{1,3})?(\d{1,})?$/);
    const first = (m?.[1] && `(${m[1]}`) ?? "";
    const second = (m?.[2] && `) ${m[2]}`) ?? "";
    const third = (m?.[3] && `-${m[3].substring(0, 4)}`) ?? "";
    return first + second + third;
  };

  getIsTouched = () => this.IsTouchedSubject.getValue();

  // Utils
  static validateInput = (v: string | undefined): string | undefined => {
    if (!v) return "Should have value";
    if (v.length < 10) return "Enter full number";
  };

  validate = async () => {
    this.IsDisabledSubject.next(true);
    return new Promise((res) => {
      setTimeout(() => {
        const value = this.ValueSubject.getValue();
        const error = FieldService.validateInput(value);
        if (error) {
          this.ErrorSubject.next(error);
        }
        this.IsDisabledSubject.next(false);
        res(error);
      }, 1000);
    });
  };

  getError = () => this.ErrorSubject.getValue();

  getIsDisabled = () => this.IsDisabledSubject.getValue();
}
