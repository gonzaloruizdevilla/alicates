import {curry} from '../functional/curry';
import {isTransformer} from '../type/isTransformer';

class LastIndexFinder {
  constructor(fn, xf) {
    this.f = fn;
    this.lastPos = -1;
    this.pos = -1;
    this.xf = xf;
  }
  '@@transducer/step'(result, input) {
    this.pos += 1;
    this.lastPos = this.f(input) ? this.pos : this.lastPos;
    return result;
  }
  '@@transducer/result'(result) {
    result = this.xf['@@transducer/step'](result, this.lastPos);
    return this.xf['@@transducer/result'](result);
  }
}


const _findLastIndex =
  (fn, xs, pos) =>
    pos === -1  ? -1 :
    fn(xs[pos]) ? pos
                : _findLastIndex(fn, xs, pos - 1);

export const findLastIndex =
  curry(
    (fn, xf) =>
      isTransformer(xf) ? new LastIndexFinder(fn, xf)
                        : _findLastIndex(fn, xf, xf.length - 1)
  );
