import {curry} from '../functional/curry';
import {map} from '../list/map';
import {reduce} from '../list/reduce';

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
