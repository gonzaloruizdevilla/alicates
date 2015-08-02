export const reduced =
  value => ({
    '@@transducer/value':value,
    '@@transducer/reduced':true
});
