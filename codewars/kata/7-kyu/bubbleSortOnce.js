// https://www.codewars.com/kata/bubblesort-once/train/javascript

function bubblesortOnce(intArr) {
  
  for (let i = 0; i < intArr.length-1; i++) {
    let comp1 = intArr[i];
    let comp2 = intArr[i+1];
    
    if (comp1 > comp2) {
      intArr[i] = comp2;
      intArr[i+1] = comp1;
    }
  }
  
  return intArr;

} 