import { values } from "lodash";
import { BehaviorSubject } from "rxjs";
import { IInput } from "./service";

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
    const prevState = this.StateSubject.getValue();
    const newState = [nextInput, ...prevState].filter(
      (_, i, arr) => arr.findIndex(({ id }) => id === id) === i
    );
    this.StateSubject.next(newState);
  };
}
