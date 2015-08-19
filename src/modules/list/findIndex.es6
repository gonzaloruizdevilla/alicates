import {curry} from '../functional/curry';
import {isTransducer} from '../type/isTransducer';
import {reduced} from './reduced';

class IndexFinder{
  constructor(fn, xf){
    this.pos = -1;
    this.xf = xf;
    this.f = fn;
  }
  '@@transducer/step'(result, input) {
    this.pos += 1;
    if (this.f(input)) {
      result = this.xf['@@transducer/step'](result, this.pos);
      return reduced(this.xf['@@transducer/result'](result));
    }
    return result;
  }
  '@@transducer/result'(result){
    result = this.xf['@@transducer/step'](result, -1);
    return this.xf['@@transducer/result'](result);
  }
}


const _findIndex =
  (fn, xs, pos) =>
    pos >= xs.length ? -1 :
    fn(xs[pos])      ? pos
                     : _findIndex(fn, xs, pos + 1);

export const findIndex =
  curry(
    (fn, xf) =>
      isTransducer (xf) ? new IndexFinder(fn, xf)
                        : _findIndex(fn, xf, 0)
  );
