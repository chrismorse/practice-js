// https://www.codewars.com/kata/55983863da40caa2c900004e

function nextBigger(n){
  digits = n.toString().split("");
  
  // find next smaller digit comparing consecutive right to left
  for (var i = digits.length - 2; i >= 0; i--) {
    if (parseInt(digits[i]) < parseInt(digits[i+1])) {

      // find smallest digit in the right hand side that is greater than digits[i]
      var smallest = i+1;
      for (var j = i+1; j < digits.length; j++) {
        if (digits[j] > digits[i] && digits[j] < digits[smallest]) {
          smallest = j;
        }
      }

      // swap those digits
      let temp = digits[i];
      digits[i] = digits[smallest];
      digits[smallest] = temp;
      
      let arrFirstPart = digits.slice(0,i+1);
      let arrLastPart = digits.slice(i+1)

      // sort the right hand side
      arrLastPart.sort();
      
      return parseInt(arrFirstPart.concat(arrLastPart).join(''));
    }
    
  }
  
  return -1;
  
}