import {all} from '../list/all';
import {curry} from '../functional/curry';
import {find} from '../list/find';
import {hasMethod} from '../object/hasMethod';
import {isArray, isDate, isFunction, isObject, isRegExp} from '../type';


let _equals;

const isMap = a => a instanceof Map;
const isWeakMap = a => a instanceof WeakMap;
const isSet = a => a instanceof Set;
const isWeakSet = a => a instanceof WeakSet;
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

const equalHashMaps = (a, b, acc) => {
  const aKeys = getPropertiesKeys(a);
  const bKeys = getPropertiesKeys(b);
  acc.set(a, b);
  return aKeys.size === bKeys.size && all(
      key => aKeys.has(key) && _equals(a[key], b[key], acc),
      bKeys
    );
};

const equalMaps = (a, b, acc) =>
  (a.size === b.size) && all(
    ([aKey, aValue]) =>
      find(
        ([bKey, bValue]) => _equals(aKey, bKey, new Map(acc)) && _equals(aValue, bValue, acc),
        b.entries()
      ),
    a.entries()
  ) && (acc.set(a, b), true);

const equalObjects =
  (a, b, acc) =>
    acc.has(a)    ? (acc.get(a) === b) :
    isArray(a)    ? (isArray(b)   && equalHashMaps(a, b, acc)) :
    isRegExp(a)   ? (isRegExp(b)  && a.toString() === b.toString() && equalHashMaps(a, b, acc)) :
    isDate(a)     ? (isDate(b)    && _equals(a.getTime(),b.getTime()) && equalHashMaps(a, b, acc)) :
    isMap(a)      ? (isMap(b)     && equalMaps(a ,b, acc)) :
    isWeakMap(a)  ? (isWeakMap(b) && a === b) :
    isSet(a)      ? (isSet(b)     && equalMaps(a, b, acc)) :
    isWeakSet(a)  ? (isWeakSet(b) && a === b) :
    !isHashMap(b) ? false
                  : equalHashMaps(a, b, acc);

const differenciateZeroes =
  (a, b) => a === 0 ? (1 / a === 1 / b)
                    : true;

_equals =
  (a, b, acc) =>
    a === b                  ? differenciateZeroes(a,b)  :
    a === null || b === null ? false :
    (a !== a && b !== b)     ? true  : //NaN !== NaN =>  true
    hasMethod('equals', a)   ? a.equals(b) :
    hasMethod('equals', b)   ? b.equals(a)
                             : isObject(a) && isObject(b) && equalObjects(a, b, acc);

export const equals =
  curry(
    (a, b) => _equals(a,b, new Map())
  );
