const getComponentPropertyByTextQuery = (node, query) => {
  try {
    const props = node.componentProperties;
    
    let result;

    if (props) {
      Object.entries(node.componentProperties).forEach(([key, value]) => {
        const match = RegExp(query).exec(key);

        if (!match) return;

        console.warn(3);

        console.warn({ match });

        result = key;

        return;
      })

      // node.editComponentProperty(propertyName: 'text', newValue: { name: 'text', })

      // console.warn(values);
    }

    if (!result) {
      node.mainComponent.addComponentProperty(query, "TEXT", 'test');
      result = getComponentPropertyByTextQuery(node, query);
    }

    return result;
    // console.warn(node.componentPropertyDefinitions, node.componentPropertyReferences, node.variantProperties  );
    // node.editComponentProperty(propertyName: string, newValue:)
  } catch (e) {
    console.error(e);
    return 
  }
}

function nodeToJson(node) {
  
  console.warn(`==== START ${node.id} ======`);

  let jsonNode = {
    id: node.id,
    description: node.description,
    name: node.name,
    type: node.type,
    variables: [node.componentProperties, node.componentPropertyReferences],
    parent: node.parent ? {
      id: node.parent.id,
      description: node.parent.description,
      name: node.parent.name,
      type: node.parent.type
    } : null,
    children: []
  };

  // console.warn(node);

  let description = null;

  // console.warn({ node, parent: node.parent });
  
  if (jsonNode) {
    try {
      

      
      if (node.type === 'INSTANCE') {
        console.warn({ name: node.name, type: node.type, mainComponent: {
          name: node.mainComponent.name,
          type: node.mainComponent.type,
          description: node.mainComponent.description
        }   });
        const _description = node.mainComponent.description;
        // console.warn(node.description);
        _description && console.warn({ _description });
        // Replace all non-ascii symbols
        description = JSON.parse(_description.replace(/[^\x00-\x7F]/g, ""));
        console.warn({ id: node.id, type: node.type, name: node.name });
        // try {
        //   node.deleteComponentProperty('test');
        // } catch (e) {
        //   console.error(e);
        // }
        // node.addComponentProperty('test', 'TEXT', 'placeholder');
        // // node.setProperties({
        // //   test: 'Test!'
        // // });

        const prop = getComponentPropertyByTextQuery(node, 'text');

        console.warn(prop);

        node.setProperties({
          [prop]: "cool"
        })

        console.warn({ prop });
      } 

      // console.log('JSON', description);
    } catch (e) {
      console.error(e);
    }
  }

  

  console.warn(`==== END ${node.id} ======`);

  if ("children" in node) {
    for (const child of node.children) {
      jsonNode.children.push(nodeToJson(child));
    }
  }
  
  return jsonNode;
}

if (figma.command === "json-debug") {
  const jsonTree = nodeToJson(figma.root);

  console.warn(jsonTree);

  figma.closePlugin("it worked!");
}

