import {concat} from './concat';
import {curry} from '../functional/curry';
import {head} from './head';
import {reduce} from './reduce';
import {tail} from './tail';
import {isNil} from '../type/isNil';
import {isEmpty} from '../logic/isEmpty';
import {hasMethod} from '../object/hasMethod';

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
