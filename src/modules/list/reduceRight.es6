import {curry} from '../functional/curry';
import {init} from './init';
import {last} from './last';


export const reduceRight = curry((fn, acc, arr) => last(arr) !== undefined ? reduceRight(fn, fn(last(arr), acc), init(arr)) : acc);
