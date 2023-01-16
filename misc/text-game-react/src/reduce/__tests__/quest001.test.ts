import { initialState } from "../../bridge";
import {
  getChangeAction,
  getEnterAction,
  getSuggestAction,
} from "../store/actions";
import { compose } from "../store/reducer";
import { selectHistory, selectInput, selectOutput } from "../store/selectors";

describe("Quest 001", () => {
  it("should have a todo item", () => {
    const resultingState = compose(initialState)([
      getChangeAction("todo"),
      getEnterAction(),
    ]);
    expect(selectInput(resultingState)).toEqual("");
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(
      `"<h3>Todo</h3><p>I had a look at my todo and here were the items:</p><p>Here is what's left: </p><ul><li>Go to the internet to visit the site and learn about self-sufficiency</li></ul>"`
    );
  });

  it("should NOT override first entry by status", () => {
    const resultingState = compose(initialState)([
      getChangeAction("status"),
      getEnterAction(),
    ]);
    expect(selectHistory(resultingState)).toMatchInlineSnapshot(`
      Array [
        "
      <h2>[2020/1/1 Monday]</h2>
      <p>I woke up this morning with an uneasy feeling of anticipation, knowing that yet another day full of meaningless work and routine was about to begin. As I opened my eyes, I couldn't help but feel trapped in a rat race that I desperately wanted to escape from. I lay in bed for a moment, staring blankly at the ceiling and thinking about all the alternatives that could break me out of this strange cycle.</p><p>Yesterday, as I was aimlessly browsing the web, I stumbled across a promising resource that could potentially help me make the escape I've been dreaming of. The website was about self-sufficiency and it caught my attention instantly. I spent hours reading through it, and I couldn't help but feel a spark of hope.</p><p>I got out of bed with a sigh, my feet hitting the cold floor. I dragged myself to the bathroom, splashed some water on my face, and got dressed for work. As I made my way to the kitchen, I couldn't help but think about how meaningless this day was going to be. I cursed myself for not having the courage to make a change and break out of this cycle. The smell of coffee and toast filled my nostrils as I sat down at the table, but it did little to lift my spirits. I felt empty and unfulfilled, just like every other day before.</p><p>But then I remembered the resource I had come across yesterday. I took out a pen and paper, and jotted down instructions to myself. \\"<b>Go on the internet and look for this website about self-sufficiency</b>. Take the time to read through it thoroughly and research more about it. This could be the answer to breaking out of this cycle and finding true fulfillment.\\"</p><p>I knew that this was a step in the right direction and it gave me a glimmer of hope for the future. I couldn't wait to get home and start my research. And maybe, just maybe, I'll finally be able to escape this rat race and become the king of my own destiny. Or at least, a self-sufficient</p>
      ",
      ]
    `);
  });

  it("should have a correct autocomplete sequence", () => {
    const resultingState = compose(initialState)([
      getChangeAction("internet self"),
      getSuggestAction(),
      getEnterAction(),
    ]);
    expect(selectInput(resultingState)).toEqual("");
    expect(selectHistory(resultingState).length).toMatchInlineSnapshot(`1`);
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(
      `"<h3>self-sufficiency.com</h3><p>I visited the website about self-sufficiency that I had come across a few days ago. It was an eye-opening experience, and I learned a lot about what it takes to truly become self-sufficient. The website explained that in order to start the journey, I need to form a unit of self-sufficiency, which comprises of three main components: property, technology, and skills.</p><p>The first component, property, is crucial. I need to find a piece of land where I can live without paying rent and where I can grow my food. This will form the foundation of my self-sufficiency journey, and it's something I'll need to start researching and looking into.</p><p>The second component, technology, is also crucial. Over time, I'll need to improve my property and make sure that I don't spend too much time doing unnecessary repetitive labor. This means investing in tools and equipment that will make my life easier and more efficient. It's important to find the balance between working hard and living a well-balanced life.</p><p>The third component, skills, is also key. I need to start developing skills that will allow me to adapt quickly to any change in the world, and not let me lose the self-sufficient status. This means learning new things, experimenting with different techniques, and being open to new ideas.</p><p>Overall, it was an enlightening experience, and it gave me a lot to think about. I now have a better understanding of what it takes to become truly self-sufficient, and I'm excited to start researching and taking action on the different components. I'm looking forward to updating my diary with my progress and thoughts as I learn more about self-sufficiency.</p>"`
    );
  });

  it("should have a todo item", () => {
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

  it("should only display message once", () => {
    const resultingState = compose(initialState)([
      getChangeAction("internet self-sufficiency"),
      getEnterAction(),
      getChangeAction("internet self-sufficiency"),
      getEnterAction(),
    ]);
    expect(selectInput(resultingState)).toEqual("");
    expect(selectOutput(resultingState)).toMatchInlineSnapshot(
      `"<h3>self-sufficiency.com</h3><p>I really dug the ideas outlined in the website about self-sufficiency.</p><p>The concept of forming a unit of self-sufficiency really resonated with me.</p><p>Now I just need to follow my todo list</p>"`
    );
  });
});
