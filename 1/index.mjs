import { readFile } from 'node:fs/promises';

const inputFilePath = './1/input.txt';
const data = await readFile(inputFilePath, { encoding: 'utf-8' });

const numberLabels = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const getNumbers = () => {
  return data
    .split('\n')
    .map((line) => {
      const digits = line.match(/\d/g);
      const number = String(digits?.at(0)) + String(digits?.at(-1));
      return Number(number) || 0;
    })
    .reduce((a, b) => a + b, 0);
};

const getNumbersExtended = () => {
  return data
    .split('\n')
    .map((line) => {
      Object.keys(numberLabels).forEach((label) =>
        line.includes(label)
          ? (line = line.replaceAll(label, label + numberLabels[label] + label))
          : null
      );
      const digits = line.match(/\d/g);
      const number = String(digits?.at(0)) + String(digits?.at(-1));
      return Number(number) || 0;
    })
    .reduce((a, b) => a + b, 0);
};

console.log({ first: getNumbers(), second: getNumbersExtended() });
