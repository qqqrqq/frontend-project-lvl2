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
  const iter = (newTree, depth) => newTree.map((node) => {
    const makeString = (value, sign) => `${space(depth)}${sign} ${node.name}: ${stringify(value, depth)}\n`;
    if (`${node.type}` === 'deleted') {
      return makeString(node.value, '-');
    }
    if (`${node.type}` === 'added') {
      return makeString(node.value, '+');
    }
    if (`${node.type}` === 'unchanged') {
      return makeString(node.value, ' ');
    }
    if (`${node.type}` === 'changed') {
      return `${makeString(node.value1, '-')}${makeString(node.value2, '+')}`;
    }
    if (`${node.type}` === 'nested') {
      return `${space(depth)}  ${node.name}: {\n${iter(node.children, depth + 1).join('')}${space(depth)}  }\n`;
    }
    return node;
  });
  const resultArr = iter(tree, 1);

  return `{\n${resultArr.join('')}}`;
};

export default stylish;
