import { BehaviorSubject, Subject, filter, take } from "rxjs";

export type TAction<A, C, T> = {
  type: A;
  id: { id: C; index?: number };
  payload?: T;
};

export class Decoupler<PState, PAction, PControlId, PPayload> {
  private ActionSubject = new Subject<TAction<PAction, PControlId, PPayload>>();
  private IOQueueSubject = new BehaviorSubject<
    Array<TAction<PAction, PControlId, PPayload>>
  >([]);
  private StateSubject: BehaviorSubject<PState>;

  private ioHandlers: ((state: PState) => void)[] = [];

  private reducer: (
    state: PState,
    action: TAction<PAction, PControlId, PPayload>
  ) => PState;

  constructor(
    initialState: PState,
    reducer: (
      state: PState,
      action: TAction<PAction, PControlId, PPayload>
    ) => PState
  ) {
    this.StateSubject = new BehaviorSubject<PState>(initialState);
    this.reducer = reducer;

    this.ActionSubject.subscribe((action) => {
      this.IOQueueSubject.next([...this.IOQueueSubject.getValue(), action]);
    });
  }

  registerIOHandler(handler: (state: PState) => void) {
    this.ioHandlers.push(handler);
  }

  io(state: PState) {
    return new Promise<TAction<PAction, PControlId, PPayload>>((res) => {
      // NOTE: Run IO Agents in a non-blocking way
      this.ioHandlers.forEach((handler) => {
        handler(state);
      });

      this.IOQueueSubject.pipe(
        filter((queue) => queue.length > 0),
        take(1)
      ).subscribe((queue) => {
        const nextQueue = queue.slice(1);
        this.IOQueueSubject.next(nextQueue);
        res(queue[queue.length - 1]);
      });
    });
  }

  sendAction(action: TAction<PAction, PControlId, PPayload>) {
    this.ActionSubject.next(action);
  }

  init() {
    const initialState = this.StateSubject.getValue();

    // MAIN APP ENTRY POINT
    // NOTE: A representation of application/stateful agent
    const applicationLoop = async (state: PState): Promise<void> => {
      // NOTE: Non-pure function.
      // Can be tested too though
      const action = await this.io(state);

      // NOTE: Pure function. TDD friendly
      const nextState = this.reducer(state, action);

      // NOTE: Recursion
      return applicationLoop(nextState);
    };

    // NOTE: Start the Application
    applicationLoop(initialState);
  }
}
