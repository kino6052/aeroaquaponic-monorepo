import { BehaviorSubject, combineLatest } from "rxjs";
import { filter, map, tap } from "rxjs/operators";
import { Service } from "./service";
import { StateService } from "./state.service";
import { FieldService as PhoneFieldService } from "./field01.service";
import { InitSubject } from "./init.service";

export class FieldIntegrationService {
  private static instance: FieldIntegrationService | undefined = undefined;

  static resetInstance = () => {
    FieldIntegrationService.instance = undefined;
  };

  static getInstance = (
    fieldService: FieldService,
    stateService: StateService
  ) => {
    if (!FieldIntegrationService.instance)
      FieldIntegrationService.instance = new FieldIntegrationService(
        fieldService,
        stateService
      );
    return FieldIntegrationService.instance;
  };

  constructor(
    private fieldService: FieldService,
    private stateService: StateService
  ) {
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

export class FieldService {
  id = "two";
  buttonId = "two-button";
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
    this.ValueSubject.next(value);
    this.IsTouchedSubject.next(true);
  };

  getIsTouched = () => this.IsTouchedSubject.getValue();

  // Utils
  static validateInput = (v: string | undefined) => {
    if (!v) return "Should have value";
    const phoneFieldService = PhoneFieldService.getInstance();
    const hasError = !!phoneFieldService.ErrorSubject.getValue();
    if (hasError) return "Fix phone number";
    return "";
  };

  validate = async () => {
    this.IsDisabledSubject.next(true);
    return new Promise((res) => {
      setTimeout(() => {
        const value = this.ValueSubject.getValue();
        const error = FieldService.validateInput(value);
        this.ErrorSubject.next(error);
        this.IsDisabledSubject.next(false);
        res(error);
      }, 1000);
    });
  };

  getError = () => this.ErrorSubject.getValue();

  getIsDisabled = () => this.IsDisabledSubject.getValue();
}

InitSubject.subscribe(() => {
  // Initialization
  const fieldService = FieldService.getInstance();
  const stateInstance = StateService.getInstance();
  FieldIntegrationService.getInstance(fieldService, stateInstance);
});
