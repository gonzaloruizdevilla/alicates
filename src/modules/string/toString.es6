import {cond, equals} from '../logic';
import {curry,t} from '../functional';
import {contains, filter, map} from '../list';
import {isObject} from '../type/isObject';
import {keys} from '../object/keys';

let _toString;

const recur = curry((seen, a) => contains(a, seen) ? '<Circular>' : _toString(seen, a));

const nAry = (fn, pos) => (...args) => fn(args[pos]);

const quote = a => '"' + a.replace(/"/g, '\\"') + '"';

const isNull = equals('[object Null]');
const nullToString = (seen,a) => 'null';

const isUndefined = equals('[object Undefined]');
const undefinedToString = () => 'undefined';

const isBoolean = equals('[object Boolean]');
const booleanToString =
  (seen, a) =>
    isObject(a) ?  'new Boolean(' + recur([...seen, a], a.valueOf()) + ')'
                : a.toString();

const isString = equals('[object String]');
const stringToString =
  (seen, a) =>
    isObject(a) ? 'new String(' + recur([...seen, a], a.valueOf()) + ')'
                 : quote(a);

const isNumber = equals('[object Number]');
const numberToString =
  (seen, a) =>
    isObject(a) ?  'new Number(' + recur([...seen, a], a.valueOf()) + ')'
                : (1/a) === -Infinity ? '-0'
                                      : a.toString();

const isDate = equals('[object Date]');
const dateToString = (seen, a) => 'new Date(' + quote(a.toISOString()) + ')';

const numeric = /^\d+$/;
const nonNumericKeys =
  a =>
    filter(prop => !numeric.test(prop), keys(a));

const mapPairs =
  (seen, a, keys) =>
    map(
      prop =>
        quote(prop) + ': ' + recur([...seen, a], a[prop]),
      keys
    );

const isArray =  equals('[object Array]');
const arrayToString =
  (seen, a) => '[' + map(recur([...seen, a]), a).concat(mapPairs(seen, a, nonNumericKeys(a))).join(', ') + ']';

const isArguments =  equals('[object Arguments]');
const argumentsToString =
  (seen, a) =>
    '(function() { return arguments; }(' +
    map(recur([...seen, a]), a).join(', ') +
    '))';

const selfToString =
  (seen, a) => a.toString();

const objectWithToString =
  a => typeof a.constructor === 'function' &&
       a.constructor.name !== 'Object' &&
       typeof a.toString === 'function' &&
       a.toString() !== '[object Object]';

const objectToString =
  (seen, a) =>
     '{' +  mapPairs(seen, a, keys(a)).join(', ') + '}';

_toString =
  (seen, a) => cond([
      [nAry(isNull, 2),             nullToString],
      [nAry(isUndefined, 2),        undefinedToString],
      [nAry(isBoolean, 2),          booleanToString],
      [nAry(isString, 2),           stringToString],
      [nAry(isNumber, 2),           numberToString],
      [nAry(isDate, 2),             dateToString],
      [nAry(isArray, 2),            arrayToString],
      [nAry(isArguments, 2),        argumentsToString],
      [nAry(objectWithToString, 1), selfToString],
      [t,                           objectToString]
    ]
  )(seen, a, Object.prototype.toString.call(a));

export const toString = (a) => _toString([], a);
