import {cons, Cons, Nil}  from '../list/list';
import {createMapEntry} from '../object/createMapEntry';
import {identity} from '../functional/identity';
import {isArrayLike} from '../type/isArrayLike';
import {isTransformer} from '../type/isTransformer';
import {merge} from '../object/merge';

const arrayXf =
  init =>
    ({
      '@@transducer/init': () =>  [...init],
      '@@transducer/step': (result, input)  => (result[result.length] = input, result),
      '@@transducer/result': identity
    });

const listXf =
  list =>
    ({
      '@@transducer/init': () => list,
      '@@transducer/step': (result, input)  => cons(input, result),
      '@@transducer/result': identity
    });

const stringXf =
  init =>
    ({
      '@@transducer/init': () => init,
      '@@transducer/step': function(a, b) { return a + b; },
      '@@transducer/result': identity
    });

const objectXf = {
  '@@transducer/init': Object,
  '@@transducer/step': function(result, input) {
    return merge(
      result,
      isArrayLike(input) ? createMapEntry(input[0], input[1]) : input
    );
  },
  '@@transducer/result': identity
};

const throwError = (obj) => {throw new Error('Cannot create transformer for ' + obj);};

const isList =
  obj =>
    obj instanceof Cons || obj === Nil;

export const xfFor =
  obj =>
    isTransformer(obj)          ? obj :
    isArrayLike(obj)            ? arrayXf(obj) :
    isList(obj)                 ? listXf(obj) :
    (typeof obj === 'string')   ? stringXf(obj) :
    (typeof obj === 'object')   ? objectXf
                                : throwError();
