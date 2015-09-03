import {curry} from '../functional/curry';
import {into} from './into';
import {Base} from '../transducer/Base';
import {reduce} from './reduce';
import {isTransformer} from '../type/isTransformer';
import {keys} from '../object/keys';

class Grouper extends Base{
  constructor(fn, xf) {
    super();
    this.xf = xf;
    this.f = fn;
    this.values = {};
  }
  '@@transducer/result'(result) {
    let step =
      (acc, key) =>
        this.xf['@@transducer/step'](acc, this.values[key]);

    result = reduce(
      step,
      result,
      keys(this.values)
    );
    return this.xf['@@transducer/result'](result);
  }
  '@@transducer/step'(result, input) {
    let key = this.f(input);
    var pair = this.values[key] = this.values[key] || [key,[]];
    pair[1][pair[1].length] = input;
    return result;
  }
}

export
  const groupBy = curry(
    (fn, xf) =>
      isTransformer(xf)       ? (new Grouper(fn, xf))
                              : into({}, groupBy(fn), xf)
  );
