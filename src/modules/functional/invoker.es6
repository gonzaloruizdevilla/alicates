import {init} from '../list/init';
import {last} from '../list/last';
import {curry} from '../functional/curry';
import {isFunction} from '../type/isFunction';
import {isNil} from '../type/isNil';
import {toString} from '../string/toString';

const throwError =
  (x, method) => { throw new TypeError(`${x} does not have a method named "${method}"`); }

export const invoker =
  (n, method) =>
    curry(
      (...args) =>
        isNil(last(args))              ? throwError(last(args), method) :
        isFunction(last(args)[method]) ? last(args)[method](...init(args))
                                       : throwError(toString(last(args)), method),
      n + 1
    )
