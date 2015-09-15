import {concat} from './concat';
import {curry} from '../functional/curry';
import {hasMethod} from '../object/hasMethod';
import {head} from './head';
import {isEmpty} from '../logic/isEmpty';
import {isNil} from '../type/isNil';
import {reduce} from './reduce';
import {tail} from './tail';

export const intersperse =
  curry(
    (sep, xs) =>
      isNil(xs)                    ? [] :
      hasMethod('intersperse', xs) ? xs.intersperse(sep) :
      isEmpty(xs)                  ? []
                                   : reduce(
                                      (acc, x) => concat(acc, sep, x),
                                      [head(xs)],
                                      tail(xs)
                                   )
  );
