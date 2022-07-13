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
  const iter = (newTree, parent) => newTree.reduce((acc, node) => {
    const prop = parent ? `${parent}.${node.name}` : `${node.name}`;
    const makeString = (value) => `Property ${value}`;

    if (`${node.type}` === 'deleted') {
      const txt = `'${prop}' was removed`;
      acc.push(makeString(txt));
      return acc;
    }
    if (`${node.type}` === 'added') {
      const txt = `'${prop}' was added with value: ${stringify(node.value)}`;
      acc.push(makeString(txt));
      return acc;
    }
    if (`${node.type}` === 'changed') {
      const txt = `'${prop}' was updated. From ${stringify(node.value1)} to ${stringify(node.value2)}`;
      acc.push(makeString(txt));
      return acc;
    }
    if (`${node.type}` === 'nested') {
      const txt = `${iter(node.children, prop).join('\n')}`;
      acc.push(txt);
      return acc;
    }
    return acc;
  }, []);
  const result = iter(tree, 0);
  return result.join('\n');
};

export default plain;
