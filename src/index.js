#!/usr/bin/env node
import { readFileSync } from 'fs';
import path from 'path';
import _ from 'lodash';
import parse from './parses.js';

const readFile = (filepath) => {
  const format = path.extname(filepath);
  console.log(format);
  const getPath = path.resolve(process.cwd(), filepath);
  const getFile = readFileSync(getPath);
  const parseFile = parse(getFile, format);
  return parseFile;
};

const diffFiles = (file1, file2) => {
  const keys1 = Object.keys(file1);
  const keys2 = Object.keys(file2);
  const allKeys = _.sortBy(_.uniq(keys1.concat(keys2)));

  const createDiff = allKeys.reduce((acc, key) => {
    const file1Value = file1[key];
    const file2Value = file2[key];
    if (file2Value === undefined) {
      acc.push(`  - ${key}: ${file1Value}\n`);
      return acc;
    }
    if (file1Value === undefined) {
      acc.push(`  + ${key}: ${file2Value}\n`);
      return acc;
    }
    if (file1Value === file2Value) {
      acc.push(`    ${key}: ${file1Value}\n`);
      return acc;
    }
    acc.push(`  - ${key}: ${file1Value}\n`);
    acc.push(`  + ${key}: ${file2Value}\n`);
    return acc;
  }, []);
  createDiff.unshift('{\n');
  createDiff.push('}\n');
  const result = createDiff.join('');
  return result;
};

const gendiff = (filepath1, filepath2) => {
  const convertFile1 = readFile(filepath1);
  const convertFile2 = readFile(filepath2);
  return diffFiles(convertFile1, convertFile2);
};

export default gendiff;
