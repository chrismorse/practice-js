// https://www.codewars.com/kata/544aed4c4a30184e960010f4

function divisors(integer) {
  returnVal = [];
  
  for (let i = 2; i <= Math.sqrt(integer); i++) {
    if (integer % i === 0) 
      returnVal.push(i, integer / i);
  }
  
  return returnVal.length === 0 ? integer + " is prime" : returnVal.sort((a,b) => a-b);
}