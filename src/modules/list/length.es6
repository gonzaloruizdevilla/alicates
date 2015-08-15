import {isInteger} from '../type/isInteger';

export const length =
  xs =>
    xs === null || xs === undefined  ? NaN :
    typeof xs.length === 'undefined' ? NaN :
    isInteger(xs.length)             ? xs.length
                                     : NaN;
