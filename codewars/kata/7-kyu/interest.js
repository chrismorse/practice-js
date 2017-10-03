// https://www.codewars.com/kata/59cd0535328801336e000649

function interest(P,r,n) {
  
  let returnVals = [];
  let total = P;
 
  returnVals.push(Number(Math.round(P + P*r*n)));  
 
  for (let i = 0; i < n; i++) {
    total += total * r;
  }
  
  returnVals.push(Number(Math.round(total)));
  return returnVals;

}