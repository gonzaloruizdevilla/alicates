import {curry} from '../functional/curry';

/* jshint -W016 */
export
  const contains = curry((x, arr) => (!!~arr.indexOf(x)));
/* jshint +W016 */
