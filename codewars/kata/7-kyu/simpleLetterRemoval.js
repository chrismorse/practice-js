// https://www.codewars.com/kata/5b728f801db5cec7320000c7/solutions/javascript
function solve(s, k){
    
  let seen = new Set();
  for (let i = 0; i < s.length; i++) {
    if (!seen.has(s[i])) {
      seen.add(s[i])
    }
  }
  
  let removeOrder = Array.from(seen);
  removeOrder.sort();
  let currEl, returnVal = s;

  while (k > 0) {
    currEl = removeOrder.shift();
    returnVal = '';

    for (let i = 0; i < s.length; i++) {
      if (s[i] === currEl) {
        k--;
      } else {
        returnVal += s[i];
      }

      if (k === 0) {
        returnVal += s.substr(i+1);
        break;
      }

    }
    s = returnVal;
    if (returnVal === '')
      return '';
  }
  
  return returnVal 
}