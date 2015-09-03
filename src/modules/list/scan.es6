import {Base}         from '../transducer/Base';
import {curry}        from '../functional/curry';
import {into}         from './into';
import {isTransformer} from '../type/isTransformer';

class Scanner extends Base {
  constructor(fn, acc, xf) {
    super();
    this.fn = fn;
    this.acc = acc;
    this.xf = xf;
    this.first = true;
  }
  '@@transducer/step'(result, input) {
    result = this.firstTime(result);
    this.acc = this.fn(this.acc, input);
    return this.xf['@@transducer/step'](result, this.acc);
  }
  '@@transducer/result'(result) {
    result = this.firstTime(result);
    return this.xf['@@transducer/result'](result);
  }
  firstTime(result) {
    return this.first ? (this.first = false, this.xf['@@transducer/step'](result, this.acc))
                      : result;
  }
}

export const scan =
  curry(
    (fn, acc, xf) => isTransformer(xf) ? (new Scanner(fn, acc, xf))
                                       : into([], scan(fn, acc), xf)
  );
