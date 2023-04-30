import { useState } from "react";
import { INode, State } from "../utils/data";
import { copyToClipboard, generateGUID, useSharedState } from "../utils/utils";

const ImportExport: React.FC = () => {
  const [data, setData] = useSharedState(State);
  const [isVisible, setIsVisible] = useState(false);
  const [toImport, setToImport] = useState("");
  return (
    <div className="flex">
      <div>
        <button onClick={() => copyToClipboard(JSON.stringify(data))}>
          Copy to clipboard
        </button>
      </div>
      {isVisible && (
        <div>
          <textarea autoFocus onChange={(e) => setToImport(e.target.value)}>
            {toImport}
          </textarea>
        </div>
      )}
      <button
        onClick={() => {
          setIsVisible(!isVisible);
          if (isVisible && toImport) {
            // console.warn(JSON.stringify(JSON.parse(toImport)));
            try {
              setData(JSON.parse(toImport));
            } catch (e) {
              setData({
                id: "root",
                text: "Summary",
                type: "node",
                isOpen: true,
                children: [
                  {
                    id: generateGUID(),
                    type: "text",
                    text: toImport,
                    children: [],
                  },
                ],
              } as INode);
              console.error("Could not parse import");
            }
          }
        }}
      >
        {isVisible ? "finish import" : "import data"}
      </button>
    </div>
  );
};

export default ImportExport;
