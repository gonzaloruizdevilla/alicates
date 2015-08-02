import {curry} from '../functional/curry';
import {reduce} from '../list/reduce';
import {map} from '../list/map';

export const project =
  curry(
    (props, xs) => map(
      x => reduce(
        (acc, prop) => (acc[prop] = x[prop], acc),
        {},
        props
      ),
      xs
    )
  );
