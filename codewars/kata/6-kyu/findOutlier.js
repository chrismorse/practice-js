// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

function findOutlier(integers){

  var firstIsEven = integers[0] % 2 === 0; 
  var secondIsEven = integers[1] % 2 === 0; 
  var thirdIsEven = integers[2] % 2 === 0; 
  
  var isArrayEven = false;
  
  // we can tell if the array is mostly even or odd based on the first 3 values
  if ((firstIsEven && secondIsEven) || (firstIsEven && thirdIsEven) || (secondIsEven && thirdIsEven))
    isArrayEven = true;
    
  function getOutlier(element) {
    if (isArrayEven) {
      return element % 2 === 1 || element % 2 === -1;
    } else {
      return element % 2 === 0;
    }
  }
  
  return integers.find(getOutlier);

}