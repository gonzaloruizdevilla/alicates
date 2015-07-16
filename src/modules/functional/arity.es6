export const arity = (n, fn) =>
  n === 0  ? ((...args) => fn(...args)) :
  n === 1  ? ((a0, ...args) => fn(a0, ...args)) :
  n === 2  ? ((a0, a1, ...args) => fn(a0, a1, ...args)) :
  n === 3  ? ((a0, a1, a2, ...args) => fn(a0, a1, a2, ...args)) :
  n === 4  ? ((a0, a1, a2, a3, ...args) => fn(a0, a1, a2, a3, ...args)) :
  n === 5  ? ((a0, a1, a2, a3, a4, ...args) => fn(a0, a1, a2, a3, a4, ...args)) :
  n === 6  ? ((a0, a1, a2, a3, a4, a5, ...args) => fn(a0, a1, a2, a3, a4, a5, ...args)) :
  n === 7  ? ((a0, a1, a2, a3, a4, a5, a6, ...args) => fn(a0, a1, a2, a3, a4, a5, a6, ...args)) :
  n === 8  ? ((a0, a1, a2, a3, a4, a5, a6, a7, ...args) => fn(a0, a1, a2, a3, a4, a5, a6, a7, ...args)) :
  n === 9  ? ((a0, a1, a2, a3, a4, a5, a6, a7, a8, ...args) => fn(a0, a1, a2, a3, a4, a5, a6, a7, a8, ...args)) :
  n === 10 ? ((a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, ...args) => fn(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, ...args))
           : (()=>{throw new Error('First argument to _arity must be a non-negative integer no greater than ten')})();
