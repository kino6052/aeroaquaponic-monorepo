import { decoupler } from "./bridge";
import { uiHandler } from "./io";

decoupler.registerIOHandler(uiHandler);

decoupler.init();
