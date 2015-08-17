import {curry} from '../functional/curry';
import {reduced} from './reduced';
import {Base} from '../transducer/Base';
import {isTransducer} from '../type/isTransducer';

class Taker extends Base {
  constructor(n, xf){
    super();
    this.max = n;
    this.pos = 0;
    this.xf = xf;
  }
  '@@transducer/step'(result, input) {
    this.pos = this.pos + 1;
    return this.pos <= this.max ? this.xf['@@transducer/step'](result, input)
                               : reduced(result);
   }
}

 const _take =
   (n, arr) =>
     typeof arr === 'string' ? arr.substr(0, (n < 0 ? undefined : n))
                             : arr.slice(0, (n < 0 ? undefined : n));

export const take =
  curry(
    (n, xf) =>
      isTransducer(xf)     ? (new Taker(n, xf))
                           : _take(n, xf)
  );
