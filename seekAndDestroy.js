/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.
Note: You have to use the arguments object.
*/

function destroyer(arr) {
  let args = [...arguments]; //get all arguments passed into function.
  args.shift(); //remove the array passed
  // console.log(args);
  let newArr = [];
  for(let i=0; i<arr.length; i++){
    newArr = arr.filter((x) => {return args.indexOf(x) == -1});
  }
  return newArr ;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
