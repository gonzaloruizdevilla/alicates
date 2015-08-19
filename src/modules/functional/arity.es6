/*eslint-disable  no-unused-vars*/
export const arity = (n, fn) =>
  n === 0  ? function () { return fn.apply(this, arguments); }:
  n === 1  ? function (a0) { return fn.apply(this, arguments); }:
  n === 2  ? function (a0, a1) { return fn.apply(this, arguments); }:
  n === 3  ? function (a0, a1, a2) { return fn.apply(this, arguments); }:
  n === 4  ? function (a0, a1, a2, a3) { return fn.apply(this, arguments); }:
  n === 5  ? function (a0, a1, a2, a3, a4) { return fn.apply(this, arguments); }:
  n === 6  ? function (a0, a1, a2, a3, a4, a5) { return fn.apply(this, arguments); }:
  n === 7  ? function (a0, a1, a2, a3, a4, a5, a6) { return fn.apply(this, arguments); }:
  n === 8  ? function (a0, a1, a2, a3, a4, a5, a6, a7) { return fn.apply(this, arguments); }:
  n === 9  ? function (a0, a1, a2, a3, a4, a5, a6, a7, a8) { return fn.apply(this, arguments); }:
  n === 10 ? function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) { return fn.apply(this, arguments); }
           : (()=>{throw new Error(`First argument to arity (n:${n}) must be a non-negative integer no greater than ten`);})();
