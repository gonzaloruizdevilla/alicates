import {Base} from '../transducer/Base';
import {curryN} from '../functional/curryN';
import {hasMethod} from '../object/hasMethod';
import {into} from './into';
import {isFunction} from '../type/isFunction';
import {isTransformer} from '../type/isTransformer';


class Mapper extends Base {
  constructor(fn, xf) {
    super();
    this.f = fn;
    this.xf = xf;
  }
  '@@transducer/step'(result, input) {
    return this.xf['@@transducer/step'](result, this.f(input));
  }
}

const composeFunctors =
  (fn, functor) =>
    curryN(
      functor.length,
      function(...args) {
        return fn.call(this, functor.call(this, ...args));
      }
    );

export const map =
  curryN(
    2,
    (fn, xf) =>
      hasMethod('map', xf) ? xf.map(fn) :
      isFunction(xf)       ? composeFunctors(fn, xf) :
      isTransformer(xf)    ? (new Mapper(fn, xf))
                           : into([], map(fn), xf)
    );
