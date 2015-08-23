export const keysIn =
  a => {
    let ks = [];
    for (let prop in a) {
      ks[ks.length] = prop;
    }
    return ks;
  };
