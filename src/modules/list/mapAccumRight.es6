import {curry} from '../functional/curry';
import {reduceRight} from './reduceRight';

const _mapAccumRight =
  (fn, a, xs) =>
    reduceRight(
      (x, acc, value) => (
          value = fn(acc[0], x),
          [value[0], [value[1], ...acc[1]]]
      ),
      [a, []],
      xs
    );

export const mapAccumRight =
  curry(_mapAccumRight);
