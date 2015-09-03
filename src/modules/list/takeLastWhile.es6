import {Base}         from '../transducer/Base';
import {curry}        from '../functional/curry';
import {isTransformer} from '../type/isTransformer';
import {reduce}       from './reduce';
import {slice}        from './slice';


class LastWhileTaker extends Base {
  constructor(fn, xf) {
    super();
    this.fn = fn;
    this.xf = xf;
    this.storage = [];
  }
  '@@transducer/step'(result, input) {
    if (this.fn(input)) {
      this.storage[this.storage.length] = input;
    } else {
      this.storage.length = 0;
    }
    return result;
  }
  '@@transducer/result'(result) {
    let step = this.xf['@@transducer/step'].bind(this);
    return reduce(
      step,
      result,
      this.storage
    );
  }
  lastElements() {
    return this.moreThanN ? [ ...slice(this.pos, this.n, this.storage), ...slice(0, this.pos, this.storage) ]
                          : slice(0, this.pos, this.storage);
  }
}

const _takeLastWhile =
  (fn, xs, pos) =>
    (pos === -1) ? xs :
    fn(xs[pos])  ? _takeLastWhile(fn, xs, pos - 1)
                 : xs.slice(pos + 1, Infinity);

export const takeLastWhile =
  curry(
    (fn, xf) =>
      isTransformer(xf) ? (new LastWhileTaker(fn, xf))
                        : _takeLastWhile(fn, xf, xf && xf.length - 1)
  );
