import { initialState } from "../../../bridge";
import { Utils } from "../../utils";
import { getCLI } from "../cli";
import { getWorld } from "../global";
import { InputParser } from "../parser";

describe("CLI Suggest", () => {
  it("should suggest", () => {
    const cli = getCLI(initialState);
    cli.suggest();
    expect(cli.getState().output).toMatchInlineSnapshot(`
      "
      <h2>Did you mean?</h2>
      <ul><li><b>help</b>: lets you know things</li><li><b>status</b>: provides status for the game</li><li><b>todo</b>: your todo list</li><li><b>internet</b>: let's you browse web</li><li><b>clear</b>: clear history</li></ul>
      "
    `);
  });

  it("should suggest", () => {
    const cli = getCLI(initialState);
    cli.input = "he";
    cli.suggest();
    expect(cli.getState().output).toMatchInlineSnapshot(`
      "
      <h2>Did you mean?</h2>
      <ul><li><b>help</b>: lets you know things</li></ul>
      "
    `);
  });

  it("should suggest", () => {
    const cli = getCLI(initialState);
    cli.input = "sta";
    cli.suggest();
    expect(cli.getState().output).toMatchInlineSnapshot(`
      "
      <h2>Did you mean?</h2>
      <ul><li><b>status</b>: provides status for the game</li></ul>
      "
    `);
  });

  it("should suggest", () => {
    const cli = getCLI(initialState);
    cli.input = "test";
    cli.suggest();
    expect(cli.getState().output).toMatchInlineSnapshot(`
      "
      <h2>Did you mean?</h2>
      <ul><li><b>help</b>: lets you know things</li><li><b>status</b>: provides status for the game</li><li><b>todo</b>: your todo list</li><li><b>internet</b>: let's you browse web</li><li><b>clear</b>: clear history</li></ul>
      "
    `);
  });
});

describe("CLI Nested Suggest", () => {
  it("should suggest", () => {
    const cli = getCLI(initialState);
    cli.input = "internet t";
    cli.suggest();
    expect(cli.getState().output).toMatchInlineSnapshot(`
      "
      <h2>Did you mean?</h2>
      <ul><li><i>internet</i> <b>self-sufficiency</b>: website</li></ul>
      "
    `);
  });

  it("should suggest", () => {
    const cli = getCLI(initialState);
    cli.input = "internet t a";
    cli.suggest();
    expect(cli.getState().output).toMatchInlineSnapshot(`
      "
      <h2>Did you mean?</h2>
      <ul><li><i>internet</i> <b>self-sufficiency</b>: website</li></ul>
      "
    `);
  });

  it("should suggest", () => {
    const cli = getCLI(initialState);
    cli.input = "internet test test test test a";
    cli.suggest();
    expect(cli.getState().output).toMatchInlineSnapshot(`
      "
      <h2>Did you mean?</h2>
      <ul><li><i>internet</i> <b>self-sufficiency</b>: website</li></ul>
      "
    `);
  });
});

const idSpy = jest.spyOn(Utils, "generateId");

describe("CLI Nested Suggest", () => {
  it("should", () => {
    idSpy.mockImplementation(() => "1");
    const inputParser = new InputParser(getWorld(initialState.entities));
    const commands = inputParser.parse("sta");
    const result = inputParser
      .getEntities(commands)
      .map(({ state }) => state.name);
    expect(result).toMatchInlineSnapshot(`
      Array [
        "status",
      ]
    `);
  });

  it("should", () => {
    idSpy.mockImplementation(() => "");
    const inputParser = new InputParser(getWorld(initialState.entities));
    const commands = inputParser.parse("inte");
    const result = inputParser
      .getEntities(commands)
      .map(({ state }) => state.name);
    expect(result).toMatchInlineSnapshot(`
      Array [
        "internet",
      ]
    `);
  });

  it("should", () => {
    idSpy.mockImplementation(() => "");
    const inputParser = new InputParser(getWorld(initialState.entities));
    const commands = inputParser.parse("internet tes");
    const result = inputParser
      .getEntities(commands)
      .map(({ state }) => state.name);
    expect(result).toMatchInlineSnapshot(`
      Array [
        "internet",
      ]
    `);
  });

  it("should", () => {
    idSpy.mockImplementation(() => "");
    const inputParser = new InputParser(getWorld(initialState.entities));
    const commands = inputParser.parse("internet a");
    const result = inputParser
      .getEntities(commands)
      .map(({ state }) => state.name);
    expect(result).toMatchInlineSnapshot(`
      Array [
        "internet",
      ]
    `);
  });
});
