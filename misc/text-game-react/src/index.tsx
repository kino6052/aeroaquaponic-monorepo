import { IState, StateSubject } from "./bridge";
import { io } from "./io";
import { reduce } from "./reduce";

const initialState = StateSubject.getValue();

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
applicationLoop(initialState);
