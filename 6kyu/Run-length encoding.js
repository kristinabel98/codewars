var runLengthEncoding = function(str){
    const arr=[];
    let value=1;
    for (let i=0;i<str.length;i++){
        if (str[i]!==str[i+1]){
        arr.push([value,str[i]]);
        value=1;
        } else {
        value++;
        }
    }
    return arr;
  }