import {curry} from '../functional/curry';
import {isTransducer} from '../type/isTransducer';

class LastIndexFinder{
  constructor(fn, xf){
    this.pos = -1;
    this.lastPos = -1;
    this.xf = xf;
    this.f = fn;
  }
  '@@transducer/step'(result, input) {
    this.pos += 1;
    this.lastPos = this.f(input) ? this.pos : this.lastPos;
    return result;
  }
  '@@transducer/result'(result){
    result = this.xf['@@transducer/step'](result, this.lastPos);
    return this.xf['@@transducer/result'](result);
  }
}


const _findLastIndex =
  (fn, xs, pos) =>
    pos === -1  ? -1 :
    fn(xs[pos]) ? pos
                : _findLastIndex(fn, xs, pos -1);

export const findLastIndex =
  curry(
    (fn, xf) =>
      isTransducer (xf) ? new LastIndexFinder(fn, xf)
                        : _findLastIndex(fn, xf, xf.length -1)
  );
