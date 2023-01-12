import { IState } from "../../bridge";

export const generateSpeech = (state: IState) => {
  window.speechSynthesis.cancel();
  let speakData = new SpeechSynthesisUtterance();
  speakData.text = state.output;
  speakData.lang = "en";
  speakData.volume = 1; // From 0 to 1
  speakData.rate = 5; // From 0.1 to 10
  speakData.pitch = 2; // From 0 to 2
  window.speechSynthesis.speak(speakData);
};
