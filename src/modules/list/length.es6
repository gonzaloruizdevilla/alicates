import {isInteger} from '../type/isInteger';
import {isNil} from '../type/isNil';

export const length =
  xs =>
    isNil(xs)                        ? NaN :
    typeof xs.length === 'undefined' ? NaN :
    isInteger(xs.length)             ? xs.length
                                     : NaN;
