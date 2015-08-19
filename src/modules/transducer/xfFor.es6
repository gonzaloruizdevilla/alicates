import {identity} from '../functional/identity';
import {merge} from '../object/merge';
import {isTransducer} from '../type/isTransducer';
import {isArrayLike} from '../type/isArrayLike';
import {createMapEntry} from '../object/createMapEntry';
import {cons, Cons, Nil, toArray}  from '../list/list';

const arrayXf = {
  '@@transducer/init': () =>  Nil,
  '@@transducer/step': (result, input)  => cons(input, result),
  '@@transducer/result': toArray
};

const listXf =
  list =>
    ({
      '@@transducer/init': () => list,
      '@@transducer/step': (result, input)  => cons(input, result),
      '@@transducer/result': identity
    });

const stringXf = {
  '@@transducer/init': String,
  '@@transducer/step': function(a, b) { return a + b; },
  '@@transducer/result': identity
};

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
    isTransducer(obj)           ? obj :
    isArrayLike(obj)            ? arrayXf :
    isList(obj)                 ? listXf(obj) :
    (typeof obj === 'string')   ? stringXf :
    (typeof obj === 'object')   ? objectXf
                                : throwError();
