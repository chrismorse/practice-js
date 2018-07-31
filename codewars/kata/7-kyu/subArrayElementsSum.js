function elementsSum(arr,d){

  let defaultval = d || 0;
  let elem = arr.length-1;
  let sum = 0;
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > elem) {
      console.log(i, arr[i][elem]);
      sum += arr[i][elem];
    } else {
      sum += defaultval;
    }    
    
    elem--;
  }
  
  return sum;
}