import {curry} from '../functional/curry';
import {reduce} from './reduce';
import {Base} from '../transducer/Base';
import {hasMethod} from '../object/hasMethod';
import {isTransducer} from '../type/isTransducer';


class Mapper extends Base{
  constructor(fn, xf){
    super();
    this.xf = xf;
    this.f = fn;
  }
  '@@transducer/step'(result, input) {
     return this.xf['@@transducer/step'](result, this.f(input));
   }
}

const _map =
  (fn, xs) => reduce((acc, x) => [...acc, fn(x)], [], xs);

export const map =
  curry(
    (fn, xf) =>
      hasMethod('map', xf) ? xf.map(fn) :
      isTransducer(xf)     ? (new Mapper(fn, xf))
                           : _map(fn, xf)
    );
