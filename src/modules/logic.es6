import {curry} from './functional/curry'

export
  const not = x => !x;

export
  const or = curry((a,b) => a || b) ;
