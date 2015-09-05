import {curry} from '../functional/curry';
import {isIterable} from '../type/isIterable';
import {isTransformer} from '../type/isTransformer';
import {reduced} from './reduced';

class Finder {
  constructor(fn, xf) {
    this.pos = -1;
    this.xf = xf;
    this.f = fn;
  }
  '@@transducer/step'(result, input) {
    this.pos += 1;
    if (this.f(input)) {
      result = this.xf['@@transducer/step'](result, input);
      return reduced(this.xf['@@transducer/result'](result));
    }
    return result;
  }
  '@@transducer/result'(result) {
    result = this.xf['@@transducer/step'](result, undefined);
    return this.xf['@@transducer/result'](result);
  }
}


const _find =
  (fn, xs, pos) =>
    pos >= xs.length ? undefined :
    fn(xs[pos])      ? xs[pos]
                     : _find(fn, xs, pos + 1);

const _findIterable =
 (fn, iter) => {
   let {value, done} = iter.next();
   return done      ? undefined :
          fn(value) ? value
                    : _findIterable(fn, iter);
 }

export const find =
  curry(
    (fn, xf) =>
      isTransformer(xf) ? new Finder(fn, xf) :
      isIterable(xf)    ? _findIterable(fn, xf[Symbol.iterator]())
                        : _find(fn, xf, 0)
  );
