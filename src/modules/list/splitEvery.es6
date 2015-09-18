import {Base}         from '../transducer/Base';
import {curry}        from '../functional/curry';
import {isTransformer} from '../type/isTransformer';
import {unfold}       from './unfold';

class Splitter extends Base {
  constructor(n, xf) {
    super();
    this.n = n;
    this.store = [];
    this.xf = xf;
  }
  '@@transducer/step'(result, input) {
    this.store[this.store.length] = input;
    if (this.store.length === this.n) {
      result = this.flush(result);
    }
    return result;
  }
  '@@transducer/result'(result) {
    return this.xf['@@transducer/result'](this.flush(result));
  }
  flush(result) {
    if (this.store.length) {
      result = this.xf['@@transducer/step'](result, this.store);
    }
    this.store = [];
    return result;
  }
}

const throwErrors = () => {throw new Error('First argument to splitEvery must be a positive integer');};

const _splitEvery =
  (n, xs) => unfold(
    seed => (seed.length > 0 ? [seed.slice(0, n), seed.slice(n)] : null),
    xs
  );

export const splitEvery =
  curry(
    (n, xf) => n <= 0            ? throwErrors() :
               isTransformer(xf) ? new Splitter(n, xf)
                                 : _splitEvery(n, xf)
  );
