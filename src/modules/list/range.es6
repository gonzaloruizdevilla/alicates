import {curry} from '../functional/curry';
import {unfold} from './unfold';

const notIsNumber =
  a =>
    Object.prototype.toString.call(a) !== '[object Number]';
const throwErrors =
  name =>
    {
      throw new TypeError(name + ' argument to range must be a number');
    };

export const range =
  curry((start, end, step = 1) =>
    notIsNumber(start) ? throwErrors('First') :
    notIsNumber(end)   ? throwErrors('Second') :
    notIsNumber(step)  ? throwErrors('Step') :
    step > 0           ? unfold(n => (n < end ? [n, n + step] : null), start)
                       : unfold(n => (n > end ? [n, n + step] : null), start)
  );
