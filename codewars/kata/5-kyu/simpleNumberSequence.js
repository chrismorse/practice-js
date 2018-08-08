// https://www.codewars.com/kata/5a28cf591f7f7019a80000de/solutions/javascript

function missing(s) {

  console.log("s ---> ", s);
  let index = 0;
  let digits = 1;
  let thisNum, thisNextNum, thisNextNumMoreDigits, thisNumPlus1, missingNumber, singleMissingNumber = false;

  while (index < s.length) {
    console.log();
    console.log("digits", digits);
    thisNum = parseInt(s.substr(index, digits));
    thisNextNum = parseInt(s.substr(index+digits, digits));
    thisNextNumMoreDigits = parseInt(s.substr(index+digits, digits+1));
    thisNumPlus1 = thisNum + 1;
    
    console.log("thisNum", thisNum);
    console.log("digits", digits);
    console.log("thisNextNum", thisNextNum);
    console.log("thisNextNumMoreDigits", thisNextNumMoreDigits);
    console.log("thisNumPlus1", thisNumPlus1);
    
    if (thisNextNum - thisNum === 1) {
      console.log("within 1.. keep it going!")
    } else if (thisNextNum - thisNum === 2) {
      console.log("missing ----> ", thisNum+1);
      
      if (singleMissingNumber)
        return -1;
      
      missingNumber = thisNum+1;
      singleMissingNumber = true;
      
    } else if (thisNextNumMoreDigits - thisNum === 2) {
      console.log("another digit within 2 ", thisNextNumMoreDigits);
      console.log("missing ----> ", thisNum+1);
      if (singleMissingNumber)
        return -1;
      
      missingNumber = thisNum+1;
      singleMissingNumber = true;

      digits++;
      index--;

    } else if (thisNextNumMoreDigits - thisNum === 1) {
      console.log("another digit within 1 ", thisNextNumMoreDigits);
      digits++;
      index--;

    } else if (thisNextNum - thisNum > 2 || thisNextNum - thisNum <= 0) {
      console.log("wrong digit");
      singleMissingNumber = false;
      digits++;
      index = 0;
      continue;
    }

    index = index + digits;
  }


if (singleMissingNumber)
  return missingNumber;

return -1;


}