// https://www.codewars.com/kata/bubblesort-once/train/javascript

function bubblesortOnce(intArr) {

  let returnArr = [];
  let comp1 = intArr[0];
  let comp2 = intArr[1];

  for (const item of intArr.slice(2)) {
    if (comp1 > comp2) {
      returnArr.push(comp2);
      comp2 = item;
    } else {
      returnArr.push(comp1);
      comp1 = item;
    }
  }

  if (comp1 > comp2) {
    returnArr.push(comp2);
    returnArr.push(comp1);
  } else {
    returnArr.push(comp1);
    returnArr.push(comp2);
  }

  return returnArr;
  
}