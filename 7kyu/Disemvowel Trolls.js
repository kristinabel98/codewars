function disemvowel(str) {
    var strArr = str.split('');
    for (var x = 0; x < str.length; x++) {
      var char = str[x].toLowerCase();
      if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
        strArr[x] = '';
      }
    }
    return strArr.join('');
  }