import {curry} from '../functional/curry';

export const concat = curry((...args) => [].concat(...args), 2);
