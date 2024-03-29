import { IState } from "../../bridge";
import { makePrimaryHeading } from "../utils";
import { getStatusMeta } from "./entities/utils/utils";
import { Entity, getWorld } from "./global";
import { InputParser } from "./parser";
// @ts-ignore
import { clone } from "ramda";
import { dayOfWeek, TimeHelper } from "../utils/TimeHelper";
import { getFormattedDate } from "./entities/entities/cli/status";
import { EntityId, SerializedEntity } from "./entities/utils/types";
import { serialize, SerializedHelper } from "./entities/utils/serialized";

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

  suggest(suggestMode = this.__suggestMode) {
    if (!this.__world) return;
    const inputParser = new InputParser(this.__world);
    const commands = inputParser.parse(this.__input);
    const entities = inputParser.getEntities(commands);
    const result = inputParser.generateSuggestionOutput(entities);
    if (!suggestMode) this.updateHistory();
    this.__output = result[0];
    this.__input = result[1];
    this.__suggestMode = true;
  }

  setSuggestMode(isOn: boolean) {
    this.__suggestMode = isOn;
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
          dow,
          time: { hours, minutes, seconds },
        } = meta.date;
        const timeHelper = new TimeHelper(
          year,
          month,
          day,
          hours,
          minutes,
          seconds,
          dow as typeof dayOfWeek[number]
        );
        this.hasDayPassed = timeHelper.getIsDayPassed(update);
        timeHelper.update(update);
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
    if (!result) {
      return;
    }
    const meta = getStatusMeta(cli);
    // console.warn(meta);
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
