export const keysIn =
  a => {
    var prop, ks = [];
    for (prop in a) {
      ks[ks.length] = prop;
    }
    return ks;
  }
