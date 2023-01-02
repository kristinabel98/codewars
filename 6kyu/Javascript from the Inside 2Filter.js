Array.prototype.filter = function(callback, arg) {
    const result = [];
    const lengthOrig = this.length
    for(let i = 0; i < lengthOrig; i++) {
      i in this && callback.call(arg, this[i], i, this) ? result.push(this[i]) : undefined;
    }
    return result
  }