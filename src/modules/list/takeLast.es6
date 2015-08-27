import {Base}         from '../transducer/Base';
import {curry}        from '../functional/curry';
import {reduce}       from './reduce';
import {isTransducer} from '../type/isTransducer';
import {slice}        from './slice';

class LastTaker extends Base {
  constructor(n, xf) {
    super();
    this.n = n;
    this.xf = xf;
    this.storage = new Array(n);
    this.pos = 0;
    this.moreThanN = false;
  }
  '@@transducer/step'(result, input) {
    this.storage[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.n) {
      this.moreThanN = true;
      this.pos = 0;
    }
    return result;
  }
  '@@transducer/result'(result) {
    let step = this.xf['@@transducer/step'].bind(this);
    return reduce(
      step,
      result,
      this.lastElements()
    );
  }
  lastElements() {
    return this.moreThanN ? [ ...slice(this.pos, this.n, this.storage), ...slice(0, this.pos, this.storage) ]
                          : slice(0, this.pos, this.storage);
  }
}

const _takeLast =
  (n, xs) =>
    xs.slice(
      n < 0   ? 0 :
      n === 0 ? xs.length
              : -n
    );


export const takeLast =
  curry(
    (n, xf) =>
      isTransducer(xf) ? (new LastTaker(n, xf))
                       : _takeLast(n, xf)
  );
