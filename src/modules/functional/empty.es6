import {hasMethod} from '../object/hasMethod';
import {isArray} from '../type/isArray';
import {isObject} from '../type/isObject';
import {isString} from '../type/isString';

export const empty =
  x =>
    hasMethod('empty', x) ? x.empty() :
    isArray(x)            ? [] :
    isString(x)           ? '' :
    isObject(x)           ? {}
                          : null;
