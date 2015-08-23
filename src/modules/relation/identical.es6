import {curry} from '../functional/curry';

const differnciateZeroes =
  (x, y) => x === 0 ? (1 / x === 1 / y)
                    : true;
const _identical =
  (x, y) =>
    x === y              ? differnciateZeroes(x, y)  :
    (x !== x && y !== y) ? true   //NaN !== NaN =>  true
                         : false;

export const identical = curry(_identical);
