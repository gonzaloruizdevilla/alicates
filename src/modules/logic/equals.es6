import {curry} from '../functional/curry';
import {all, zip} from '../list';
import {hasMethod} from '../object/hasMethod';
import {isArray, isDate, isFunction, isObject, isRegExp} from '../type';

let _equals;

const isMap = a => isObject(a) && !isArray(a) && !isRegExp(a) && !isDate(a);

const equalArrays = (a,b) => a.length === b.length && all(([x,y]) => _equals(x,y), zip(a,b));

const getPropertiesKeys = (o) => {
  const keys = new Set();
  for(let key in o) {
    if(!isFunction(o[key]))
      keys.add(key);
  }
  return keys;
};

const equalMaps = (a, b) => {
  const aKeys = getPropertiesKeys(a);
  const bKeys = getPropertiesKeys(b);
  return aKeys.size === bKeys.size && all(
      key => aKeys.has(key) && _equals(a[key], b[key]),
      bKeys
    );
};

const equalObjects = (a, b) =>  isArray(a)   ? (isArray(b)    && equalArrays(a, b)) :
                                isRegExp(a)  ? (isRegExp(b)   && a.toString() === b.toString()) :
                                isDate(a)    ? (isDate(b)     && _equals(a.getTime(),b.getTime())) :
                                !isMap(b)    ? false
                                             : equalMaps(a, b);

const differnciateZeroes =
  (a, b) => a === 0 ? (1/a === 1/b)
                    : true;

_equals = (a,b) =>
  a === b                            ? differnciateZeroes(a,b)  :
  a === null || b === null           ? false :
  (a !== a && b !== b)               ? true  : //NaN !== NaN =>  true
  hasMethod('equals', a)             ? a.equals(b) :
  hasMethod('equals', b)             ? b.equals(a)
                                     : isObject(a) && isObject(b) && equalObjects(a, b);

export const equals =  curry(_equals);
