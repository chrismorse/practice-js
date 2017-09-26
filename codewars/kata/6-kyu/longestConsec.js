// https://www.codewars.com/kata/consecutive-strings/

function longestConsec(strarr, k) {
    let longestStr = "";
    let longest = 0;
    
    for (let i = 0; i < strarr.length; i++) {
      if (i + k > strarr.length) {
        break;
      }
        
      let thisStr = "";
      for (let j = i; j < i + k; j++) {
        thisStr += strarr[j];
      }
      
      if (thisStr.length > longest) {
        longestStr = thisStr;
        longest = thisStr.length;
      }
      
    }
    
    return longestStr;
}