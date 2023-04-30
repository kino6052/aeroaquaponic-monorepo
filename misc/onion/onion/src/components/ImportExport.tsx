import { useCallback, useEffect, useState } from "react";
import { INode, State } from "../utils/data";
import {
  Storage,
  copyToClipboard,
  generateGUID,
  useSharedState,
} from "../utils/utils";

const ImportExport: React.FC = () => {
  const [data, setData] = useSharedState(State);
  const [isVisible, setIsVisible] = useState(false);
  const [toImport, setToImport] = useState(Storage.getText());

  const handleImport = useCallback(() => {
    setIsVisible(!isVisible);
    if (isVisible && toImport) {
      // console.warn(JSON.stringify(JSON.parse(toImport)));
      try {
        const result = JSON.parse(toImport);
        setData(result);

        return result;
      } catch (e) {
        const result = {
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
        } as INode;
        setData(result);
        console.error("Could not parse import");

        return result;
      }
    }
  }, []);

  useEffect(() => {
    const result = handleImport();
    Storage.setText(JSON.stringify(result));
  }, [data, handleImport]);

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
      <button onClick={handleImport}>
        {isVisible ? "finish import" : "import data"}
      </button>
    </div>
  );
};

export default ImportExport;
