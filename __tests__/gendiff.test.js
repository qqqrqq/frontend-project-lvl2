import path from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import gendiff from '../src/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const resultsTests = [
  ['file1.json', 'file2.json', 'resultstylish.txt', 'stylish'],
  ['file1.yml', 'file2.yml', 'resultstylish.txt', 'stylish'],
  ['file1.json', 'file2.json', 'resultplain.txt', 'plain'],
  ['file1.json', 'file2.json', 'resultjson.txt', 'json'],
];

test.each(resultsTests)('run tests', (firstfile, secondfile, resultfile, format) => {
  const firstPath = getFixturePath(firstfile);
  const secondPath = getFixturePath(secondfile);
  const result = readFile(resultfile);
  expect(result).toEqual(gendiff(firstPath, secondPath, format));
});
