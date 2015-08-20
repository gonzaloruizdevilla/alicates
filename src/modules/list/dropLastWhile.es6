import {curry} from '../functional/curry';
import {slice} from './slice';
import {Base} from '../transducer/Base';
import {reduce} from './reduce';
import {cons, Nil, toArray} from './list';
import {isTransducer} from '../type/isTransducer';

class DropLastWhileFilter extends Base {
  constructor(fn, xf) {
    super();
    this.retained = Nil;
    this.xf = xf;
    this.f = fn;
  }
  flush(result, input) {
    result = reduce(
      (result, value) => this.xf['@@transducer/step'].bind(this)(result, value),
      result,
      toArray([], this.retained)
    );
    this.retained = Nil;
    return this.xf['@@transducer/step'](result, input);
  }
  retain(result, input) {
    this.retained = cons(input, this.retained);
    return result;
  }
  '@@transducer/step'(result, input) {
    return this.f(input) ? this.retain(result, input)
                         : this.flush(result, input);
  }
}


const _dropLastWhile =
  (fn, xs, pos) =>
    pos === -1  ? [] :
    fn(xs[pos]) ? _dropLastWhile(fn, xs, pos - 1)
                : slice(0, pos + 1, xs);

export const dropLastWhile =
  curry(
    (fn, xf) =>
      isTransducer (xf) ? new DropLastWhileFilter(fn, xf)
                        : _dropLastWhile(fn, xf, xf.length - 1)
  );
