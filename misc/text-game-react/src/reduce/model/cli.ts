import { IState } from "../../bridge";
import { makePrimaryHeading } from "../utils";
import { serialize, SerializedEntity } from "./entities";
import { SerializedHelper } from "./entities/serialized";
import { getStatusMeta } from "./entities/utils";
import { Entity, getWorld } from "./global";
import { InputParser } from "./parser";
// @ts-ignore
import { clone } from "ramda";
import { TimeHelper } from "../utils/TimeHelper";
import { getFormattedDate } from "./entities/status";
import { EntityId } from "./entities/types";

class CommandLineInterface {
  private __output: string = "";
  private __input: string = "";
  private __history: string[] = [];
  private __world: Entity | undefined;
  private __suggestMode: boolean = false;
  private __hasDayPassed: boolean = true;

  constructor(state: IState) {
    this.__output = state.output;
    this.__input = state.input;
    this.__history = state.history;
    this.__world = getWorld(state.entities);
  }

  set hasDayPassed(hasDayPassed: boolean) {
    this.__hasDayPassed = hasDayPassed;
  }

  update(state: Partial<IState>) {
    state.history && (this.__history = state.history);
    state.input && (this.__input = state.input);
    state.output && (this.__output = state.output);
    state.entities && (this.__world = getWorld(state.entities));
  }

  // clear() {
  //   this.__input = "";
  //   this.__output = "";
  //   this.__history = [];
  // }

  set input(input: string) {
    this.__input = input;
  }

  get world() {
    return this.__world;
  }

  updateHistory() {
    this.__history = [...this.__history, this.__output];
  }

  suggest() {
    if (!this.__world) return;
    const inputParser = new InputParser(this.__world);
    const commands = inputParser.parse(this.__input);
    const entities = inputParser.getEntities(commands);
    const result = inputParser.generateSuggestionOutput(entities);
    if (!this.__suggestMode) this.updateHistory();
    this.__output = result[0];
    this.__input = result[1];
    this.__suggestMode = true;
  }

  updateTime(
    update: { i: number; value: number } = { i: 1, value: 1 }
  ): boolean {
    const cli = this;
    const meta = getStatusMeta(cli);
    if (cli.world) {
      const serialized = serialize(cli.world);
      const helper = new SerializedHelper(serialized);
      const time = meta.date?.time;
      if (meta.date && time) {
        const {
          year,
          month,
          day,
          time: { hours, minutes, seconds },
        } = meta.date;
        const timeHelper = new TimeHelper(
          year,
          month,
          day,
          hours,
          minutes,
          seconds
        );
        timeHelper.update(update);
        this.hasDayPassed = timeHelper.getIsDayPassed(update);
        const resultTime = timeHelper.getFullDate();
        const status = helper.getById(EntityId.Status);
        if (status && status.meta) {
          const __status = clone(status);
          __status.meta.date = {
            ...__status.meta.date,
            year: resultTime.year,
            month: resultTime.month,
            day: resultTime.day,
            dow: resultTime.dow,
            time: {
              hours: resultTime.hour,
              minutes: resultTime.minute,
              seconds: resultTime.second,
            },
          };
          helper.update(EntityId.Status, { ...__status });
          cli.update({ entities: helper.entities });
        }
      }
    }
    return false;
  }

  interact(state: IState, cli: CommandLineInterface) {
    if (!this.__world) return;
    const wasSuggesting = this.__suggestMode;
    const inputParser = new InputParser(this.__world);
    const command = this.__input.trim();
    if (!command) {
      this.suggest();
      return;
    }
    const commands = inputParser.parse(command);
    const entities = inputParser.getEntities(commands, true);
    const isExact = entities.length === commands.length;
    if (!isExact) {
      this.suggest();
      return;
    }
    if (!this.__suggestMode) this.updateHistory();
    this.__suggestMode = false;
    const exact = entities.slice(-1)[0];
    this.updateTime();
    const result = exact.interact(cli);
    const title = this.__hasDayPassed
      ? makePrimaryHeading(getFormattedDate(cli))
      : "";
    this.__output = `${title}${result}`;
    this.__input = "";
    this.__hasDayPassed = false;
  }

  getState = (): {
    input: string;
    output: string;
    history: string[];
    entities: { [id: string]: SerializedEntity };
  } => ({
    input: this.__input,
    output: this.__output,
    history: this.__history,
    entities: this.__world ? serialize(this.__world) : {}, // TODO: Simplify
  });

  updateDraft = (draft: IState) => {
    Object.entries(this.getState()).forEach(
      // @ts-ignore
      ([key, value]) => (draft[key] = value)
    );
  };
}

let cliInstance: CommandLineInterface | undefined;

export const getCLI = (state: IState) => {
  if (!cliInstance) {
    cliInstance = new CommandLineInterface(state);
  }
  cliInstance.update(state);
  return cliInstance;
};
