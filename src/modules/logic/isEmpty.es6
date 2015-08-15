import {isNil} from '../type/isNil';

export const isEmpty =
  x =>
    !isNil(x) && x.length === 0;
