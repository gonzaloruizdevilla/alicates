export const nthArg =
  n =>
    (...args) => n >= 0 ? args[n]
                       : args[args.length + n];
