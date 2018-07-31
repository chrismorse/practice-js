// https://www.codewars.com/kata/5aff237c578a14752d0035ae/solutions/javascript

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){

  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i] * arguments[i];
  }

  return Math.floor(Math.sqrt(sum)/2);
}