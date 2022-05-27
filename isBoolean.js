// Check if a value is classified as a boolean primitive. Return true or false:

function booWho(bool) {
  switch(bool){
    case true:
    case false:
      return true;
    default:
      return false;
  }
}

console.log(booWho(true));
