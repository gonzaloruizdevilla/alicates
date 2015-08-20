import {curry} from '../functional/curry';
import {into} from './into';
import {Base} from '../transducer/Base';
import {isTransducer} from '../type/isTransducer';

class DropRepeatsWithFilter extends Base{
  constructor(fn, xf){
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
      isTransducer(xf)        ? (new DropRepeatsWithFilter(fn, xf))
                              : into([], dropRepeatsWith(fn), xf)
  );
