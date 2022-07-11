import { load } from 'js-yaml';

const parse = (file, format) => {
  switch (format) {
    case '.json':
      return JSON.parse(file);
    case '.yml':
    case '.yaml':
      return load(file);
    default:
      throw new Error(`Invalid file format type: ${format}! try supported formats. You can use JSON or YAML formats.`);
  }
};

export default parse;
