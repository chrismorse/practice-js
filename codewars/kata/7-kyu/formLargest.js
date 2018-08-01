// https://www.codewars.com/kata/5a4ea304b3bfa89a9900008e/solutions/javascript

function maxNumber(n){
  let nums = n.toString().split('');
  let output = [];
  
  for (let i = 0; i < nums.length; i++) {
    output.push(+nums[i]);
  }

  return +output.sort().reverse().join('');
}