import { initialState } from "../../bridge";
import {
  getChangeAction,
  getEnterAction,
  getSuggestAction,
} from "../store/actions";
import { compose } from "../store/reducer";
import { selectInput, selectOutput } from "../store/selectors";

describe("Game", () => {
  it("should salute player", () => {
    expect(selectOutput(initialState)).toMatchInlineSnapshot(`
      "
      <h2>[2020/1/1 Monday]</h2>
      <p>I woke up this morning with an uneasy feeling of anticipation, knowing that yet another day full of meaningless work and routine was about to begin. As I opened my eyes, I couldn't help but feel trapped in a rat race that I desperately wanted to escape from. I lay in bed for a moment, staring blankly at the ceiling and thinking about all the alternatives that could break me out of this strange cycle.</p><p>Yesterday, as I was aimlessly browsing the web, I stumbled across a promising resource that could potentially help me make the escape I've been dreaming of. The website was about self-sufficiency and it caught my attention instantly. I spent hours reading through it, and I couldn't help but feel a spark of hope.</p><p>I got out of bed with a sigh, my feet hitting the cold floor. I dragged myself to the bathroom, splashed some water on my face, and got dressed for work. As I made my way to the kitchen, I couldn't help but think about how meaningless this day was going to be. I cursed myself for not having the courage to make a change and break out of this cycle. The smell of coffee and toast filled my nostrils as I sat down at the table, but it did little to lift my spirits. I felt empty and unfulfilled, just like every other day before.</p><p>But then I remembered the resource I had come across yesterday. I took out a pen and paper, and jotted down instructions to myself. \\"<b>Go on the internet and look for this website about self-sufficiency</b>. Take the time to read through it thoroughly and research more about it. This could be the answer to breaking out of this cycle and finding true fulfillment.\\"</p><p>I knew that this was a step in the right direction and it gave me a glimmer of hope for the future. I couldn't wait to get home and start my research. And maybe, just maybe, I'll finally be able to escape this rat race and become the king of my own destiny. Or at least, a self-sufficient</p>
      "
    `);
  });

  it("should show help player", () => {
    const resultingState = compose(initialState)([
      getChangeAction("help"),
      getEnterAction(),
    ]);
    expect(selectInput(resultingState)).toEqual("");
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(
      `"<h3>Help</h3><p>This is a game about self-sufficiency</p>"`
    );
  });

  it("should show help to player", () => {
    const resultingState = compose(initialState)([getSuggestAction()]);
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
      "
      <h3>Here is what I can do right now:</h3>
      <ul><li><b>help</b>: if I forget the sense of direction, this comes in handy</li><li><b>status</b>: lets me know what is going on in the world</li><li><b>todo</b>: my todo list</li><li><b>internet</b>: this is how I browse the internet</li></ul>
      "
    `);
  });

  it("should suggest what to google", () => {
    const resultingState = compose(initialState)([
      getChangeAction("internet"),
      getSuggestAction(),
    ]);
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
      "
      <h3>Here is what I can do right now:</h3>
      <ul><li><i>internet</i> <b>self-sufficiency</b>: website</li></ul>
      "
    `);
  });

  it("should google self-sufficiency", () => {
    const resultingState = compose(initialState)([
      getChangeAction("internet self-sufficiency"),
      getEnterAction(),
    ]);
    expect(selectInput(resultingState)).toEqual("");
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(
      `"<h3>self-sufficiency.com</h3><p>You've read the website and it seemed very reasonable</p>"`
    );
  });

  it("should update your commands after you leave site", () => {
    const resultingState = compose(initialState)([
      getChangeAction("internet self-sufficiency"),
      getEnterAction(),
      getSuggestAction(),
    ]);
    expect(selectInput(resultingState)).toEqual("");
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
      "
      <h3>Here is what I can do right now:</h3>
      <ul><li><b>help</b>: if I forget the sense of direction, this comes in handy</li><li><b>status</b>: lets me know what is going on in the world</li><li><b>todo</b>: my todo list</li><li><b>internet</b>: this is how I browse the internet</li></ul>
      "
    `);
  });

  it("should let you examine todo after you leave site", () => {
    const resultingState = compose(initialState)([
      getChangeAction("internet self-sufficiency"),
      getEnterAction(),
      getChangeAction("todo"),
      getEnterAction(),
    ]);
    expect(selectInput(resultingState)).toEqual("");
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(
      `"<h3>Todo</h3><p>I had a look at my todo and here were the items:</p><p>Here is what's left: </p><ul><li>go to the internet and find out about land</li></ul>"`
    );
  });

  it("should have extra options after it let you examine todo", () => {
    const resultingState = compose(initialState)([
      getChangeAction("internet self-sufficiency"),
      getEnterAction(),
      getChangeAction("todo"),
      getEnterAction(),
      getChangeAction("google"),
      getEnterAction(),
    ]);
    expect(selectInput(resultingState)).toEqual("");
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
      "
      <h3>Here is what I can do right now:</h3>
      <ul><li><b>help</b>: if I forget the sense of direction, this comes in handy</li><li><b>status</b>: lets me know what is going on in the world</li><li><b>todo</b>: my todo list</li><li><b>internet</b>: this is how I browse the internet</li></ul>
      "
    `);
  });

  it("should be able to google buy land dot com", () => {
    const resultingState = compose(initialState)([
      getChangeAction("internet self-sufficiency"),
      getEnterAction(),
      getChangeAction("todo"),
      getEnterAction(),
      getChangeAction("internet bu"),
      getSuggestAction(),
    ]);
    expect(selectInput(resultingState)).toMatchInlineSnapshot(`"internet"`);
  });

  it("should be able to google buy land dot com", () => {
    const resultingState = compose(initialState)([
      getChangeAction("internet self-sufficiency"),
      getEnterAction(),
      getChangeAction("todo"),
      getEnterAction(),
      getChangeAction("google bu"),
      getSuggestAction(),
      getEnterAction(),
    ]);
    expect(selectInput(resultingState)).toEqual("");
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
      "
      <h3>Here is what I can do right now:</h3>
      <ul><li><b>help</b>: if I forget the sense of direction, this comes in handy</li><li><b>status</b>: lets me know what is going on in the world</li><li><b>todo</b>: my todo list</li><li><b>internet</b>: this is how I browse the internet</li></ul>
      "
    `);
  });

  it("should show status", () => {
    const resultingState = compose(initialState)([
      getChangeAction("status"),
      getEnterAction(),
    ]);
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(`
      "<h3>Status</h3><p><b>Date</b>: 2020/1/1</p><p><b>Season</b>: winter</p><p><b>Temperature</b>: -10 celsius</p><p><b>Location</b>: Disturbipolis, Disturbistan, Disturbium</p><p><b>Economics</b>: Inflation Rate: 7; Sentiment: cold</p>
        <p><b>Politics</b>: Spectrum: liberal</p><p><b>Description</b>: You are looking for ways to change the course of your life for better</p>"
    `);
  });
});
