import {into} from './into';
import {Base} from '../transducer/Base';
import {isTransducer} from '../type/isTransducer';
import {isArrayLike} from '../type/isArrayLike';
import {Cons, Nil} from '../list/list';

let _flatten;

class Flattener extends Base {
  constructor(xf){
    super();
    this.xf = xf;
  }
  '@@transducer/step'(result, input) {
    return isArrayLike(input) ? into(result, _flatten, input)
                                    : this.xf['@@transducer/step'](result, input);
  }
}

_flatten =
   xf =>
     isTransducer(xf) ? new Flattener(xf)
                      : into([], _flatten, xf);

export const flatten = _flatten;
