
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import './global.css'
setCompodocJson(docJson);


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
