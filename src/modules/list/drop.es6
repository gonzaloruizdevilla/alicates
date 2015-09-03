import {curry} from '../functional/curry';
import {slice} from './slice';
import {dropWhile} from './dropWhile';
import {isTransformer} from '../type/isTransformer';

const firstN =
  n => {
    let pos = 0;
    return () => (pos += 1, pos <= n);
  };

export
  const drop = curry(
    (n, xf) =>
      isTransformer(xf)       ? dropWhile(firstN(n), xf)
                              : slice(
                                  n < 0 ? 0 : n,
                                  Infinity, xf
                                )
  );
