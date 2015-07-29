const clonePattern =
  pattern => new RegExp(pattern.source, (pattern.global     ? 'g' : '') +
                                        (pattern.ignoreCase ? 'i' : '') +
                                        (pattern.multiline  ? 'm' : '') +
                                        (pattern.sticky     ? 'y' : '') +
                                        (pattern.unicode    ? 'u' : ''));

export const test =
  (pattern, s) =>
    clonePattern(pattern).test(s);
