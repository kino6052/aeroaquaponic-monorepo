import "./state.service";
import { concat, from } from "rxjs";
import { filter, switchMap } from "rxjs/operators";
import { FieldService as Field01Service } from "./field01.service";
import { FieldService as Field02Service } from "./field02.service";
import { FieldService as Field03Service } from "./field03.service";
import { Service } from "./service";
import { InitSubject } from "./init.service";

export const SubmitId = "submit";

export class SubmitService {
  private static instance: SubmitService | undefined = undefined;

  static resetInstance = () => {
    SubmitService.instance = undefined;
  };

  static getInstance = () => {
    if (!SubmitService.instance) SubmitService.instance = new _SubmitService();
    return SubmitService.instance;
  };
}

class _SubmitService {
  constructor(
    private field01Service: Field01Service = Field01Service.getInstance(),
    private field02Service: Field02Service = Field02Service.getInstance(),
    private field03Service: Field03Service = Field03Service.getInstance()
  ) {
    this.ClickSubject().subscribe();
  }

  submit = async () => {
    await this.field01Service.validate();
    await this.field02Service.validate();
    await this.field03Service.validate();
  };

  ClickSubject = () =>
    Service.OnClickSubject().pipe(
      filter(([, id]) => id === SubmitId),
      switchMap(() => from(this.submit()))
    );
}

InitSubject.subscribe(() => {
  SubmitService.getInstance();
});
