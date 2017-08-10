// https://www.codewars.com/kata/58d3487a643a3f6aa20000ff

function minMinMax(array) {
  
  var smallest = array.reduce((a,b) => Math.min(a,b))
  var largest = array.reduce((a,b) => Math.max(a,b))
  
  for (var i = smallest; i < largest; i++) {
    if (!array.includes(i))
      return [smallest, i, largest];
  }
}