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
