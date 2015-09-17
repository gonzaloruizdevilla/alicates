import {Base} from '../transducer/Base';
import {curry} from '../functional/curry';
import {into} from './into';
import {isTransformer} from '../type/isTransformer';
import {keys} from '../object/keys';
import {reduce} from './reduce';

class Grouper extends Base{
  constructor(fn, xf) {
    super();
    this.f = fn;
    this.values = {};
    this.xf = xf;
  }
  '@@transducer/result'(result) {
    const step =
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
    const key = this.f(input);
    const pair = this.values[key] = this.values[key] || [key,[]];
    pair[1][pair[1].length] = input;
    return result;
  }
}

export
  const groupBy = curry(
    (fn, xf) =>
      isTransformer(xf) ? (new Grouper(fn, xf))
                        : into({}, groupBy(fn), xf)
  );
