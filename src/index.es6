import * as functional from './modules/functional';
import * as functor    from './modules/functor';
import * as list       from './modules/list';
import * as logic      from './modules/logic';
import * as math       from './modules/math';
import * as object     from './modules/object';
import * as relation   from './modules/relation';
import * as string     from './modules/string';
import * as type       from './modules/type';

export default Object.assign(
  {},
  functional,
  functor,
  list,
  logic,
  math,
  object,
  relation,
  string,
  type
);
