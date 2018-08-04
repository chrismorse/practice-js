// https://www.codewars.com/kata/5b4e474305f04bea11000148/solutions/javascript

function digits(num){
  let allNums = num.toString().split("").map(a => +a);
  let results = [];
  
  for (let i = 0; i < allNums.length-1; i++) {
    for (let j = i+1; j < allNums.length; j++) {
      results.push(allNums[i] + allNums[j]);  
    }
  }
  return results;
}
