// https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5/solutions/javascript

function reverseNumber(n) {

  let s = n.toString().split("");
  let startNeg = (s[0] === '-') ? true : false;
  let returnVal;
  
  if (startNeg) {
    returnVal = parseInt("-" + s.slice(1,s.length).reverse().join(""))
  } else {
    returnVal = parseInt(s.reverse().join(""));
  }
  
  return returnVal;
}