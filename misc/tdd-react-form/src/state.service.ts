import { BehaviorSubject } from "rxjs";
import { FieldService as Field01Service } from "./field01.service";
import { FieldService as Field02Service } from "./field02.service";
import { FieldService as Field03Service } from "./field03.service";
import { IInput, Service } from "./service";

const getPositionMap = () => ({
  [Field01Service.getInstance().id]: 1,
  [Field02Service.getInstance().id]: 2,
  [Field03Service.getInstance().id]: 3,
});

export class StateService {
  private static instance: StateService | undefined = undefined;

  static resetInstance = () => {
    StateService.instance = undefined;
  };

  static getInstance = () => {
    if (!StateService.instance) StateService.instance = new StateService();
    return StateService.instance;
  };

  StateSubject = new BehaviorSubject<IInput[]>([]);

  constructor() {}

  getInput = (id: string) =>
    this.StateSubject.getValue().find(({ id: _id }) => _id === id);

  getValue = (id: string) => this.getInput(id)?.value;

  setInput = (nextInput: IInput) => {
    const isUnique = (input: IInput, i: number, arr: IInput[]) =>
      arr.findIndex(({ id }) => id === input.id) === i;
    const prevState = this.StateSubject.getValue();
    const newState = [nextInput, ...prevState]
      .filter(isUnique)
      .sort(
        ({ id: a }, { id: b }) => getPositionMap()[a] - getPositionMap()[b]
      );
    this.StateSubject.next(newState);
  };
}

Service.InitSubject.subscribe(() => {
  StateService.getInstance();
});
