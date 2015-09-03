import {Base}         from '../transducer/Base';
import {curry}        from '../functional/curry';
import {into}         from './into';
import {isTransformer} from '../type/isTransformer';
import {reduced}      from './reduced';

class TakerWhile extends Base {
  constructor(fn, xf) {
    super();
    this.fn = fn;
    this.xf = xf;
  }
  '@@transducer/step'(result, input) {
    return this.fn(input) ? this.xf['@@transducer/step'](result, input)
                          : reduced(this.xf['@@transducer/result'](result));
  }
}

export const takeWhile =
  curry(
    (fn, xf) => isTransformer(xf) ? (new TakerWhile(fn, xf))
                                  : into([], takeWhile(fn), xf)
  );
