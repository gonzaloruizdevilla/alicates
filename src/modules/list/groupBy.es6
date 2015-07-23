import {curry} from '../functional/curry';
import {reduce} from './reduce';

export const groupBy =
  curry((fn, arr) =>
    (key => (
      reduce(
        (acc, a) => (
          key = fn(a),
          (acc[key] = acc[key] || []).push(a),
          acc
        ),
        {},
        arr
      )
    ))()
  );
