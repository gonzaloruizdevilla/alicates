import {isArray} from './isArray';
import {isString} from './isString';
import {isFunction} from './isFunction';

const NODE_TYPE_ELEMENT = 1;

const isPositive =
  length => typeof length === 'number' && length > 0;

const startAndEnd =
  (length, obj) => 0 in obj && (length - 1) in obj;


export const isArrayLike =
  obj => {
    if (obj == null) {
      return false;
    }
    // Support: iOS 8.2 (not reproducible in simulator)
    // "length" in obj used to prevent JIT error (gh-11508)
    let length = 'length' in Object(obj) && obj.length;

    return (obj.nodeType === NODE_TYPE_ELEMENT && length) ? true :
           isString(obj)                                  ? false :
           isFunction(obj)                                ? false :
           isArray(obj)                                   ? true :
           length === 0                                   ? true :
           isPositive(length) && startAndEnd(length, obj) ? true
                                                          : false;
  }
