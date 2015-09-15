import {curry} from '../functional/curry';
import {head} from './head';
import {tail} from './tail';

const _partition =
    (pred, xs, acc) =>
        xs.length === 0 ? acc
                        : _partition(
                            pred,
                            tail(xs),
                            pred(head(xs)) ? [[...acc[0], head(xs)], acc[1]]
                                           : [acc[0], [...acc[1], head(xs)]]
                        );

export const partition =
    curry(
        (pred, xs) => _partition(pred, xs, [[],[]])
    );
