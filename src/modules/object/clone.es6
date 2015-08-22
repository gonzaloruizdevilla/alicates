import {curry} from '../functional/curry';
import {isArrayLike} from '../type/isArrayLike';
import {isDate} from '../type/isDate';
import {isObject} from '../type/isObject';
import {isRegExp} from '../type/isRegExp';
import {find} from '../list/find';
import {reduce} from '../list/reduce';
import {containsWith} from '../list/containsWith';
import {keysIn} from '../object/keysIn';

let _clone;

const get =
  (seen, seenkey) =>
    find(
      ([key, value]) => key === seenkey,
      seen
    )[1];

const has =
  (seen, key, s) =>
    containsWith(
      (key, [pairkey, value]) => key === pairkey,
      key,
      seen
    );

const addEntry =
  (seen, key, value) =>
    (seen.push([key, value]), value);

const cloneRegExp =
  (seen, re) =>
    addEntry(
      seen,
      re,
      new RegExp(
        re.source,
        (re.global     ? 'g' : '')  +
        (re.multiline  ? 'm' : '')  +
        (re.ignoreCase ? 'i' : '')
      )
    );

const cloneArray =
  (seen, x) =>
    reduce(
      (acc, element) => (acc.push(_clone(seen, element)), acc),
      addEntry(seen, x, []),
      x
    );

const cloneObj =
  (seen, x) =>
    reduce(
      (acc, key) => (acc[key] = _clone(seen, x[key]), acc),
      addEntry(seen, x, {}),
      keysIn(x)
    );

const isUndefined =
  x =>
    x === undefined;
const isNull =
  x =>
    x === null;

_clone =
  curry(
    (seen, x) =>
      isUndefined(x)  ? undefined :
      isNull(x)       ? null :
      !isObject(x)    ? x :
      has(seen, x)    ? get(seen, x) :
      isRegExp(x)     ? cloneRegExp(seen, x) :
      isDate(x)       ? (new Date(x.getTime())) :
      isArrayLike(x)  ? cloneArray(seen, x)
                      : cloneObj(seen, x)
  );

export const clone =
  x =>
    _clone([], x);
