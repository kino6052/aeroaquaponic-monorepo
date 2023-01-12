import { initialState, IState } from "./bridge";
import { io } from "./io";
import { reduce } from "./reduce";

// MAIN APP ENTRY POINT
// NOTE: A representation of application/stateful agent
const applicationLoop = async (state: IState): Promise<void> => {
  // NOTE: Non-pure function.
  // Can be tested too though
  const action = await io(state);

  // NOTE: Pure function. TDD friendly
  const nextState = await reduce(action, state);

  // NOTE: Recursion
  return applicationLoop(nextState);
};

// NOTE: Start the Application
// @ts-ignore
applicationLoop(initialState);
