import {addAll} from './addAll';

export const mean =
  xs =>
    xs.length === 0 ? NaN
                    : addAll(...xs) / xs.length;
