import { decoupler } from "./bridge";
import { uiHandler } from "./io";

decoupler.registerIOHandler(uiHandler);

console.warn("Initializing!");
decoupler.init();
