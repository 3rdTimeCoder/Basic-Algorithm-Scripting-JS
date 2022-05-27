//find longest word in the string

function findLongestWordLength(str) {
  let strArr = str.split(" ");
  let longestWord = "";
  
  for(let i=0; i<strArr.length; i++){
    if(strArr[i].length > longestWord.length)
      longestWord = strArr[i];
  }
  console.log("longestWord: ",longestWord);
  return longestWord.length;
}

console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));
