import {Base}         from '../transducer/Base';
import {curry}        from '../functional/curry';
import {isTransformer} from '../type/isTransformer';
import {range}        from './range';
import {reduce}       from './reduce';
import {slice}        from './slice';

class Aperturer extends Base {
  constructor(n, xf) {
    super();
    this.n = n;
    this.store = [];
    this.xf = xf;
  }
  '@@transducer/step'(result, input) {
    if (this.hasNStored()) {
      this.store.shift();
    }
    this.store.push(input);
    return this.hasNStored() ? this.xf['@@transducer/step'](result, [...this.store])
                             : result;
  }
  hasNStored() {
    return this.store.length === this.n;
  }
}

const _aperture =
  (n, xs) =>
    reduce(
      (acc, m) => (acc[m] = slice(m, m + n, xs), acc),
      [],
      range(0, xs.length - n + 1)
    );

export const aperture =
  curry(
    (n, xf) => isTransformer(xf) ? new Aperturer(n, xf) :
               n > xf.length    ? []
                                : _aperture(n, xf)
  );
