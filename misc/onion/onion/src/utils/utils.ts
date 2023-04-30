import { INode } from "./data";

import { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";

export function mapNodes<T extends string | INode>(array: T[]) {
  return array.map((_node) =>
    typeof _node === "string"
      ? {
          id: generateGUID(),
          type: "text",
          text: _node,
          children: [],
        }
      : {
          // @ts-ignore
          ..._node,
          children: _node.children.map((n) => n?.id).filter((v) => !v),
        }
  );
}

export const useSharedState = <T>(
  subject: BehaviorSubject<T>
): [T, (state: T) => void] => {
  const [value, setState] = useState<T>(subject?.getValue());
  useEffect(() => {
    const sub = subject.subscribe((s) => setState(s));
    return () => sub.unsubscribe();
  }, [subject]);
  const newSetState = (state: T) => subject.next(state);
  return [value, newSetState];
};

export const setPartial = <T>(
  subject: BehaviorSubject<T>,
  partial: Partial<T>
) => {
  const prev = subject.getValue();
  subject.next({ ...prev, ...partial });
};

export function sliceArray<T>(array: T[], start: number, end: number) {
  const precedingPiece = array.slice(0, start);
  const cutOutPiece = array.slice(start, end);
  const followingPiece = array.slice(end);

  return [precedingPiece, cutOutPiece, followingPiece];
}

export function deepCopy<T>(something: T) {
  return JSON.parse(JSON.stringify(something));
}

export function _reduce<T extends INode | string>(array: T[]) {
  return deepCopy(
    array.reduce((_acc, item) => {
      let acc = _acc.slice(0, -1); // This will give you [1, 2, 3, 4]
      let lastItem = _acc.pop() || "";

      if (typeof item === "object" || typeof lastItem === "object")
        return [...acc, lastItem, item];
      return [...acc, `${lastItem} ${item}`];
    }, [] as T[])
  );
}

export function generateGUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function flattenObject(
  node: INode
): (Omit<INode, "children"> & { children: string[] })[] {
  // Copy node and replace children with their IDs
  let newNode = { ...node, children: node.children.map((child) => child.id) };

  // Base case: if the node has no children, return itself in an array
  if (node.children.length === 0) {
    return [newNode];
  }

  // Recursive case: map over the children, flatten them, and concatenate them with the node itself
  let children = node.children.flatMap(flattenObject);
  return [newNode, ...children];
}

export function arrayToTree(
  flatArray: ReturnType<typeof flattenObject>,
  rootId = "root"
) {
  const nodesById: Record<string, INode> = {};
  let root;

  // First pass: create a copy of each node and store it by ID
  flatArray.forEach((node) => {
    nodesById[node.id] = { ...node, children: [] };
  });

  // Second pass: populate the 'children' arrays
  flatArray.forEach((node) => {
    if (node.id === rootId) {
      // Assuming "1" is the root id
      root = nodesById[node.id];
    }
    const parent = nodesById[node.id];
    if (parent) {
      node.children.forEach((childId) => {
        const child = nodesById[childId];
        if (child) {
          parent.children.push(child);
        }
      });
      // parent.children.push(nodesById[node.id]);
    }
  });

  return root;
}

export function arrayToMapped<T extends { id: string }>(array: Array<T>) {
  return array.reduce(
    (acc, item) => ({
      ...acc,
      [item.id]: item,
    }),
    {} as Record<string, T>
  );
}

export function copyToClipboard(text: string) {
  if (!navigator.clipboard) {
    console.error("Clipboard API not available");
    return;
  }
  // @ts-ignore
  navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
    if (result.state == "granted" || result.state == "prompt") {
      navigator.clipboard.writeText(text).then(
        function () {
          alert("Copied!");
          console.log("Copying to clipboard was successful!");
        },
        function (err) {
          console.error("Could not copy text: ", err);
        }
      );
    } else {
      console.error("Permission to access clipboard is not granted");
    }
  });
}

export const Storage = {
  getText: () => {
    try {
      return localStorage.getItem("onion") || "";
    } catch (e) {
      console.error("Could not restore data");
      return "";
    }
  },
  setText: (text: string) => localStorage.setItem("onion", text),
};

export const importData = (data?: string) => {
  try {
    const result = JSON.parse(data);
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
          text: data,
          children: [],
        },
      ],
    } as INode;
    console.error("Could not parse import");

    return result;
  }
};
