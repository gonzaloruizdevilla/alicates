import {equals} from '../logic/equals';
import {path} from '../object/path';

export const pathEq =
  (props, value, obj) =>
    equals(
      value,
      path(props, obj)
    );
