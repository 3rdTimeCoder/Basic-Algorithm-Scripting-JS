//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
  let largestNumsArr = [];
  
  // loop through outer array:
  for(let i=0; i<arr.length; i++){
    let innerArr = arr[i];
    let largestNum = Number.NEGATIVE_INFINITY;

    // loop through innerArr;
    for(let n=0; n<innerArr.length; n++){

      //find largest number in innerArr
      if(innerArr[n] > largestNum){
        largestNum = innerArr[n];
      }

    }
    largestNumsArr.push(largestNum);

  }
  
  return largestNumsArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
