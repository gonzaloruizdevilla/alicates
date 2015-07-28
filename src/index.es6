import * as functional from './modules/functional';
export const always = functional.always;
export const ap = functional.ap;
export const apply = functional.apply;
export const bind = functional.bind;
export const compose = functional.compose;
export const curry = functional.curry;
export const f = functional.f;
export const flip = functional.flip;
export const identity = functional.identity;
export const lift = functional.lift;
export const memoize = functional.memoize;
export const once = functional.once;
export const sequence = functional.sequence;
export const t = functional.t;
export const unapply = functional.unapply;
export const unary = functional.unary;
export const useWith = functional.useWith;
export const wrap = functional.wrap;

import * as logic from './modules/logic';
export const allPass = logic.allPass;
export const anyPass = logic.anyPass;
export const cond = logic.cond;
export const equals = logic.equals;
export const not = logic.not;
export const or = logic.or;
export const same = logic.same;

import * as list from './modules/list';
export const all = list.all;
export const any = list.any;
export const append = list.append;
export const concat = list.concat;
export const contains = list.contains;
export const difference = list.difference;
export const filter = list.filter;
export const head = list.head;
export const indexOf = list.indexOf;
export const init = list.init;
export const intersection = list.intersection;
export const groupBy = list.groupBy;
export const last = list.last;
export const map = list.map;
export const none = list.none;
export const pluck = list.pluck;
export const range = list.range;
export const reduce = list.reduce;
export const reduceRight = list.reduceRight;
export const repeat = list.repeat;
export const reverse = list.reverse;
export const slice = list.slice;
export const tail = list.tail;
export const take = list.take;
export const unfold = list.unfold;
export const union = list.union;
export const unionWith = list.unionWith;
export const uniq = list.uniq;
export const uniqBy = list.uniqBy;
export const uniqWith = list.uniqWith;
export const unnest = list.unnest;
export const update = list.update;
export const without = list.without;
export const xprod = list.xprod;
export const zip = list.zip;
export const zipObj = list.zipObj;
export const zipWith = list.zipWith;

import * as math from './modules/math';
export const add = math.add;
export const addAll = math.addAll;

import * as _type from './modules/type';
export const isDate = _type.isDate;
export const isRegExp = _type.isRegExp;
export const isFunction = _type.isFunction;
export const isObject = _type.isObject;
export const type = _type.type;

import * as string from './modules/string';
export const toString = string.toString;
export const toUpper = string.toUpper;
export const trim = string.trim;

import * as object from './modules/object';
export const keys = object.keys;
export const keysIn = object.keysIn;
export const mapObj = object.mapObj;
export const prop = object.prop;
export const values = object.values;
export const valuesIn = object.valuesIn;
export const where = object.where;
export const whereEq = object.whereEq;
