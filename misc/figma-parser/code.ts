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

function reflowComponents(node: SceneNode & ChildrenMixin) {
  const components: SceneNode[] = [];
  const PADDING = 10; // Add padding between components

  // Collect all top-level components in the page
  if (node.children && node.type !== "FRAME") {
    for (const child of node.children) {
      components.push(child);
    }
  }

  // Calculate new positions for components
  let currentX = node.x;

  for (const component of components) {
    try {
      console.warn(component);
      component.x = currentX;
      currentX += component.width + PADDING;
      component.y = node.y;
      // @ts-ignore
      component.height = node.height;
    } catch (e) {
      console.warn(e);
    }
  }
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

traverse(
  figma.root.findOne((n) => n.name === "ROOT") as unknown as SceneNode &
    ChildrenMixin
); // start the traversal at the root

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
