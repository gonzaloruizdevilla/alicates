import {Base} from '../transducer/Base';
import {curry} from '../functional/curry';
import {into} from './into';
import {isTransformer} from '../type/isTransformer';

class WhileDropper extends Base {
  constructor(fn, xf) {
    super();
    this.dropping = true;
    this.f = fn;
    this.xf = xf;
  }
  '@@transducer/step'(result, input) {
    return this.dropping && (this.dropping = this.f(input)) ? result
                                                            : this.xf['@@transducer/step'](result, input);
  }
}

export
  const dropWhile = curry(
    (fn, xf) =>
      isTransformer(xf) ? (new WhileDropper(fn, xf))
                        : into([], dropWhile(fn), xf)
  );
