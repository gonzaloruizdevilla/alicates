import {Base}  from '../transducer/Base';
import {curry} from '../functional/curry';
import {isTransformer} from '../type/isTransformer';
import {reduce} from './reduce';
import {slice} from './slice';

class AdjustXf extends Base {
  constructor(fn, n, xf) {
    super();
    this.fn = fn;
    this.n = Math.abs(n);
    this.xf = xf;
    this.pos = 0;
    this.storage = (n < 0) ? [] : null;
  }
  '@@transducer/step'(result, input) {
    if (this.storage) {
      if (this.storage.length === this.n) {
        result = this.xf['@@transducer/step'](result, this.storage.shift());
      }
      this.storage.push(input);
    } else {
      if (this.pos === this.n) {
        result = this.xf['@@transducer/step'](result, this.fn(input));
      } else {
        result = this.xf['@@transducer/step'](result, input);
      }
    }
    this.pos += 1;
    return result;
  }
  '@@transducer/result'(result) {
    let step = this.xf['@@transducer/step'].bind(this);
    if (this.storage) {
      if (this.storage.length === this.n) {
        result = this.xf['@@transducer/step'](result, this.fn(this.storage.shift()));
      }
      result = reduce(step, result, this.storage);
    }
    return this.xf['@@transducer/result'](result);

  }
}

const _adjust =
  (fn, pos, xs) =>
    (pos >= xs.length || pos < -xs.length) ? xs :
    pos < 0                                ? [...slice(0, pos, xs), fn(xs[xs.length + pos]), ...slice(pos + 1, Infinity, xs)]
                                           : [...slice(0, pos, xs), fn(xs[pos]), ...slice(pos + 1, Infinity, xs)];


export const adjust =
  curry(
    (fn, pos, xf) => isTransformer(xf) ? new AdjustXf(fn, pos, xf)
                                       : _adjust(fn, pos, xf)
  );
