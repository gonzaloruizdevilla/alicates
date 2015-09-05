import {curry} from '../functional/curry';
import {into} from './into';
import {Base} from '../transducer/Base';
import {isTransformer} from '../type/isTransformer';

class RepeatsWithDropper extends Base{
  constructor(fn, xf) {
    super();
    this.dropping = true;
    this.xf = xf;
    this.f = fn;
    this.lastInput = undefined;
  }
  '@@transducer/step'(result, input) {
    let filter = this.f(this.lastInput, input);
    this.lastInput = input;
    return filter ? result
                  : this.xf['@@transducer/step'](result, input);
  }
}

export
  const dropRepeatsWith = curry(
    (fn, xf) =>
      isTransformer(xf) ? (new RepeatsWithDropper(fn, xf))
                        : into([], dropRepeatsWith(fn), xf)
  );
