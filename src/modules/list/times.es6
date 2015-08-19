import {map} from './map';
import {range} from './range';
import {curry} from '../functional/curry';

const notIsNumber = a => Object.prototype.toString.call(a) !== '[object Number]';
const throwError = () => {throw new RangeError('Second argument is not a valid array length');};


export const times =
  curry(
    (fn, n) => notIsNumber(n) || n < 0 ? throwError()
                                       : map(fn, range(0, n))
  );
