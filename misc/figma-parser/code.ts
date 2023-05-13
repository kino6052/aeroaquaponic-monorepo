const BACKGROUND = "__BACKGROUND__";

// Function to collect all top-level components in the page
function collectComponents(node: SceneNode & ChildrenMixin): SceneNode[] {
  const components: SceneNode[] = [];
  if (node.children) {
    for (const child of node.children) {
      if (child.name === BACKGROUND) continue;
      components.push(child);
    }
  }
  return components;
}

// Function to remove all nodes with a specific name
function removeNodesByName(
  node: SceneNode & ChildrenMixin,
  name: string
): void {
  node
    .findChildren((node) => node.name === name)
    .forEach((node) => {
      node.remove();
    });
}

// Function to create a background node
function createBackgroundNode(node: SceneNode & ChildrenMixin): SceneNode {
  const _backgroundNode = figma.createRectangle();
  _backgroundNode.name = BACKGROUND;
  _backgroundNode.resize(node.width, node.height);
  node.appendChild(_backgroundNode);
  return _backgroundNode;
}

// Function to reposition components
function repositionComponents(
  node: SceneNode & ChildrenMixin,
  components: SceneNode[],
  flow: "row" | "column" = "row"
): void {
  //@ts-ignore;
  (node as GroupNode).resize(node.parent.width, node.height);

  if (flow === "row") {
    let currentX = node.x;
    for (const component of [...components].reverse()) {
      try {
        component.x = currentX;
        currentX += component.width;
        component.y = node.y;
        // @ts-ignore
        component.height = node.height;
      } catch (e) {
        console.warn(e);
      }
    }
  } else {
    let currentX = node.x;
    let currentY = node.y;
    for (const component of [...components].reverse()) {
      try {
        component.y = currentY;
        currentY += component.height;
        component.x = node.x;
        // component.relativeTransform = []
        // // @ts-ignore
        // component.width = node.height;
      } catch (e) {
        console.warn(e);
      }
    }
  }
}

// Function to append components to a node
function appendComponents(
  node: SceneNode & ChildrenMixin,
  components: SceneNode[]
): void {
  for (const component of components) {
    node.appendChild(component);
  }
}

// Your plugin code goes here
function reflowComponents(node: SceneNode & ChildrenMixin) {
  const { x, y } = node;

  const components = collectComponents(node);
  removeNodesByName(node, BACKGROUND);
  createBackgroundNode(node);
  repositionComponents(node, components, "row");
  appendComponents(node, components);

  node.x = x;
  node.y = y;
}
const verify = (
  selection: readonly SceneNode[],
  cb: (selection: SceneNode) => void
) => {
  if (selection.length !== 1) {
    figma.notify("There should be exactly one Group element selected.");
    return;
  }

  if (selection[0].type !== "GROUP") {
    figma.notify("Selection should be a Group element.");
    return;
  }

  cb(selection[0]);
};

if (figma.command === "flexify") {
  const selection = figma.currentPage.selection;
  verify(selection, (selection) => {
    reflowComponents(selection as SceneNode & ChildrenMixin);
  });
  figma.closePlugin("Flexify worked!");
}

// figma.ui.onmessage = (msg) => {
//   console.warn(msg);
//   if (msg.type === "run-plugin") {
//   }
// };

// for (let i = 0; i < numberOfRectangles; i++) {
//   const rect = figma.createRectangle();
//   rect.x = i * 150;
//   rect.fills = [{type: 'SOLID', color: {r: 1, g: 0.5, b: 0}}];
//   figma.currentPage.appendChild(rect);
//   nodes.push(rect);
// }
// figma.currentPage.selection = nodes;
// figma.viewport.scrollAndZoomIntoView(nodes);

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
// figma.closePlugin();
