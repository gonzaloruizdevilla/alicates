/* jshint -W067 */
export
  const cond = (arr) =>
    (...args) =>
      (aux =>
        (aux = ([x, ...arr]) => x === undefined ? undefined :
                                x[0](...args)   ? x[1](...args)
                                                : aux(arr)
        )(arr)
      )();
/* jshint +W067 */
