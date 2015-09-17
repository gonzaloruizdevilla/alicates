import {Base} from '../transducer/Base';
import {curry} from '../functional/curry';
import {isTransformer} from '../type/isTransformer';
import {reduced} from './reduced';
import {reduce} from './reduce';

class AnyXf extends Base {
  constructor(fn, xf){
    super();
    this.any = false;
    this.fn = fn;
    this.xf = xf;
  }
  '@@transducer/step'(result, input) {
    if(this.fn(input)) {
      this.any = true;
      result = this.xf['@@transducer/step'](result, this.any);
      return reduced(result);
    }
    return result;
  }
  '@@transducer/result'(result){
    if(!this.any) {
      result = this.xf['@@transducer/step'](result, false);
    }
    return this.xf['@@transducer/result'](result);
  }
}


const _any =
  (fn, xs) =>
    reduce(
      (acc, x) => fn(x) ? reduced(true) : false,
      false,
      xs
    );

export
  const any = curry(
    (fn, xf) => isTransformer(xf) ? new AnyXf(fn, xf)
                                  : _any(fn, xf)
  );
