import { Inter } from "next/font/google";
import CollapsibleNode from "./components/CollapsibleNode";
import { State } from "./components/data";
import { useSharedState } from "./components/utils";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data] = useSharedState(State);
  return (
    <main className={`flex min-h-screen flex-col p-24 ${inter.className}`}>
      <h2 className="mb-2 mt-0 text-5xl font-medium leading-tight text-primary">
        Onion Summarization Tool
      </h2>
      <CollapsibleNode node={data} />
    </main>
  );
}
