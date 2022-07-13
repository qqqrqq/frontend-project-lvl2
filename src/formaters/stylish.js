const space = (depth, spacesCount = 4) => ' '.repeat(spacesCount * depth - 2);

const stringify = (date, newDepth) => {
  if (typeof (date) !== 'object' || date === null) {
    return `${date}`;
  }
  const arrDate = Object.entries(date);
  const result = arrDate.map(([key, value]) => {
    if (typeof (value) === 'object') {
      return `${space(newDepth + 1)}  ${key}: ${stringify(value, newDepth + 1)}`;
    }
    return `${space(newDepth + 1)}  ${key}: ${value}`;
  });

  return `{\n${result.join('\n')}\n${space(newDepth)}  }`;
};

const stylish = (tree) => {
  const iter = (newTree, depth) => newTree.reduce((acc, node) => {
    const makeString = (value, sign) => `${space(depth)}${sign} ${node.name}: ${stringify(value, depth)}\n`;
    if (`${node.type}` === 'deleted') {
      acc.push(makeString(node.value, '-'));
      return acc;
    }
    if (`${node.type}` === 'added') {
      acc.push(makeString(node.value, '+'));
      return acc;
    }
    if (`${node.type}` === 'unchanged') {
      acc.push(makeString(node.value, ' '));
      return acc;
    }
    if (`${node.type}` === 'changed') {
      acc.push(makeString(node.value1, '-'));
      acc.push(makeString(node.value2, '+'));
      return acc;
    }
    if (`${node.type}` === 'nested') {
      acc.push(`${space(depth)}  ${node.name}: {\n${iter(node.children, depth + 1).join('')}${space(depth)}  }\n`);
      return acc;
    }
    return acc;
  }, []);
  const result = iter(tree, 1);
  result.unshift('{\n');
  result.push('}');
  return result.join('');
};

export default stylish;
