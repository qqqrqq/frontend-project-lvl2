import path from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import gendiff from '../src/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');
const result = readFile('expectresult.txt');

test('gendiff json', () => {
  const path1 = getFixturePath('file1.json');
  const path2 = getFixturePath('file2.json');
  const equal = gendiff(path1, path2);

  expect(equal).toEqual(result);
});

test('gendiff yaml', () => {
  const path1 = getFixturePath('filepath1.yml');
  const path2 = getFixturePath('filepath2.yml');
  const equal = gendiff(path1, path2);
  expect(equal).toEqual(result);
});
