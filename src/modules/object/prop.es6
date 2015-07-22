//TODO:  check Content Security Policy to use new Function when allowed.
export const prop =
  (a, ...args) =>
    args.length > 0 ? args[0][a]
                    : (b => b[a]);
