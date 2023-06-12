import { decoupler } from "./bridge";
import { uiHandler } from "./io";
import { communicationHandler } from "./io/communication";

decoupler.registerIOHandler(uiHandler);
decoupler.registerIOHandler(communicationHandler);
decoupler.init();
