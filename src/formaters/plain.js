const stringify = (value) => {
  if (typeof (value) === 'object' && value !== null) {
    return '[complex value]';
  }
  if (typeof (value) === 'string') {
    return `'${value}'`;
  }
  return value;
};

const plain = (tree) => {
  const iter = (newTree, parent) => newTree.filter((node) => node.type !== 'unchanged').map((node) => {
    const prop = parent ? `${parent}.${node.name}` : `${node.name}`;

    if (`${node.type}` === 'deleted') {
      const txt = `Property '${prop}' was removed`;
      return txt;
    }
    if (`${node.type}` === 'added') {
      const txt = `Property '${prop}' was added with value: ${stringify(node.value)}`;
      return txt;
    }
    if (`${node.type}` === 'changed') {
      const txt = `Property '${prop}' was updated. From ${stringify(node.value1)} to ${stringify(node.value2)}`;
      return txt;
    }
    if (`${node.type}` === 'nested') {
      const txt = `${iter(node.children, prop).join('\n')}`;
      return txt;
    }
    return node;
  });
  const result = iter(tree, 0);
  return result.join('\n');
};

export default plain;
