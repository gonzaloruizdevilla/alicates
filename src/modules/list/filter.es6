import {curry} from '../functional/curry';
import {into} from './into';
import {Base} from '../transducer/Base';
import {hasMethod} from '../object/hasMethod';
import {isTransducer} from '../type/isTransducer';

class Filterer extends Base{
  constructor(fn, xf){
    super();
    this.xf = xf;
    this.f = fn;
  }
  '@@transducer/step'(result, input) {
     return (this.f(input)) ? this.xf['@@transducer/step'](result, input) : result;
   }
}

export
  const filter = curry(
    (fn, xf) =>
      hasMethod('filter', xf) ? xf.filter(fn) :
      isTransducer(xf)        ? (new Filterer(fn, xf))
                              : into([], filter(fn), xf)
  );
