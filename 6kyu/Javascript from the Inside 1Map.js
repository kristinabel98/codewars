Array.prototype.map = function (callBack, context) {

    let arr = [];
    for (let i = 0; i < this.length; i++) {
        let number = this.hasOwnProperty(i) ? callBack.call(context, this[i], i, this) : undefined;
        arr.push(number);
      console.log(number);
      console.log(arr);
    }
   return arr;
}