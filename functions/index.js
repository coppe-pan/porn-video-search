const isObject = o => o !== null && typeof o === "object",
  isDictionary = o => isObject(o) && !Array.isArray(o)

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
  },
  dicToArray: function dicToArray(o, out = []) {
    Object.values(o).forEach(ele => {
      if (isDictionary(ele)) {
        dicToArray(ele, out)
      } else if (Array.isArray(ele)) {
        ele.forEach(e => {
          out.push(e)
        })
      } else {
        out.push(ele)
      }
    });
    return out
    }
  ,
  capitalize: s => s.length ? (s.charAt (0).toUpperCase () + s.slice (1)) : s,
  uncapitalize: s => s.length ? (s.charAt (0).toLowerCase () + s.slice (1)) : s
};
