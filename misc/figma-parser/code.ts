// This plugin creates 5 rectangles on the screen.
// const numberOfRectangles = 5

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs such as the network by creating a UI which contains
// a full browser environment (see documentation).

// const nodes: SceneNode[] = [];

// figma.currentPage.children.forEach(({ name, type }) =>
//   console.warn({ name, type })
// );
// This plugin counts the number of layers, ignoring instance sublayers,
// in the document

const BACKGROUND = "__BACKGROUND__";

// Your plugin code goes here
function reflowComponents(node: SceneNode & ChildrenMixin) {
  const components: SceneNode[] = [];
  const { x, y } = node;

  // Collect all top-level components in the page
  if (node.children) {
    for (const child of node.children) {
      console.warn(child.name);
      if (child.name === BACKGROUND) continue;
      components.push(child);
    }
  }

  node
    .findChildren((node) => node.name === BACKGROUND)
    .forEach((node) => {
      node.remove();
    });
  const _backgroundNode = figma.createRectangle();

  _backgroundNode.name = BACKGROUND;
  // _backgroundNode.x = 0;
  // _backgroundNode.y = 0;
  console.warn(node.name, node.x, node.y, node.width, node.height, node);
  _backgroundNode.resize(node.width, node.height);
  node.appendChild(_backgroundNode);

  // Calculate new positions for components
  let currentX = node.x;

  for (const component of [...components].reverse()) {
    try {
      console.warn(component);
      component.x = currentX;
      currentX += component.width;
      component.y = node.y;
      // @ts-ignore
      component.height = node.height;
    } catch (e) {
      console.warn(e);
    }
  }

  for (const component of components) {
    node.appendChild(component);
  }

  node.x = x;
  node.y = y;
}

let count = 0;
function traverse(node: SceneNode & ChildrenMixin) {
  if ("children" in node) {
    count++;

    reflowComponents(node);
    // if (node.type !== "INSTANCE") {
    if (!node.children) return;

    for (const child of node.children) {
      traverse(child as SceneNode & ChildrenMixin);
      console.warn(child);
    }
    // }
  }
}

// traverse(
//   figma.root.findOne((n) => n.name === "ROOT") as unknown as SceneNode &
//     ChildrenMixin
// ); // start the traversal at the root

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
