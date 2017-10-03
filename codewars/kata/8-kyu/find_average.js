// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

function find_average(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total/array.length;
}