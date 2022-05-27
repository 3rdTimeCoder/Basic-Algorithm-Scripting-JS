/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

function titleCase(str) {

  const lowerCaseStr = str.toLowerCase();
  const strArr = lowerCaseStr.split(" ");

  for(let i=0; i<strArr.length; i++){
    let wrd = strArr[i].split("");
    wrd[0] = wrd[0].toUpperCase();
    strArr[i] = wrd.join("");
  }

  return strArr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
