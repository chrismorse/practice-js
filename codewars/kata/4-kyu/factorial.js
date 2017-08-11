// https://www.codewars.com/kata/large-factorials/

function factorial(n) {

  // walk through string right to left, multiply each digit by b. track the carry
  const multiplyStringByNumber = (a,b) => {
    let result = [];
    let carry = 0;
    for (let i = a.length - 1, j = 0; i >= 0 || carry != 0; i--, j++) {
      carry += b * (parseInt(a[i]) || 0);
      result[j] = carry % 10;
      carry = Math.floor(carry / 10);
    }
    return result.reverse().join("");
  }

  // factorial!
  let total = '1'
  for (let i = 2; i <= n; i++) {
    total = multiplyStringByNumber(total, i);
  } 

  return total;
}