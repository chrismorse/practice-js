// https://www.codewars.com/kata/yes-no-yes-no/

function yesNo(arr){

  let i = 0, returnNums = [];
  
  while(arr.length > 0) {
    returnNums.push(arr[i]);
    arr = arr.filter((num, j) => i !== j);
    i = (i + 1) % arr.length;
  }

  return returnNums;
}