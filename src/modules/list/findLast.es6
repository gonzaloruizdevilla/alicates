import {curry} from '../functional/curry';
import {isTransformer} from '../type/isTransformer';

class IndexFinder {
  constructor(fn, xf) {
    this.pos = -1;
    this.result = undefined;
    this.xf = xf;
    this.f = fn;
  }
  '@@transducer/step'(result, input) {
    this.pos += 1;
    this.result = this.f(input) ? input : this.result;
    return result;
  }
  '@@transducer/result'(result) {
    result = this.xf['@@transducer/step'](result, this.result);
    return this.xf['@@transducer/result'](result);
  }
}


const _findLast =
  (fn, xs, pos) =>
    pos === -1  ? undefined :
    fn(xs[pos]) ? xs[pos]
                : _findLast(fn, xs, pos - 1);

export const findLast =
  curry(
    (fn, xf) =>
      isTransformer(xf) ? new IndexFinder(fn, xf)
                        : _findLast(fn, xf, xf.length - 1)
  );
