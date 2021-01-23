import { combineLatest } from "rxjs";
import { filter, map, tap } from "rxjs/operators";
import { FieldService } from "./field01.refactored.service";
import { Service } from "./service";
import { StateService } from "./state.refactored.service";

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
