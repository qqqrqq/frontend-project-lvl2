import stylish from './stylish.js';

export default (tree, format) => {
  switch (format) {
    case 'stylish':
      return stylish(tree);
    case 'test':
      return console.log('zaebis');
    default:
      throw new Error(`Формат не поддерживается: ${format}`);
  }
};
