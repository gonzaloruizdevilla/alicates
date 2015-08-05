import {identity} from '../functional/identity';
import {concat} from '../list/concat';
import {merge} from '../object/merge';
import {isTransducer} from '../type/isTransducer';
import {isArrayLike} from '../type/isArrayLike';
import {createMapEntry} from '../object/createMapEntry';

const arrayXf = {
  '@@transducer/init': Array,
  '@@transducer/step': function(xs, x) { return concat(xs, [x]); },
  '@@transducer/result': identity
};
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

export const xfFor =
  obj =>
    isTransducer(obj)           ? obj :
    isArrayLike(obj)            ? arrayXf :
    (typeof obj === 'string')   ? stringXf :
    (typeof obj === 'object')   ? objectXf
                                : throwError();
