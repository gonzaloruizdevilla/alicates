import {Base} from '../transducer/Base';
import {curry} from '../functional/curry';
import {hasMethod} from '../object/hasMethod';
import {into} from './into';
import {isTransformer} from '../type/isTransformer';

class Filterer extends Base{
  constructor(fn, xf) {
    super();
    this.f = fn;
    this.xf = xf;
  }
  '@@transducer/step'(result, input) {
    return (this.f(input)) ? this.xf['@@transducer/step'](result, input) : result;
  }
}

export
  const filter = curry(
    (fn, xf) =>
      hasMethod('filter', xf) ? xf.filter(fn) :
      isTransformer(xf)       ? (new Filterer(fn, xf))
                              : into([], filter(fn), xf)
  );
