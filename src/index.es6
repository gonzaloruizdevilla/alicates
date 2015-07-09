export
  const curry = (fn, aux) => (
    aux = args => args.length < fn.length ? (...newArgs) => aux(args.concat(newArgs))
                                          : f(...args)
  )([]);
export 
  const reduce = (op, a, [x, ...y]) => x !== undefined ? reduce(op, op(a, x), y) : a;
  
export
  const map = (op, y) => reduce((a, x) => [...a, op(x)], [], y);
  
  