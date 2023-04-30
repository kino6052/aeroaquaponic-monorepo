import React, { useEffect, useState } from "react";
import { INode, State } from "./data";
import {
  arrayToMapped,
  arrayToTree,
  flattenObject,
  generateGUID,
  mapNodes,
  sliceArray,
  useSharedState,
  _reduce,
} from "./utils";
import TextNode from "./TextNode";
import VisibilityNode from "./VisibilityNode";

const CollapsibleNode: React.FC<{
  node?: INode;
  onCancel?: () => void;
}> = ({ node, onCancel }) => {
  const [isOpen, setIsOpen] = useState(!!node?.isOpen);
  const [selectionStart, setSelectionStart] = useState<number | null>(null);
  const [selectionHover, setSelectionHover] = useState<number | null>(null);
  const [state, setState] = useSharedState(State);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        console.log("Escape key was pressed.");
        // You can replace the console.log statement with your own logic
        setSelectionStart(null);
        setSelectionHover(null);
      }
    };
    document.addEventListener("keyup", listener);
    return () => document.removeEventListener("keyup", listener);
  }, []);

  const [array, setArray] = useState<Array<INode | string>>([]);

  useEffect(() => {
    if (node) {
      setArray(
        node?.children
          .map((child) => {
            if (child.type === "text") return child.text?.split(" ");
            else {
              return child;
            }
          })
          .flat()
      );
    }
  }, [node]);

  const handleWordHover = (index: number) => {
    setSelectionHover(index);
  };

  const updateById = (id: string, node: Partial<INode>) => {
    const mappedArray = arrayToMapped(flattenObject(state));

    const prevNode = mappedArray[id];

    if (!prevNode) return;

    mappedArray[id] = { ...prevNode, ...node };

    const newState = JSON.parse(
      JSON.stringify(arrayToTree(Object.values(mappedArray)))
    );

    setState(newState);
  };

  // NOTE: Simplify
  const processArray = () => {
    if (selectionStart === null) return;
    if (selectionHover === null) return;

    const [before, section, after] = sliceArray(
      array,
      selectionStart,
      selectionHover + 1
    );

    const newId = generateGUID();

    const result = [
      ...before,
      {
        id: newId,
        text: `[name]`,
        type: "node",
        isOpen: false,
        isEditing: true,
        children: _reduce(section),
      },
      ...after,
    ];

    const mappedState = arrayToMapped(flattenObject(state));

    const grandChildren = mapNodes(_reduce(section));

    const updatedChildrenMap = arrayToMapped(
      _reduce(result).map((_node) => {
        if (typeof _node === "string") {
          return {
            id: generateGUID(),
            type: "text",
            text: _node,
            children: [],
          };
        }
        if (_node.id === newId) {
          return { ..._node, children: grandChildren.map(({ id }) => id) };
        }
        console.warn("TEST", _node);
        return mappedState[_node.id];
      })
    );

    const mappedArray = {
      ...arrayToMapped(grandChildren),
      ...arrayToMapped(flattenObject(state)),
      ...updatedChildrenMap,
      [node.id]: {
        ...node,
        children: Object.values(updatedChildrenMap).map(({ id }) => id),
      },
    };

    const newState = JSON.parse(
      JSON.stringify(arrayToTree(Object.values(mappedArray)))
    );

    setState(newState);
  };

  const handleWordClick = (index: number) => {
    if (!selectionStart) return setSelectionStart(index);
    if (!selectionHover) return;

    processArray();

    setSelectionStart(null);
    setSelectionHover(null);
  };

  const handleCancel = (id: string) => {
    const index = array.findIndex((el) =>
      typeof el === "object" ? el.id === id : false
    );

    if (index < 0) return;

    const [before, section, after] = sliceArray(array, index, index + 1);

    const mappedState = arrayToMapped(flattenObject(state));

    // console.warn(array[index].children);
    // setArray([...before, ...array[index].children, ...after]);
    const updatedChildrenMap = arrayToMapped(
      mapNodes(_reduce([...before, ...array[index].children, ...after]))
    );

    const mappedArray = {
      ...updatedChildrenMap,
      ...mappedState,
      [node.id]: {
        ...mappedState[node.id],
        children: Object.values(updatedChildrenMap).map(({ id }) => id),
      },
    };

    const newState = JSON.parse(
      JSON.stringify(arrayToTree(Object.values(mappedArray)))
    );

    setState(newState);
  };

  const getColor = (index: number) => {
    return index === selectionStart ||
      (selectionStart &&
        selectionHover &&
        selectionHover > selectionStart &&
        index > selectionStart &&
        index <= selectionHover)
      ? "#33333333"
      : "unset";
  };

  return (
    <span className="collapsible">
      <button
        className="button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? "-" : "+"}
      </button>
      <VisibilityNode isVisible={!isOpen}>
        <TextNode
          text={node?.text || ""}
          isEditing={node?.isEditing}
          onSave={(label: string) => {
            if (node?.id) {
              updateById(node?.id, { text: label, isEditing: false });
            }
          }}
        />
      </VisibilityNode>
      <VisibilityNode isVisible={isOpen}>
        {array.map((_node, i) =>
          typeof _node === "object" ? (
            <CollapsibleNode
              key={_node.id}
              node={_node}
              onCancel={() => handleCancel(_node.id)}
            />
          ) : _node?.match(/\n/) ? (
            <br />
          ) : (
            <span
              className="hoverable"
              style={{ background: getColor(i) }}
              onClick={() => handleWordClick(i)}
              onMouseOver={() => handleWordHover(i)}
            >
              {_node}{" "}
            </span>
          )
        )}
      </VisibilityNode>
      {onCancel && (
        <button
          onClick={() => {
            // handleCancel(node.id);
            onCancel();
          }}
        >
          x
        </button>
      )}
    </span>
  );
};

export default CollapsibleNode;
