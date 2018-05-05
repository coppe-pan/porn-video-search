const isObject = o => o !== null && typeof o === "object",
  isDictionary = o => isObject(o) && !Array.isArray(o);

module.exports = {
  isObject,
  isDictionary,
  deepExtend: function deepExtend(...xs) {
    let out = undefined;
    for (const x of xs) {
      if (isDictionary(x)) {
        if (!isObject(out)) out = {};
        for (const k in x) out[k] = deepExtend(out[k], x[k]);
      } else out = x;
    }
    return out;
  }
};
