export const complement =
  fn1 =>
    (...args) =>
      !fn1(...args);
