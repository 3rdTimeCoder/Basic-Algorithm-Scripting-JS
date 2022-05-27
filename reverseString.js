function reverseString(str) {
  let strArr = str.split("");
  let revStr = "";

  while(strArr.length > 0){
    revStr += strArr.pop();
  }
  return revStr;
}

console.log(reverseString("hello"));
