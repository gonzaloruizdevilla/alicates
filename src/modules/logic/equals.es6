import {curry} from '../functional/curry'
import {all, zip} from '../list'

let _equals;

const isTypeObject = a => typeof a === 'object';
const hasMethod = (name, a) => !!a && typeof a[name] === 'function';

const isArray = Array.isArray;
const isFunction = a => typeof a === 'function';
const isRegExp = a => toString.call(a) === '[object RegExp]';
const isDate =   a => toString.call(a) === '[object Date]';
const isMap = a => isTypeObject(a) && !isArray(a) && !isRegExp(a) && !isDate(a);

const equalArrays = (a,b) => a.length === b.length && all(([x,y]) => _equals(x,y), zip(a,b));


const getPropertiesKeys = (o) => {
  const keys = new Set()
  for(let key in o) {
    if(!isFunction(o[key]))
      keys.add(key);
  }
  return keys;
}


const equalMaps = (a, b) => {
  const aKeys = getPropertiesKeys(a);
  const bKeys = getPropertiesKeys(b);
  return aKeys.size === bKeys.size && all(
      (key) => aKeys.has(key) && _equals(a[key], b[key]),
      bKeys
    );
};

const equalObjects = (a, b) =>  isArray(a)   ? (isArray(b)    && equalArrays(a, b)) :
                                isRegExp(a)  ? (isRegExp(b)   && a.toString() === b.toString()) :
                                isDate(a)    ? (isDate(b)     && _equals(a.getTime(),b.getTime())) :
                                !isMap(b)    ? false
                                             : equalMaps(a, b);

_equals = (a,b) =>
  a === b                            ? true  :
  a === null || b === null           ? false :
  (a !== a && b !== b)               ? true  : //NaN !== NaN =>  true
  hasMethod('equals', a)             ? a.equals(b) :
  hasMethod('equals', b)             ? b.equals(a)
                                     : isTypeObject(a) && isTypeObject(b) && equalObjects(a, b);

export const equals =  curry(_equals);
