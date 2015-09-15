export const type =
  x =>
    ({}.toString.call(x).split(' ').pop().slice(0, -1));
