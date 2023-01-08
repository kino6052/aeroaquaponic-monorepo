import { initialState } from "../../../bridge";
import { getCLI } from "../cli";

describe("CLI Suggest", () => {
  it("should suggest", () => {
    const cli = getCLI(initialState);
    cli.suggest();
    expect(cli.getState().output).toMatchInlineSnapshot(`
      "
      <h2>Did you mean?</h2>
      <ul><li><b>status</b>: provides status for the game</li><li><b>help</b>: lets you know things</li><li><b>internet</b>: lets you browse web</li></ul>
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
      <ul><li><b>status</b>: provides status for the game</li><li><b>help</b>: lets you know things</li><li><b>internet</b>: lets you browse web</li></ul>
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
      <ul><li><i>internet</i><b>test</b>: website</li></ul>
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
      <ul><li><i>internet</i><b>test</b>: website</li></ul>
      "
    `);
  });
});
