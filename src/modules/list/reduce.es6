import {curry} from '../functional/curry';
import {isArrayLike} from '../type/isArrayLike';
import {isFunction} from '../type/isFunction';
import {hasMethod} from '../object/hasMethod';

class XfWrap {
  constructor(fn){
    this.f = fn;
  }
  '@@transducer/init'() {
    throw new Error('init not implemented on XWrap');
  }
  '@@transducer/result'(acc) {
    return acc;
  }
  '@@transducer/step'(acc, x) {
    return this.f(acc, x);
  }
}


const arrayReduce =
  (xf, acc, [x, ...arr], length) =>
    acc && acc['@@transducer/reduced'] ? acc['@@transducer/value'] :
    length === 0                       ? xf['@@transducer/result'](acc)
                                       : arrayReduce(xf, xf['@@transducer/step'](acc, x), arr, length - 1);

export
  const reduce = curry(
    (fn, acc, arr) =>
      (
        fn = isFunction(fn) ? new XfWrap(fn) : fn,

        isArrayLike(arr)          ? arrayReduce(fn, acc, arr, arr.length) :
        hasMethod('reduce', arr)  ? arr.reduce(fn, acc)
                                  : null
      )

  );
