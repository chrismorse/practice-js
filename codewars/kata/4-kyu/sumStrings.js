// https://www.codewars.com/kata/5324945e2ece5e1f32000370

function sumStrings(a,b) { 
  
  var removeLeadingZeros = function(x) { for (var i = 0; i < x.length; i++) {if (x[i] === '0') continue; else return x.slice(i);}}
  
  // deal with empty strings
  if (a === '')
    return b;

  if (b === '')
    return a;
  
  a = removeLeadingZeros(a);
  b = removeLeadingZeros(b);

  var sum = "";
  var carry = 0;
  var i = a.length;
  var j = b.length;

  // Do addition digit by digit.  Start with far right. Include a carry if needed.
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