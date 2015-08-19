import {Base} from '../transducer/Base';
import {curry} from '../functional/curry';
import {empty} from '../functional/empty';
import {into} from './into';
import {isTransducer} from '../type/isTransducer';

class DropFilter extends Base{
  constructor(n, xf){
    super();
    this.xf = xf;
    this.n = n;
    this.count = 0;
  }
  '@@transducer/step'(result, input) {
    console.log('result', result);
    console.log('input', input);
    this.count += 1;
    return this.count <= this.n ? result
                                : this.xf['@@transducer/step'](result, input);
  }
}

export
  const drop = curry(
    (n, xf) =>
      isTransducer(xf)        ? (new DropFilter(n, xf))
                              : into(empty(xf), drop(n), xf)
  );
