import _ from 'lodash';

const buildTree = (file1, file2) => {
  const keys1 = _.keys(file1);
  const keys2 = _.keys(file2);
  const allKeys = _.sortBy(_.uniq(keys1.concat(keys2)));

  return allKeys.map((key) => {
    if (!_.has(file1, key)) {
      return {
        name: key,
        value: file2[key],
        type: 'added',
      };
    }
    if (!_.has(file2, key)) {
      return {
        name: key,
        value: file1[key],
        type: 'deleted',
      };
    }
    if (_.isObject(file1[key]) && _.isObject(file2[key])) {
      return {
        name: key,
        type: 'nested',
        children: buildTree(file1[key], file2[key]),
      };
    }
    if (file1[key] !== file2[key]) {
      return {
        name: key,
        value1: file1[key],
        value2: file2[key],
        type: 'changed',
      };
    }
    return {
      name: key,
      value: file1[key],
      type: 'unchanged',
    };
  });
};

export default buildTree;
