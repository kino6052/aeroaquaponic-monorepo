import { useCallback, useEffect, useState } from "react";
import { State } from "../utils/data";
import {
  Storage,
  copyToClipboard,
  importData,
  useSharedState,
} from "../utils/utils";

const ImportExport: React.FC = () => {
  const [data, setData] = useSharedState(State);
  const [isVisible, setIsVisible] = useState(false);
  const [toImport, setToImport] = useState(Storage.getText());

  const handleImport = useCallback(() => {
    setIsVisible(!isVisible);
    if (isVisible && toImport) {
      const result = importData(toImport);
      setData(result);
    }
  }, [isVisible, setData, toImport]);

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
      <button onClick={() => handleImport()}>
        {isVisible ? "finish import" : "import data"}
      </button>
    </div>
  );
};

export default ImportExport;
