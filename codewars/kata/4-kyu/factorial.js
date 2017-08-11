// https://www.codewars.com/kata/large-factorials/

function factorial(n) {

  const sumStrings = (a,b) => {
    let sum = "", carry = 0, i = a.length, j = b.length;
  
    // do addition digit by digit.  Start with far right. Include a carry if needed.
    while (i > 0 || j > 0) {
      i--; j--;
      digitA = isNaN(parseInt(a[i])) ? 0 : parseInt(a[i])
      digitB = isNaN(parseInt(b[j])) ? 0 : parseInt(b[j])
  
      let digitSum = carry + digitA + digitB;
      carry = digitSum > 9 ? 1 : 0;
  
      sum = digitSum > 9 ? (digitSum - 10).toString() + sum : digitSum.toString() + sum; 
    }
    return carry ? "1" + sum : sum;
  }
  
  // walk through string right to left, multiply each digit by b. add zeros to the end for place value.
  const multiplyStringByNumber = (a,b) => {
    let product = "", productDigit = "", additionalZeros = "";
    for (let i = a.length - 1; i >= 0; i--) {
      productDigit = (b * parseInt(a[i])).toString() + additionalZeros 
      product = sumStrings(product, productDigit);
      additionalZeros += '0';
    }
    return product;
  }

  // factorial!
  let total = '1'
  for (let i = 1; i <= n; i++) {
    total = multiplyStringByNumber(total, i);
  } 

  return total;
}