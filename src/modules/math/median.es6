import {identity} from '../functional/identity';
import {sortBy} from '../relation/sortBy';

const floor = Math.floor;

const sortedMedian =
  (xs, length) =>
    (length % 2) === 1 ? xs[floor(length / 2)]
                       : (xs[floor(length / 2) - 1] + xs[floor(length / 2)]) / 2;

export const median =
  xs =>
    sortedMedian(sortBy(identity, xs), xs.length);
