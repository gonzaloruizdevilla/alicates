import {curryN} from '../functional/curryN';

export const concat =
  curryN(
    2,
    (...args) =>
      [].concat(...args)
  );
