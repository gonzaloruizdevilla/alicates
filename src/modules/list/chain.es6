import {reduce} from './reduce';
import {map} from './map';
import {concat} from './concat';
import {hasMethod} from '../object/hasMethod';
import {curry} from '../functional/curry';
import {isTransducer} from '../type/isTransducer';
import {Base} from '../transducer/Base';

class Chainer extends Base{
  constructor(fn, xf){
    super();
    this.xf = xf;
    this.f = fn;
  }
  '@@transducer/step'(result, input) {
    return reduce(
      this.xf['@@transducer/step'].bind(this.xf),
      result,
      this.f(input)
    );
  }
}

const _chain =
  (fn, xf) => concat(...map(fn, xf))


export const chain =
  curry(
    (fn, xf) =>
        hasMethod('chain', xf) ? xf.chain(fn) :
        isTransducer(xf)       ? new Chainer(fn, xf)
                               : _chain(fn, xf)
  );
