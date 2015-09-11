import {Base} from '../transducer/Base';
import {curry} from '../functional/curry';
import {isTransformer} from '../type/isTransformer';
import {reduced} from './reduced';
import {reduce} from './reduce';


class AllXf extends Base {
  constructor(fn, xf){
    super();
    this.fn = fn;
    this.xf = xf;
    this.all = true;
  }
  '@@transducer/step'(result, input) {
    if(!this.fn(input)) {
      this.all = false;
      result = this.xf['@@transducer/step'](result, this.all);
      return reduced(result);
    }
    return result;
  }
  '@@transducer/result'(result){
    if(this.all) {
      result = this.xf['@@transducer/step'](result, true);
    }
    return this.xf['@@transducer/result'](result);
  }
}

const _all =
  (fn, xs) =>
    reduce(
      (acc, x) => fn(x) ? true : reduced(false),
      true,
      xs
  );

export
  const all = curry(
    (fn, xf) => isTransformer(xf) ? new AllXf(fn, xf)
                                  : _all(fn, xf)
  );
