import {Base} from '../transducer/Base';
import {curry} from '../functional/curry';
import {into} from './into';
import {isTransformer} from '../type/isTransformer';

class RepeatsWithDropper extends Base{
  constructor(fn, xf) {
    super();
    this.dropping = true;
    this.f = fn;
    this.lastInput = undefined;
    this.xf = xf;
  }
  '@@transducer/step'(result, input) {
    const filter = this.f(this.lastInput, input);
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
