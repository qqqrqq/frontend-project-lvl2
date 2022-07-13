#!/usr/bin/env node
import { readFileSync } from 'fs';
import path from 'path';
import parse from './parses.js';
import buildTree from './build_tree.js';
import formater from './formaters/takeformat.js';

const readFile = (filepath) => {
  const format = path.extname(filepath);
  const getPath = path.resolve(process.cwd(), filepath);
  const getFile = readFileSync(getPath);
  const parseFile = parse(getFile, format);
  return parseFile;
};

const gendiff = (filepath1, filepath2, format = 'stylish') => {
  const convertFile1 = readFile(filepath1);
  const convertFile2 = readFile(filepath2);
  const tree = buildTree(convertFile1, convertFile2);
  const result = formater(tree, format);
  return result;
};

export default gendiff;
