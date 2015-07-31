import {curry} from '../functional/curry';
import {unfold} from './unfold';

const throwErrors = () => {throw new Error('First argument to splitEvery must be a positive integer')};

const _splitEvery =
  (n, xs) => unfold(
    seed => (seed.length > 0 ? [seed.slice(0, n), seed.slice(n)] : null),
    xs
  );

export const splitEvery =
  (n, xs) => n <= 0 ? throwErrors()
                    : _splitEvery(n, xs);
