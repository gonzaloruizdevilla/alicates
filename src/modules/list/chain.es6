import {reduce} from './reduce';
import {isArrayLike} from '../type/isArrayLike';
import {into} from './into';
import {hasMethod} from '../object/hasMethod';
import {curry} from '../functional/curry';
import {isTransducer} from '../type/isTransducer';
import {Base} from '../transducer/Base';

class Chainer extends Base {
  constructor(fn, xf) {
    super();
    this.xf = xf;
    this.f = fn;
  }
  valueStep(result, value) {
    return isArrayLike(value) ? this.arrayStep(result, value)
                              : this.elementStep(result, value) ;
  }
  arrayStep(result,value) {
    return reduce(
      this.xf['@@transducer/step'].bind(this.xf),
      result,
      value
    );
  }
  elementStep(result, value) {
    return this.xf['@@transducer/step'](result, value);
  }
  '@@transducer/step'(result, input) {
    return this.valueStep(result, this.f(input));
  }
}

export const chain =
  curry(
    (fn, xf) =>
        hasMethod('chain', xf) ? xf.chain(fn) :
        isTransducer(xf)       ? new Chainer(fn, xf)
                               : into([], chain(fn), xf)
  );
