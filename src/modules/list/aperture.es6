import {Base}         from '../transducer/Base';
import {curry}        from '../functional/curry';
import {isTransducer} from '../type/isTransducer';
import {range}        from './range';
import {reduce}       from './reduce';
import {slice}        from './slice';


class Aperturer extends Base {
  constructor(n, xf) {
    super();
    this.n = n;
    this.xf = xf;
    this.store = [];
  }
  hasNStored() {
    return this.store.length === this.n;
  }
  '@@transducer/step'(result, input) {
    if (this.hasNStored()) {
      this.store.shift();
    }
    this.store.push(input);
    return this.hasNStored() ? this.xf['@@transducer/step'](result, [...this.store])
                             : result;
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
    (n, xf) => isTransducer(xf) ? new Aperturer(n, xf) :
               n > xf.length    ? []
                                : _aperture(n, xf)
  );
