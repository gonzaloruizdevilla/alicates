import {curry} from '../functional/curry';
import {slice} from './slice';
import {Base} from '../transducer/Base';
import {reduce} from './reduce';
import {cons, Nil, toArray} from './list';
import {isTransformer} from '../type/isTransformer';

const _dropLast =
  (n, xs) =>
    n < -1  ? xs
            : slice(0, xs.length - n, xs);

class LastDropper extends Base {
  constructor(n, xf) {
    super();
    this.retained = Nil;
    this.xf = xf;
    this.n = n;
  }
  '@@transducer/step'(result, input) {
    return this.retain(result, input);
  }
  '@@transducer/result'(result) {
    return this.xf['@@transducer/result'](this.flush(result));
  }
  flush(result) {
    let retained = toArray([], this.retained);
    result = reduce(
      (result, value) => this.xf['@@transducer/step'].bind(this)(result, value),
      result,
      _dropLast(this.n, retained)
    );
    return result;
  }
  retain(result, input) {
    this.retained = cons(input, this.retained);
    return result;
  }
}

export const dropLast =
  curry(
    (n, xf) =>
      isTransformer(xf) ? new LastDropper(n, xf)
                        : _dropLast(n, xf)
  );
