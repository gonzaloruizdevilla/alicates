import {curry} from '../functional/curry';
import {into} from './into';
import {isTransformer} from '../type/isTransformer';

class Xf {
  constructor(step, init) {
    this['@@transducer/step'] = this['@@transducer/step'].bind(this);
    this.init = init;
    this.step = isTransformer(step) ? step['@@transducer/step']
                                    : step;
  }
  '@@transducer/init'() {
    return this.init;
  }
  '@@transducer/result'(result) {
    return result;
  }
  '@@transducer/step'(result, input) {
    return this.step(result, input);
  }
}

export const transduce =
  curry(
    (tx, fn, init, xs) => into(new Xf(fn, init), tx, xs)
  );
