import { BehaviorSubject, combineLatest } from "rxjs";
import { filter, map, tap } from "rxjs/operators";
import { generateSingleton, Service } from "./service";
import { StateService } from "./state.service";

export class _FieldIntegrationService {
  fieldService: Field;
  stateService: StateService;

  constructor(...args: [Field, StateService]) {
    const [fieldService, stateService] = args;
    this.fieldService = fieldService;
    this.stateService = stateService;

    this.ChangeSubject().subscribe();
    this.ClickSubject().subscribe();
    combineLatest([
      this.fieldService.ValueSubject,
      this.fieldService.ErrorSubject,
      this.fieldService.IsTouchedSubject,
      this.fieldService.IsDisabledSubject,
    ]).subscribe(([value, error, isTouched, isDisabled]) => {
      const id = fieldService.id;
      this.stateService.setInput({
        id,
        value,
        error,
        isTouched,
        isDisabled,
      });
    });
  }

  ChangeSubject = () =>
    Service.OnChangeSubject().pipe(
      filter(([, id]) => id === this.fieldService.id),
      map(([, , v]) => v),
      tap((v) => this.fieldService.setValue(v ?? ""))
    );

  ClickSubject = () =>
    Service.OnClickSubject().pipe(
      filter(([, id]) => id === this.fieldService.buttonId),
      tap(() => this.fieldService.validate())
    );
}

export class Field {
  id = "one";
  buttonId = "one-button";

  // State
  public ValueSubject = new BehaviorSubject("");
  public ErrorSubject = new BehaviorSubject("");
  public IsTouchedSubject = new BehaviorSubject(false);
  public IsDisabledSubject = new BehaviorSubject(false);

  constructor() {}

  getValue = () => this.ValueSubject.getValue();

  setValue = (value: string) => {
    this.ValueSubject.next(this.formatPhone(value));
    this.IsTouchedSubject.next(true);
  };

  formatPhone = (s: string = "") => {
    const r = s.replace(/\D/g, "");
    const m = r.match(/^(\d{1,3})(\d{1,3})?(\d{1,})?$/);
    const first = (m?.[1] && `(${m[1]}`) ?? "";
    const second = (m?.[2] && `) ${m[2]}`) ?? "";
    const third = (m?.[3] && `-${m[3].substring(0, 4)}`) ?? "";
    return first + second + third;
  };

  getIsTouched = () => this.IsTouchedSubject.getValue();

  // Utils
  static validateInput = (v: string | undefined) => {
    if (!v) return "Should have value";
    if (v.replace(/\D/g, "").length < 10) return "Enter full number";
    return "";
  };

  validate = async () => {
    this.IsDisabledSubject.next(true);
    return new Promise((res) => {
      setTimeout(() => {
        const value = this.ValueSubject.getValue();
        const error = Field.validateInput(value);
        this.ErrorSubject.next(error);
        this.IsDisabledSubject.next(false);
        res(error);
      }, 1000);
    });
  };

  getError = () => this.ErrorSubject.getValue();

  getIsDisabled = () => this.IsDisabledSubject.getValue();
}

export const FieldService = generateSingleton(Field, []);

export const FieldIntegrationService = generateSingleton(
  _FieldIntegrationService,
  [FieldService.getInstance()!, StateService.getInstance()]
);

Service.InitSubject.subscribe(() => {
  // Initialization
  FieldIntegrationService.getInstance();
});
