import {Base} from '../transducer/Base';
import {curry} from '../functional/curry';
import {isTransformer} from '../type/isTransformer';
import {reduced} from './reduced';
import {reduce} from './reduce';

class NoneXf extends Base {
  constructor(fn, xf){
    super();
    this.fn = fn;
    this.none = true;
    this.xf = xf;
  }
  '@@transducer/step'(result, input) {
    if(this.fn(input)) {
      this.none = false;
      result = this.xf['@@transducer/step'](result, this.none);
      return reduced(result);
    }
    return result;
  }
  '@@transducer/result'(result){
    if(this.none) {
      result = this.xf['@@transducer/step'](result, true);
    }
    return this.xf['@@transducer/result'](result);
  }
}


const _none =
  (fn, xs) =>
    reduce(
      (acc, x) => fn(x) ? reduced(false) : true,
      true,
      xs
    );

export
  const none = curry(
    (fn, xf) => isTransformer(xf) ? new NoneXf(fn, xf)
                                  : _none(fn, xf)
  );
