import {curry} from '../functional/curry';
import {into} from './into';
import {Base} from '../transducer/Base';
import {isTransducer} from '../type/isTransducer';

class DropWhileFilter extends Base {
  constructor(fn, xf) {
    super();
    this.dropping = true;
    this.xf = xf;
    this.f = fn;
  }
  '@@transducer/step'(result, input) {
    return this.dropping && (this.dropping = this.f(input)) ? result
                                                            : this.xf['@@transducer/step'](result, input);
  }
}

export
  const dropWhile = curry(
    (fn, xf) =>
      isTransducer(xf) ? (new DropWhileFilter(fn, xf))
                       : into([], dropWhile(fn), xf)
  );
