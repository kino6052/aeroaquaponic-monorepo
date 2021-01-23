import { BehaviorSubject } from "rxjs";

export class FieldService {
  id = "one";
  buttonId = "one-button";
  // State
  public ValueSubject = new BehaviorSubject("");
  public ErrorSubject = new BehaviorSubject("");
  public IsTouchedSubject = new BehaviorSubject(false);
  public IsDisabledSubject = new BehaviorSubject(false);

  private static instance: FieldService | undefined = undefined;

  static resetInstance = () => {
    FieldService.instance = undefined;
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
