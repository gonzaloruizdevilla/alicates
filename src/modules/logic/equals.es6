import {curry} from '../functional/curry';
import {all} from '../list/all';
import {find} from '../list/find';
import {map} from '../list/map';
import {hasMethod} from '../object/hasMethod';
import {isArray, isDate, isFunction, isObject, isRegExp} from '../type';

let _equals;

const isHashMap =
  a =>
    isObject(a) && !isArray(a) && !isRegExp(a) && !isDate(a);

const getPropertiesKeys = (o) => {
  const keys = new Set();
  for (let key in o) {
    if (!isFunction(o[key])) {
      keys.add(key);
    }
  }
  return keys;
};

const equalHashMaps = (a, b) => {
  const aKeys = getPropertiesKeys(a);
  const bKeys = getPropertiesKeys(b);
  return aKeys.size === bKeys.size && all(
      key => aKeys.has(key) && _equals(a[key], b[key]),
      bKeys
    );
};

const isMap = a => a instanceof Map;



const equalMaps = (a, b) => {
  if (a.size !== b.size) return false;
  const compareKeysAndValues =
    ([keyA, keyB]) => keyB && _equals(a.get(keyA), b.get(keyB));
  const keys = map(
    aKey => [aKey, find(key => _equals(key, aKey), b.keys())],
    a.keys()
  );
  if (keys.length < a.size) return false;
  return all(compareKeysAndValues, keys);
}

const equalObjects = (a, b) =>  isArray(a)    ? (isArray(b)    && equalHashMaps(a, b)) :
                                isRegExp(a)   ? (isRegExp(b)   && a.toString() === b.toString() && equalHashMaps(a, b)) :
                                isDate(a)     ? (isDate(b)     && _equals(a.getTime(),b.getTime()) && equalHashMaps(a, b)) :
                                isMap(a)      ? (isMap(b)      && equalMaps(a,b)) :
                                !isHashMap(b) ? false
                                              : equalHashMaps(a, b);

const differnciateZeroes =
  (a, b) => a === 0 ? (1 / a === 1 / b)
                    : true;

_equals = (a,b) =>
  a === b                            ? differnciateZeroes(a,b)  :
  a === null || b === null           ? false :
  (a !== a && b !== b)               ? true  : //NaN !== NaN =>  true
  hasMethod('equals', a)             ? a.equals(b) :
  hasMethod('equals', b)             ? b.equals(a)
                                     : isObject(a) && isObject(b) && equalObjects(a, b);

export const equals =  curry(_equals);
