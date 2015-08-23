import {reduce} from './reduce';
import {assoc} from '../object/assoc';
import {isNil} from '../type/isNil';

export const fromPairs =
  reduce(
    (acc, x) => !isNil(x) && !isNil(x[0]) && !isNil(x[1]) ? assoc(x[0], x[1], acc)
                                                          : acc,
    {}
  );
