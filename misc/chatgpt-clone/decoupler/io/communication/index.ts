import { decoupler } from "../../bridge";
import { EActionType, EControlId, IState } from "../../types";

const createAction = (payload: { text: string; isDone: boolean }) => ({
  id: {
    id: EControlId.QueryResponse,
  },
  type: EActionType.IO,
  payload,
});

const wait = (ms: number) =>
  new Promise<void>((res) => {
    setTimeout(() => {
      res();
    }, ms);
  });

const DELAY = 400;

export const communicationHandler = async (state: IState) => {
  const { isWaitingForResponse, activeMessage = "" } = state;

  if (!isWaitingForResponse) return;

  const len = activeMessage.split(" ").length;

  if (len === 1) {
    await wait(DELAY);
    decoupler.sendAction(
      createAction({
        isDone: false,
        text: "This",
      })
    );
    return;
  } else if (len < 3) {
    await wait(DELAY);
    decoupler.sendAction(
      createAction({
        isDone: false,
        text: "is the only message",
      })
    );
    return;
  } else {
    await wait(DELAY);
    decoupler.sendAction(
      createAction({
        isDone: true,
        text: "I can generate",
      })
    );
    return;
  }
};
