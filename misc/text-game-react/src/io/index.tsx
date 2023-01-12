import { BehaviorSubject } from "rxjs";
import { AppEventSubject, IState, TEvent } from "../bridge";
import { generateSpeech } from "./speech";
import { presentationIO } from "./ui";

const QueueSubject = new BehaviorSubject<Array<TEvent>>([]);

AppEventSubject.subscribe((action) => {
  QueueSubject.next([...QueueSubject.getValue(), action]);
});

// TODO: Better to represent Agents and the Queue in an OOP manner
export const io = async (state: IState): Promise<TEvent> =>
  new Promise((res) => {
    // NOTE: Run IO Agents in a non-blocking way
    presentationIO(state);
    generateSpeech(state);

    // NOTE: Can use take(1) and filter() by length
    // NOTE: This function won't return if queue is empty
    const subscription = QueueSubject.subscribe((queue) => {
      if (queue.length > 0) {
        const nextQueue = queue.slice(1);
        QueueSubject.next(nextQueue);
        res(queue[queue.length - 1]);
        subscription.unsubscribe();
      }
    });
  });
