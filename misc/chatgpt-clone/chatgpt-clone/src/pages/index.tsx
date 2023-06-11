import { Inter } from "next/font/google";

import "../decoupler";
import { App } from "../decoupler/io/ui";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <App />;
}
